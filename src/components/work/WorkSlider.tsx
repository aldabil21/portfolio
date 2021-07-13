import React, { Fragment, useEffect, useRef, useState } from "react";
import { animated, useSprings } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
// @ts-ignore
import swap from "lodash-move";
import { WithMediaQuery, WithMediaQueryProps } from "../hoc/WithMediaQuery";
import { WorkCard } from "../../models/workCards";
import WorkingCard from "./Card";
import CardInfo from "./CardInfo";

interface WorkSliderProps extends WithMediaQueryProps {
  cards: WorkCard[];
}

interface CardProps {
  order: number[];
  mx?: number;
  xDir: number;
  distance: number;
  active?: boolean;
  bounds?: DOMRect;
  length: number;
  isMobile: boolean;
}
const getCardProps =
  ({
    order,
    mx,
    xDir,
    distance,
    active,
    bounds,
    length,
    isMobile,
  }: CardProps) =>
  (index: number) => {
    const xm = mx || 0;
    const width = bounds?.width || 800;
    const hWidth = width / 2;
    const activeIdx = order[0];
    const current = activeIdx === index;
    const _x = current
      ? 0
      : hWidth +
        Math.max((hWidth / length) * 2, 300) +
        order.indexOf(index) * Math.min(hWidth / length, 40);
    const nextDraggable =
      activeIdx === order.length - 1 ? index === 0 : activeIdx === index - 1;
    const draggable = active && (current || (nextDraggable && xDir < 0));
    const x = draggable && current ? _x + xm : draggable ? _x + xm * 2 : _x;
    const skewed = hWidth / 8;
    const rotateY =
      draggable && current
        ? Math.min(-xm / 4, skewed)
        : current
        ? 0
        : draggable
        ? Math.min(0, -skewed - xm / 4)
        : -skewed;
    const scale =
      draggable && current
        ? Math.max(1 - distance / 1000, skewed / 100)
        : current
        ? 1
        : draggable
        ? Math.min(1, skewed / 100 + distance / 1000)
        : skewed / 100;
    const blur =
      draggable && current
        ? distance / 50
        : current
        ? 0
        : draggable
        ? 5 - distance / 50
        : 5;
    return {
      xyp: [x, rotateY, 1000],
      width: isMobile ? width : hWidth * 1.3,
      height: 350,
      scale,
      zIndex: length - order.indexOf(index) + 10,
      blur,
      immediate: (n: string) => n === "zIndex",
    };
  };
const WorkSlider = ({ cards, isMobile }: WorkSliderProps) => {
  const section = useRef<HTMLDivElement>(null);
  const originalOrder = useRef(cards.map((_, i) => i));
  const [activeIdx, setActiveIdx] = useState(0);
  const [springs, api] = useSprings(
    cards.length,
    getCardProps({
      order: originalOrder.current,
      mx: 0,
      xDir: 0,
      distance: 0,
      length: cards.length,
      isMobile,
    })
  );
  const animate = useDrag(
    ({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
      const bounds = section.current?.getBoundingClientRect();
      const width = bounds?.width || 400;
      const newIdx = cards.length;
      if (active && distance > width / 4) {
        cancel();
        if (xDir > 0) {
          originalOrder.current = swap(originalOrder.current, newIdx - 1, 0);
        } else {
          originalOrder.current = swap(originalOrder.current, 0, newIdx);
        }
      }
      setActiveIdx(originalOrder.current[0]);

      api.start(
        getCardProps({
          order: originalOrder.current,
          mx,
          xDir,
          distance,
          active,
          bounds,
          length: cards.length,
          isMobile,
        })
      );
    },
    {
      bounds: ({ args: [index] }) => {
        // const bounds = section.current?.getBoundingClientRect();
        // const width = (bounds?.width || 1) / 2;
        // const left = -(index > 0 ? 1 : 0) * width;
        // const right = (index > 0 ? 0 : 1) * width;
        // return {
        //   left,
        //   right,
        // };
      },
    }
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      const bounds = section.current?.getBoundingClientRect();
      api.start(
        getCardProps({
          order: originalOrder.current,
          mx: 0,
          xDir: 0,
          distance: 0,
          bounds,
          length: cards.length,
          isMobile,
        })
      );
    }, 300);
    return () => clearTimeout(timeout);
  }, [api, cards, isMobile]);

  return (
    <Fragment>
      <section
        style={{ minHeight: 350, position: "relative", overflow: "hidden" }}
        className="fullheight"
        ref={section}
      >
        {springs.map((style, i) => {
          const { xyp, blur } = style;
          return (
            <animated.div
              {...animate(i)}
              style={{
                ...(style as any),
                transform: xyp.to(
                  (x, y, p) =>
                    `translate3d(${x}px, 0px, 0px) perspective(${p}px) rotateY(${y}deg)`
                ),
                filter: blur.to((v) => `blur(${v}px)`),
              }}
              key={i}
              className="draggble-item"
            >
              <WorkingCard card={cards[i]} />
            </animated.div>
          );
        })}
        <CardInfo card={cards[activeIdx]} />
      </section>
    </Fragment>
  );
};

export default WithMediaQuery(WorkSlider);
