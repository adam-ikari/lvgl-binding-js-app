const enum ZWidthEnum {
  Auto = "auto",
  Full = "full",
}

type ZWidthType = `${ZWidthEnum}` | number;

const enum ZHeightEnum {
  Auto = "auto",
  Full = "full",
}

type ZHeightType = `${ZHeightEnum}` | number;

const enum ZSizeEnum {
  Small = "small",
  Default = "default",
  Large = "large",
}

type ZSizeType = `${ZSizeEnum}` | number;

const enum ZIconSymbol {
  Audio = "\uF001",
  Video = "\uF008",
  List = "\uF00B",
  Ok = "\uF00C",
  Close = "\uF00D",
  Power = "\uF011",
  Settings = "\uF013",
  Home = "\uF015",
  Download = "\uF019",
  Drive = "\uF01C",
  Refresh = "\uF021",
  Mute = "\uF026",
  VolumeMid = "\uF027",
  VolumeMax = "\uF028",
  Image = "\uF03E",
  Tint = "\uF043",
  Prev = "\uF048",
  Play = "\uF04B",
  Pause = "\uF04C",
  Stop = "\uF04D",
  Next = "\uF051",
  Eject = "\uF052",
  Left = "\uF053",
  Right = "\uF054",
  Plus = "\uF067",
  Minus = "\uF068",
  EyeOpen = "\uF06E",
  EyeClose = "\uF070",
  Warning = "\uF071",
  Shuffle = "\uF074",
  Up = "\uF077",
  Down = "\uF078",
  Loop = "\uF079",
  Directory = "\uF07B",
  Upload = "\uF093",
  Call = "\uF095",
  Cut = "\uF0C4",
  Copy = "\uF0C5",
  Save = "\uF0C7",
  Bars = "\uF0C9",
  Envelope = "\uF0E0",
  Charge = "\uF0E7",
  Paste = "\uF0EA",
  Bell = "\uF0F3",
  Keyboard = "\uF11C",
  Gps = "\uF124",
  File = "\uF158",
  Wifi = "\uF1EB",
  BatteryFull = "\uF240",
  Battery3 = "\uF241",
  Battery2 = "\uF242",
  Battery1 = "\uF243",
  BatteryEmpty = "\uF244",
  Usb = "\uF287",
  Bluetooth = "\uF293",
  Trash = "\uF2ED",
  Edit = "\uF304",
  Backspace = "\uF55A",
  SdCard = "\uF7C2",
  NewLine = "\uF8A2",
}

type ZIconSymbolType = `${ZIconSymbol}`;

export type { ZHeightType, ZWidthType, ZSizeType, ZIconSymbolType };
export type { StyleProps as ZStyleProps } from "lvgljs-ui/core/style";
export { ZWidthEnum, ZHeightEnum, ZSizeEnum, ZIconSymbol };
