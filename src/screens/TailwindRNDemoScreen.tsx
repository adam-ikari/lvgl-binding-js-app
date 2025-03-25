import { ZNavScreenLayout } from "@/layouts";
import { Text } from "lvgljs-ui";
import React from "react";
import { useTailwind } from "tailwind-rn";

const TailwindRNDemoScreen = () => {
  const tailwind = useTailwind();
  return (
    <ZNavScreenLayout>
      <Text style={tailwind("text-blue-800 font-semibold")}>
        Hello Tailwind
      </Text>
    </ZNavScreenLayout>
  );
};
export default TailwindRNDemoScreen;
