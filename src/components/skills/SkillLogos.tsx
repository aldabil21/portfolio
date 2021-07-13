/* eslint-disable @next/next/no-img-element */
import Script from "next/script";
import React, { Fragment, useEffect } from "react";

const options = {
  textColour: "#ffffff",
  outlineColour: "transparent",
  noSelect: true,
  textHeight: 20,
  maxSpeed: 0.1,
  imageMode: "both",
  wheelZoom: false,
};
const SkillLogos = () => {
  // @ts-ignore
  const loaded = typeof TagCanvas;
  const onTagsLoaded = () => {
    try {
      if (loaded === "undefined") {
        // @ts-ignore
        TagCanvas.Start("skills", "tags", options);
      }
    } catch (e) {
      // something went wrong, hide the canvas container
      // document.getElementById('myCanvasContainer').style.display = 'none';
    }
  };

  useEffect(() => {
    if (loaded !== "undefined") {
      // @ts-ignore
      TagCanvas.Start("skills", "tags", options);
    }
  }, [loaded]);

  return (
    <Fragment>
      <Script src="/js/tags.js" onLoad={onTagsLoaded}></Script>
      <canvas style={{ width: "100%", minHeight: 450 }} id="skills">
        <ul id="tags">
          <li>
            <a>
              <img
                src="/images/skills/mysql-logo.svg"
                width={100}
                height={40}
                alt="Mysql"
              />
            </a>
          </li>
          <li>
            <a>
              <img
                src="/images/skills/react-logo.svg"
                width={60}
                height={35}
                alt="React"
              />
            </a>
          </li>
          <li>
            <a>
              <img
                src="/images/skills/js-logo.svg"
                width={35}
                height={30}
                alt="Javascript"
              />
            </a>
          </li>
          <li>
            <a>
              <img
                src="/images/skills/node-logo.svg"
                width={160}
                height={30}
                alt="Node"
              />
            </a>
          </li>
          <li>
            <a>
              <img
                src="/images/skills/ts-logo.svg"
                width={35}
                height={30}
                alt="Node"
              />
            </a>
          </li>
          <li>
            <a>
              <img
                src="/images/skills/nextjs-logo.svg"
                width={70}
                height={30}
                alt="Nextjs"
              />
            </a>
          </li>
          <li>
            <a>
              <img
                src="/images/skills/html-logo.svg"
                width={40}
                height={30}
                alt="html"
              />
            </a>
          </li>
          <li>
            <a>
              <img
                src="/images/skills/mongo-logo.svg"
                width={80}
                height={20}
                alt="Mongodb"
              />
            </a>
          </li>
          <li>
            <a>
              <img
                src="/images/skills/css-logo.svg"
                width={40}
                height={30}
                alt="css"
              />
            </a>
          </li>
          <li>
            <a>
              <img
                src="/images/skills/oc-logo.svg"
                width={40}
                height={30}
                alt="Opencart"
              />
            </a>
          </li>
        </ul>
      </canvas>
    </Fragment>
  );
};

export default SkillLogos;
