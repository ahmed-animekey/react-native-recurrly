import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

const SaudiRiyalIcon = ({
  size = 24,
  color = "#000000",
  strokeWidth = 3,
}: Props) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" color={color}>
    <Path
      d="m20 19.5l-5.5 1.2m0-16.7v11.22a1 1 0 0 0 1.242.97L20 15.2M2.978 19.351l5.549-1.363A2 2 0 0 0 10 16V2m10 8L4 13.5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SaudiRiyalIcon;
