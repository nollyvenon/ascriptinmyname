import React from "react";

import { Img } from "components";

const FrameColumnOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-6 items-center justify-start w-6">
          <div className="flex flex-col h-6 items-center justify-start w-6">
            <Img
              className="h-6 w-6"
              src="images/img_facebook.svg"
              alt="facebook"
            />
          </div>
        </div>
      </div>
    </>
  );
};

FrameColumnOne.defaultProps = {};

export default FrameColumnOne;
