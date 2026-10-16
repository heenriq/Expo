import * as Device from "expo-device";
import { Platform, StyleSheet, TextInput, Button, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import { AnimatedIcon } from "@/components/animated-icon";
import { HintRow } from "@/components/hint-row";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { WebBadge } from "@/components/web-badge";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";

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
export function calcDelta(a: number, b: number, c: number) {
  let delta = b ** 2 - 4 * a * c;
  return delta;
}

export default function pitagorasView() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState("");

  function calcular() {
    let valueA = Number(a);
    let valueB = Number(b);
    let valueC = Number(c);

    if (isNaN(valueA) || isNaN(valueB) || isNaN(valueC)) {
      alert("A, b ou C inválidos.");
      return;
    }

    let delta = calcDelta(valueA, valueB, valueC);

    if (delta < 0) {
      alert("valor de delta negativo");
      return;
    } else if (delta === 0) {
      valueB = valueB * -1;
      valueA = valueA * 2;
      let x1 = valueB / valueA;
      return setResult(`Resultado (DELTA = 0): X1 = ${x1} `);
    }
    let x1;
    let x2;
    valueB = valueB * -1;
    x1 = ((valueB + delta ** 0.5) / 2) * valueA;
    x2 = ((valueB - delta ** 0.5) / 2) * valueA;

    setResult(`Resultado: X1 = ${x1} | X2 = ${x2}.`);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.heroSection}>
        <Text style={styles.titleText}>Bhaskara</Text>
        <Text style={styles.baseText}>Ax² + Bx + C = 0</Text>
        <TextInput
          style={styles.input}
          id="valueA"
          value={a}
          onChangeText={setA}
          placeholder="A"
          inputMode="numeric"
        />
        <TextInput
          style={styles.input}
          id="valueB"
          value={b}
          onChangeText={setB}
          placeholder="B"
          inputMode="numeric"
        />
        <TextInput
          style={styles.input}
          id="valueC"
          value={c}
          onChangeText={setC}
          placeholder="C"
          inputMode="numeric"
        />

        <Button title="Calcular" color="#226bf5" onPress={calcular} />

        <Text style={styles.titleText}>{result}</Text>
      </SafeAreaView>
    </SafeAreaProvider>
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
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
