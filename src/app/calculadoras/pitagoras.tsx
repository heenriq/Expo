import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import * as Device from "expo-device";
import { useState } from "react";
import {
  Button,
  Image,
  Platform,
  StyleSheet,
  TextInput,
  Text,
} from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/Colors";
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

export function calcPitagoras(a, b, c) {
  if (
    (isNaN(a) && isNaN(b)) ||
    (isNaN(a) && isNaN(c)) ||
    (isNaN(b) && isNaN(c))
  ) {
    return "Erro";
  } else if (isNaN(a)) {
    a = c + b;
    return a;
  } else if (isNaN(b)) {
    b = a - c;
    return b;
  } else {
    c = a - b;
    return c;
  }
}

export default function pitagorasScreen() {
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [valueC, setValueC] = useState("");
  const [result, setResult] = useState("");

  const calc = () => {
    const a = parseFloat(valueA);
    const b = parseFloat(valueB);
    const c = parseFloat(valueC);
    console.log(a, b, c);
    setResult(`Resultado: ${calcPitagoras(a, b, c)}`);
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <Image source={require("./Pitagoras.jpg")} style={styles.Image} />
          <Text style={styles.titleText}>Pitágoras</Text>
          <Text style={styles.baseText}>Hipotenusa: a² = b² + c²</Text>
          <Text style={styles.baseText}>
            Catetos: b² (ou c) = a² - c² (ou b)
          </Text>
          <TextInput
            style={styles.input}
            value={valueA}
            onChangeText={setValueA}
            placeholder="Hipotenusa A"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={valueB}
            onChangeText={setValueB}
            placeholder="Cateto B"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={valueC}
            onChangeText={setValueC}
            placeholder="Cateto C"
            keyboardType="numeric"
          />
          <Button title="Calcular" onPress={calc} />
          <Text>{result}</Text>
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
    textAlign: "center",
    marginBottom: -5,
  },
  Image: { width: 400, height: 220 },
  baseText: {
    fontSize: 15,
    fontFamily: "Cochin",
    marginVertical: -10,
  },
});
