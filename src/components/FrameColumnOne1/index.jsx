import React from "react";

import { Img } from "components";

const FrameColumnOne1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-6 items-center justify-start w-6">
          <div className="flex flex-col h-6 items-center justify-start w-6">
            <Img className="h-6 w-6" src="images/img_camera.svg" alt="camera" />
          </div>
        </div>
      </div>
    </>
  );
};

FrameColumnOne1.defaultProps = {};

export default FrameColumnOne1;
