import { StyleSheet, View } from "react-native";
import { Palette } from "@/constants/Colors";
import SplitButton from "@/components/split-button";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SplitButton
        mainAction={{
          label: "Stop",
          onPress: () => console.log("stop"),
          backgroundColor: Palette.card,
        }}
        leftAction={{
          label: "Resume",
          onPress: () => console.log("Resume"),
          backgroundColor: Palette.card,
        }}
        rightAction={{
          label: "Finish",
          onPress: () => console.log("Finish"),
          backgroundColor: Palette.card,
        }}
        splitted={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.background,
    justifyContent: "center",
  },
});
