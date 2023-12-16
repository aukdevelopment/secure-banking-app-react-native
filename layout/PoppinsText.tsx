import { Text, TextProps, TextStyle } from "react-native";
import React from "react";

interface IStyle extends TextStyle {
  fontWeight?: "bold" | "normal" | "400" | "500" | "600" | "700" | undefined;
}

interface IPoppinsText extends TextProps {
  style?: IStyle;
}

const PoppinsText: React.FC<IPoppinsText> = ({ children, style, ...props }) => {
  let customFont = "Poppins400Regular";

  let customStyle = {};

  if (style) {
    // console.log("if style");

    if (style.fontWeight) {
      // console.log("if fontWeight");
      const { fontWeight, ...cStyle } = style;
      customStyle = cStyle;
    } else {
      // console.log("else");

      customStyle = style;
    }
  }

  if (style?.fontWeight) {
    if (style.fontWeight === "500") {
      customFont = "Poppins500Medium";
    } else if (style.fontWeight === "600") {
      customFont = "Poppins600SemiBold";
    } else if (style.fontWeight === "700") {
      customFont = "Poppins700Bold";
    }
  }

  // console.log(customStyle, customFont);

  return (
    <Text
      style={[
        {
          color: "white",
          fontFamily: customFont,
        },
        customStyle,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default PoppinsText;
