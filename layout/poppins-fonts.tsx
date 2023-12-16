import { Text, TextProps } from "react-native";
import React from "react";

export const PoppinsRegular: React.FC<TextProps> = ({
  children,
  style,
  ...props
}) => {
  // 400
  return (
    <Text
      style={[
        {
          color: "white",
          fontFamily: "Poppins400Regular",
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export const PoppinsMedium: React.FC<TextProps> = ({
  children,
  style,
  ...props
}) => {
  // 500

  return (
    <Text
      style={[
        {
          color: "white",
          fontFamily: "Poppins500Medium",
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};
export const PoppinsSemiBold: React.FC<TextProps> = ({
  children,
  style,
  ...props
}) => {
  // 600

  return (
    <Text
      style={[
        {
          color: "white",
          fontFamily: "Poppins600SemiBold",
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};
export const PoppinsBold: React.FC<TextProps> = ({
  children,
  style,
  ...props
}) => {
  // 500

  return (
    <Text
      style={[
        {
          color: "white",
          fontFamily: "Poppins700Bold",
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};
