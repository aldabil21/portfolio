import { alpha, useTheme } from "@material-ui/core";
import React, { useCallback, useEffect } from "react";
import { useDomElResize } from "../../hooks/useDomResize";
import { isBrowser } from "../../util/helpers";

interface WithMatrixBGProps {
  children: React.ReactChild | React.ReactChild[];
  backgroundColor?: string;
  charColor?: string;
}
const COL_WIDTH = 18;
let drawInterval: NodeJS.Timeout;
const WithMatrixBG = ({
  children,
  backgroundColor,
  charColor,
}: WithMatrixBGProps) => {
  const main = useDomElResize("main");
  const theme = useTheme();
  const background = backgroundColor || theme.palette.background.default;
  const color = charColor || theme.palette.action.active;
  const renderMatrix = useCallback(() => {
    if (!isBrowser() || !main) return;
    // Get the canvas node and the drawing context
    const canvas = document.getElementById("matrix") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    // set the width and height of the canvas
    const width = (canvas.width = main.width);
    const height = (canvas.height = main.height);

    // Set Cols
    const cols = Math.floor(width / COL_WIDTH) + 1;
    const ypos = Array(cols).fill(height + 100);

    const draw = () => {
      // Draw a semitransparent rectangle on top of previous drawing
      ctx.fillStyle = alpha(background, 0.2);
      ctx.fillRect(0, 0, width, height);

      // Set color and font drawing context
      ctx.fillStyle = alpha(color, 0.7);
      ctx.font = "12pt Cairo, monospace";

      // for each column put a random character at the end
      ypos.forEach((y, ind) => {
        // generate a random character
        const text = String.fromCharCode(Math.random() * 128);
        // x coordinate of the column, y coordinate is already given
        const x = ind * COL_WIDTH;
        // render the character at (x, y)
        ctx.fillText(text, x, y);

        // randomly reset the end of the column if it's at least 100px high
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        // otherwise just move the y coordinate for the column COL_WIDTH down,
        else ypos[ind] = y + COL_WIDTH;
      });
    };

    // clearInterval(drawInterval);
    drawInterval = setInterval(draw, 40);
  }, [main, background, color]);
  useEffect(() => {
    renderMatrix();
    return () => clearInterval(drawInterval);
  }, [renderMatrix]);

  return (
    <section
      style={{ position: "relative", overflow: "hidden" }}
      className="fullheight"
    >
      <div
        className="position__centerlize"
        style={{ zIndex: -1, overflow: "hidden" }}
      >
        <canvas width="500" height="200" id="matrix" />
      </div>
      {children}
    </section>
  );
};

export default WithMatrixBG;
