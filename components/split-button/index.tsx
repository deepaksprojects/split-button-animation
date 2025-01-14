import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Palette } from "@/constants/Colors";

type SplitAction = {
  label: string;
  onPress: () => void;
  backgroundColor: string;
};
type SplitButtonProps = {
  splitted: boolean;
  mainAction: SplitAction;
  leftAction: SplitAction;
  rightAction: SplitAction;
};

const SplitButton: React.FC<SplitButtonProps> = ({
  leftAction,
  mainAction,
  rightAction,
  splitted,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.mainActionContainer,
          { backgroundColor: mainAction.backgroundColor },
        ]}
      >
        <Text style={[styles.label]}>{mainAction.label}</Text>
      </View>
    </View>
  );
};

export default SplitButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    paddingHorizontal: 10,
  },
  mainActionContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 28,
  },
  label: {
    fontSize: 16,
    fontFamily: "FiraCode-Regular",
    textTransform: "lowercase",
    color: Palette.text,
  },
});
