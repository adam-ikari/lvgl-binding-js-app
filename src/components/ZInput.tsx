import { Input } from "lvgljs-ui";
import React, { useState } from "react";

interface ZInputProps {}

const ZInput = (props: ZInputProps) => {
  const {} = props;
  const [value, setValue] = useState();
  return (
    <Input
      placeholder=""
      maxlength={20}
      value={value}
      onChange={(e) => setValue(e.value)}
      autoKeyBoard={true}
    ></Input>
  );
};

export type { ZInputProps };
export { ZInput };
