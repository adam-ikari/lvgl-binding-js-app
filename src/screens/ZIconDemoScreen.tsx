import { COLORS } from "@/common_style";
import {
  ZColumn,
  ZIcon,
  ZIconSymbol,
  ZRow,
  ZSizeEnum,
  ZText,
  ZWidthEnum,
} from "@/components";
import { ZNavHeaderLayout } from "@/layouts";
import React from "react";

const iconSymbolData = [
  { text: "Audio", icon: ZIconSymbol.Audio },
  { text: "Video", icon: ZIconSymbol.Video },
  { text: "List", icon: ZIconSymbol.List },
  { text: "Ok", icon: ZIconSymbol.Ok },
  { text: "Close", icon: ZIconSymbol.Close },
  { text: "Power", icon: ZIconSymbol.Power },
  { text: "Settings", icon: ZIconSymbol.Settings },
  { text: "Home", icon: ZIconSymbol.Home },
  { text: "Download", icon: ZIconSymbol.Download },
  { text: "Drive", icon: ZIconSymbol.Drive },
  { text: "Refresh", icon: ZIconSymbol.Refresh },
  { text: "Mute", icon: ZIconSymbol.Mute },
  { text: "VolumeMid", icon: ZIconSymbol.VolumeMid },
  { text: "VolumeMax", icon: ZIconSymbol.VolumeMax },
  { text: "Image", icon: ZIconSymbol.Image },
  { text: "Tint", icon: ZIconSymbol.Tint },
  { text: "Prev", icon: ZIconSymbol.Prev },
  { text: "Play", icon: ZIconSymbol.Play },
  { text: "Pause", icon: ZIconSymbol.Pause },
  { text: "Stop", icon: ZIconSymbol.Stop },
  { text: "Next", icon: ZIconSymbol.Next },
  { text: "Eject", icon: ZIconSymbol.Eject },
  { text: "Left", icon: ZIconSymbol.Left },
  { text: "Right", icon: ZIconSymbol.Right },
  { text: "Plus", icon: ZIconSymbol.Plus },
  { text: "Minus", icon: ZIconSymbol.Minus },
  { text: "EyeOpen", icon: ZIconSymbol.EyeOpen },
  { text: "EyeClose", icon: ZIconSymbol.EyeClose },
  { text: "Warning", icon: ZIconSymbol.Warning },
  { text: "Shuffle", icon: ZIconSymbol.Shuffle },
  { text: "Up", icon: ZIconSymbol.Up },
  { text: "Down", icon: ZIconSymbol.Down },
  { text: "Loop", icon: ZIconSymbol.Loop },
  { text: "Directory", icon: ZIconSymbol.Directory },
  { text: "Upload", icon: ZIconSymbol.Upload },
  { text: "Call", icon: ZIconSymbol.Call },
  { text: "Cut", icon: ZIconSymbol.Cut },
  { text: "Copy", icon: ZIconSymbol.Copy },
  { text: "Save", icon: ZIconSymbol.Save },
  { text: "Bars", icon: ZIconSymbol.Bars },
  { text: "Envelope", icon: ZIconSymbol.Envelope },
  { text: "Charge", icon: ZIconSymbol.Charge },
  { text: "Paste", icon: ZIconSymbol.Paste },
  { text: "Bell", icon: ZIconSymbol.Bell },
  { text: "Keyboard", icon: ZIconSymbol.Keyboard },
  { text: "Gps", icon: ZIconSymbol.Gps },
  { text: "File", icon: ZIconSymbol.File },
  { text: "Wifi", icon: ZIconSymbol.Wifi },
  { text: "BatteryFull", icon: ZIconSymbol.BatteryFull },
  { text: "Battery3", icon: ZIconSymbol.Battery3 },
  { text: "Battery2", icon: ZIconSymbol.Battery2 },
  { text: "Battery1", icon: ZIconSymbol.Battery1 },
  { text: "BatteryEmpty", icon: ZIconSymbol.BatteryEmpty },
  { text: "Usb", icon: ZIconSymbol.Usb },
  { text: "Bluetooth", icon: ZIconSymbol.Bluetooth },
  { text: "Trash", icon: ZIconSymbol.Trash },
  { text: "Edit", icon: ZIconSymbol.Edit },
  { text: "Backspace", icon: ZIconSymbol.Backspace },
  { text: "SdCard", icon: ZIconSymbol.SdCard },
  { text: "NewLine", icon: ZIconSymbol.NewLine },
];

const style = {
  BackgroundStyle: {
    "background-color": COLORS.PAGE_BACKGROUND,
  },
};

const ZIconDemoScreen = () => {
  return (
    <ZNavHeaderLayout title={"Icon Demo"} withBack>
      <ZText size={ZSizeEnum.Large}>Icons</ZText>
      <ZRow
        wrap
        width={ZWidthEnum.Full}
        style={{
          ...style.BackgroundStyle,
        }}
      >
        {iconSymbolData.map((item) => (
          <ZColumn
            key={item.text}
            style={{
              ...style.BackgroundStyle,
            }}
          >
            <ZIcon symbol={item.icon} />
            <ZText size={ZSizeEnum.Small}>{item.text}</ZText>
          </ZColumn>
        ))}
      </ZRow>
    </ZNavHeaderLayout>
  );
};

export default ZIconDemoScreen;
