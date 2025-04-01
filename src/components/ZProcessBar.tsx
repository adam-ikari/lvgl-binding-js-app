import { ProgressBar } from "lvgljs-ui";
import React, { useState } from "react";

interface ZProcessBarProps {
  [key: string]: any;
}

const style = {
  progressBar: {},
};

const ZProcessBar = (props: ZProcessBarProps) => {
  const [value, setValue] = useState(false);
  return (
    <>
      <ProgressBar style={style.progressBar} range={[0, 50]} value={30} />
    </>
  );
};
export type { ZProcessBarProps };
export default ZProcessBar;
