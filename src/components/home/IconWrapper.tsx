import { useSprings } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import { useGesture } from "react-use-gesture";
// @ts-ignore
import swap from "lodash-move";
import Icon from "./Icon";
import {
  getBounds,
  getClickedArgs,
  getDraggedArgs,
} from "../../util/draggable";
import { useDomElResize } from "../../hooks/useDomResize";
import { IconProps } from "./icons";
import { useRouter } from "next/router";
import { useTheme } from "@material-ui/core";
import { isBrowser } from "../../util/helpers";

interface IconWrapperProps {
  icons: IconProps[];
  perRow: number;
  iconWidth: number;
}

const IconWrapper = ({ icons, perRow, iconWidth }: IconWrapperProps) => {
  const originalOrder = useRef(icons.map((_, i) => i));
  const wrapper = useRef<HTMLDivElement>(null);
  const dragDeltaTime = useRef(0);
  const clickTime = useRef(Date.now());
  const [enabled, setEnabled] = useState(true);
  const [canExternal, setCanExternal] = useState(true);
  const [mounted, setMounted] = useState(false);
  const section = useDomElResize("icon_wrapper");
  const [springs, api] = useSprings(
    icons.length,
    getDraggedArgs({
      x: 0,
      y: 0,
      order: originalOrder.current,
      curIndex: 0,
      iconWidth,
      perRow,
    })
  );
  const router = useRouter();
  const theme = useTheme();

  const animate = useGesture(
    {
      onDrag: ({
        args: [index],
        active,
        movement: [x, y],
        timeStamp,
        first,
        last,
      }) => {
        const bounds = wrapper.current?.getBoundingClientRect();
        const curIndex = originalOrder.current.indexOf(index);
        const col = Math.floor(curIndex % perRow);
        const row = Math.floor(curIndex / perRow);
        const colsTotal = Math.ceil(icons.length / perRow);

        const xAxis = Math.round(
          ((col + x / (((bounds?.width || 1) + 30) / perRow)) * 100) / 100
        );
        const yAxis = Math.round(
          ((row + y / (((bounds?.height || 1) + 30) / colsTotal)) * 100) / 100
        );
        const newIndex = Math.min(xAxis + yAxis * perRow, icons.length - 1);
        const order = swap(originalOrder.current, curIndex, newIndex);
        api.start(
          getDraggedArgs({
            x,
            y,
            originalIdx: index,
            curIndex,
            active,
            bounds,
            order,
            iconWidth,
            perRow,
          })
        );
        // Update new order
        if (!active) {
          originalOrder.current = order;
        }
        // Set draggin status
        if (first && timeStamp) {
          dragDeltaTime.current = timeStamp;
        } else if (last && timeStamp) {
          dragDeltaTime.current = timeStamp - dragDeltaTime.current;
        }
      },
      onClick: async ({ event, args: [i] }) => {
        event.stopPropagation();
        const clickDeltaTime = Date.now() - clickTime.current;
        const { href } = icons[i];
        if (dragDeltaTime.current <= 200 && clickDeltaTime >= 200) {
          clickTime.current = Date.now();
          // Don't implement zoom-in if t's an external link icon
          if (!icons[i].external && !icons[i].soon) {
            setEnabled(false);
            const bounds = wrapper.current?.getBoundingClientRect();
            api.start((index) =>
              getClickedArgs({
                index,
                curIndex: i,
                bounds,
                bg: theme.palette.secondary.dark,
                onFinish: () => router.push(href),
              })
            );
          }
        }
        dragDeltaTime.current = 0;
      },
      onDragStart: () => {
        if (canExternal) {
          setCanExternal(false);
        }
      },
      onDragEnd: () => {
        if (dragDeltaTime.current <= 200) {
          setCanExternal(true);
        }
      },
    },
    {
      drag: {
        bounds: ({ args: [i] }) => {
          const bounds = wrapper.current?.getBoundingClientRect();
          const idx = originalOrder.current.indexOf(i);
          return getBounds({
            idx,
            bounds,
            iconWidth,
            perRow,
            itemsCount: 7,
          });
        },
        // delay: 1,
      },
      enabled: enabled,
    }
  );

  useEffect(() => {
    const bounds = wrapper.current?.getBoundingClientRect();
    api.start(
      getDraggedArgs({
        x: 0,
        y: 0,
        originalIdx: 0,
        curIndex: 0,
        active: false,
        bounds,
        order: originalOrder.current,
        iconWidth,
        perRow,
      })
    );
  }, [section, api, iconWidth, perRow]);
  // useEffect(() => {
  //   console.log("MOUNTED");
  //   setMounted(true);
  // }, []);

  return (
    <div className="fullheight" ref={wrapper}>
      {springs.map((style, i) => (
        <Icon
          {...animate(i)}
          key={i}
          style={style as any}
          icon={icons[i]}
          canExternal={canExternal}
        />
      ))}
    </div>
  );
};

export default IconWrapper;
