import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import * as Device from "expo-device";
import { useState } from "react";
import {
  Alert,
  Button,
  Platform,
  StyleSheet,
  TextInput,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function getDevMenuHint() {
  if (Platform.OS === "web") {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === "android" ? "cmd+m (or ctrl+m)" : "cmd+d";
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export function calcDelta(a, b, c) {
  return b ** 2 - 4 * a * c;
}

export function calcBhaskara(a, b, c) {
  const delta = calcDelta(a, b, c);
  console.log("delta", delta);

  if (delta === 0) {
    const x1 = (b * -1) / (2 * a);
    console.log("x1", x1);
  } else if (delta > 0) {
    const x1 = (b * -1 + delta ** 0.5) / (2 * a);
    const x2 = (b * -1 - delta ** 0.5) / (2 * a);
    console.log("x1", x1);
    console.log("x2", x2);
  } else {
    console.log("Error");
  }
}

export default function PitagorasScreen() {
  const [valueA, onChangeTextA] = useState(0);
  const [valueB, onChangeTextB] = useState(0);
  const [valueC, onChangeTextC] = useState(0);
  const [result, onChangeTextresult] = useState(0);

  const calc = () => {
    Alert.alert("asdasd");
    console.log("valueA", valueA);
    console.log("valueB", valueB);
    console.log("valueC", valueC);

    const delta = calcDelta(valueA, valueB, valueC);

    console.log("delta", delta);

    if (delta === 0) {
      const x1 = (valueB * -1) / (2 * valueA);
      console.log("x1", x1);
    } else if (delta > 0) {
      const x1 = (valueB * -1 + delta ** 0.5) / (2 * valueA);
      const x2 = (valueB * -1 - delta ** 0.5) / (2 * valueA);

      onChangeTextresult(`Resultado: \n X1 = ${x1} \n X2 = ${x2} \n Delta = ${delta}`);
    } else {
      console.log("Error");
    }
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <Text style={styles.titleText}>Bhaskara</Text>
          <Text style={styles.baseText}>Ax² + Bx + C = 0</Text>
          <TextInput
            style={styles.input}
            value={valueA}
            onChangeText={onChangeTextA}
          />
          <TextInput
            style={styles.input}
            value={valueB}
            onChangeText={onChangeTextB}
          />
          <TextInput
            style={styles.input}
            value={valueC}
            onChangeText={onChangeTextC}
          />
          <Button title="Calcular" onPress={calc} />
          <Text style={styles.titleText}>{result}</Text>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: "center",
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: "center",
  },
  code: {
    textTransform: "uppercase",
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: "stretch",
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  input: {
    textAlign: "center",
    width: 200,
    borderWidth: 1,
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  baseText: {
    fontFamily: "Cochin",
  },
});
