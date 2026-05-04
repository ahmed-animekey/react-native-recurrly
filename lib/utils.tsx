import SaudiRiyalIcon from "@/components/SaudiRiyalIcon";
import dayjs from "dayjs";
import React, { useState } from "react";
import { Text, TextLayoutEvent, View } from "react-native";

export const formatSubscriptionDateTime = (value?: string): string => {
  if (!value) return "Not provided";
  const parsedDate = dayjs(value);
  return parsedDate.isValid()
    ? parsedDate.format("MM/DD/YYYY")
    : "Not provided";
};

export const formatStatusLabel = (value?: string): string => {
  if (!value) return "Unknown";
  return value.charAt(0).toUpperCase() + value.slice(1);
};

type FormatCurrencyOptions = {
  className?: string;
  iconSize?: number;
  iconColor?: string;
};

type SARPriceProps = {
  amount: string;
  className?: string;
  iconSize?: number;
  iconColor?: string;
};

const SARPrice = ({
  amount,
  className,
  iconSize,
  iconColor,
}: SARPriceProps) => {
  const [measuredSize, setMeasuredSize] = useState<number | undefined>();
  const size = iconSize ?? measuredSize ?? 16;

  const handleTextLayout = (event: TextLayoutEvent) => {
    if (iconSize !== undefined) return;
    const line = event.nativeEvent.lines[0];
    if (!line) return;
    const fontMetric = line.capHeight ?? line.ascender ?? line.height * 0.7;
    if (!fontMetric) return;
    const next = Math.round(fontMetric * 1.3);
    if (next !== measuredSize) setMeasuredSize(next);
  };

  return (
    <View className="flex-row items-center gap-1">
      <SaudiRiyalIcon size={size} color={iconColor} />
      <Text className={className} onTextLayout={handleTextLayout}>
        {amount}
      </Text>
    </View>
  );
};

export const formatCurrency = (
  value: number,
  currency: string = "SAR",
  options: FormatCurrencyOptions = {},
): React.ReactNode => {
  const { className, iconSize, iconColor } = options;

  try {
    if (currency === "SAR") {
      const amount = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
      return (
        <SARPrice
          amount={amount}
          className={className}
          iconSize={iconSize}
          iconColor={iconColor}
        />
      );
    }

    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
    return <Text className={className}>{formatted}</Text>;
  } catch {
    const fallback = value.toFixed(2);
    return (
      <Text className={className}>
        {currency === "SAR" ? fallback : `${fallback} ${currency}`}
      </Text>
    );
  }
};
