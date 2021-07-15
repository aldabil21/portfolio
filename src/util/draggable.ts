import { Controller } from "@react-spring/web";

interface draggedArgs {
  x: number;
  y: number;
  originalIdx?: number;
  curIndex: number;
  active?: boolean;
  bounds?: DOMRect;
  order: number[];
  perRow: number;
  iconWidth: number;
}
export const getDraggedArgs =
  ({
    x,
    y,
    originalIdx,
    curIndex,
    active,
    bounds,
    order,
    perRow,
    iconWidth,
  }: draggedArgs) =>
  (index: number) => {
    const col = Math.floor(order.indexOf(index) % perRow);
    const row = Math.floor(order.indexOf(index) / perRow);
    const activeCol = Math.floor(curIndex % perRow);
    const activeRow = Math.floor(curIndex / perRow);
    const hpadding = ((bounds?.width || 0) - iconWidth * perRow) / (perRow - 1);
    const rows = Math.ceil(order.length / perRow);
    const vpadding = ((bounds?.height || 0) - iconWidth * rows) / rows;
    const _x = col * Math.abs(iconWidth + hpadding);
    const _y = row * Math.abs(iconWidth + vpadding + 5);
    return active && index === originalIdx
      ? {
          x: activeCol * (iconWidth + hpadding) + x,
          y: activeRow * (iconWidth + vpadding) + y,
          scale: active ? 1.1 : 1,
          zIndex: active ? 10 : 1,
          shadow: active ? 10 : 0,
          opacity: 0.9,
          width: iconWidth,
          height: iconWidth,
          immediate: (n: string) => n === "zIndex",
        }
      : {
          x: _x,
          y: _y,
          scale: 1,
          zIndex: 1,
          shadow: 1,
          opacity: 1,
          width: iconWidth,
          height: iconWidth,
          immediate: (n: string) => n === "zIndex",
        };
  };

interface ClickedArgs {
  index: number;
  curIndex: number;
  bg: string;
  bounds?: DOMRect;
  onFinish(): void;
}

export const getClickedArgs = ({
  index,
  curIndex,
  bg,
  bounds,
  onFinish,
}: ClickedArgs) => {
  const x = (window.innerWidth - bounds?.width!) / 2;
  const y = (window.innerHeight - bounds?.height!) / 2;

  return index === curIndex
    ? {
        x: -x,
        y: -y,
        width: window.innerWidth,
        height: window.innerHeight,
        background: bg,
        zIndex: 10,
        opacity: 1,
        borderRadius: 0,
        immediate: (n: string) => n === "zIndex",
        onRest: onFinish,
        overflow: "hidden",
      }
    : {};
};

interface boundsProps {
  idx: number;
  bounds?: DOMRect;
  perRow: number;
  iconWidth: number;
  itemsCount: number;
}
export const getBounds = ({
  idx,
  bounds,
  perRow,
  itemsCount,
  iconWidth,
}: boundsProps) => {
  const col = Math.floor(idx % perRow);
  const row = Math.floor(idx / perRow);
  const hpadding = ((bounds?.width || 0) - iconWidth * perRow) / (perRow - 1);
  const rows = Math.ceil(itemsCount / perRow); //or ceil?
  const vpadding = ((bounds?.height || 0) - iconWidth * rows) / rows;
  const left = -col * (iconWidth + hpadding);
  const top = -row * (iconWidth + vpadding);
  return {
    left,
    right: left + (bounds?.width || 0) - iconWidth,
    top,
    bottom: top + (bounds?.height || 0) - iconWidth,
  };
};
