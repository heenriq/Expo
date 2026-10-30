import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import * as Device from "expo-device";
import { useState } from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View
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

export function calc(a: number, op: string, b: number): number {
  if (op === "+") {
    return a + b;
  } else if (op === "-") {
    return a - b;
  } else if (op === "x") {
    return a * b;
  } else {
    return a / b;
  }
}

export function operacao(dis: string, operador: string): number {
  if (operador !== "") {
    alert("Somente uma operação é permitida por vez!");
    return NaN;
  }
  const numero = parseFloat(dis);
  if (isNaN(numero)) {
    alert("Selecione ao menos um numero!");
  }
  return numero;
}

export function digitar(visor: string, tecla: string): string {
  return visor + tecla;
}

export default function calcScreen() {
  const [visor, setVisor] = useState("");
  const [numeroA, setNumeroA] = useState(0);
  const [operador, setOperador] = useState("");

  function clicarOperacao(op: string) {
    const a = operacao(visor, operador);
    if (isNaN(a)) {
      return;
    }
    setNumeroA(a);
    setOperador(op);
    setVisor("");
  }

  function clicarIgual() {
    if (operador === "") {
      return;
    }
    const b = parseFloat(visor);
    if (isNaN(b)) {
      alert("Digite o segundo numero!");
      return;
    }
    setVisor(String(calc(numeroA, operador, b)));
    setOperador("");
  }

  function limpar() {
    setVisor("");
    setOperador("");
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <View style={styles.visor}>
            <Text style={styles.textoVisor}>{visor}</Text>
          </View>
          <View style={styles.linha}>
            {["7", "8", "9"].map((numero) => (
              <Button
                key={numero}
                title={numero}
                onPress={() => setVisor(digitar(visor, numero))}
              />
            ))}
            <Button
              title="+"
              onPress={() => clicarOperacao("+")}
              color="orange"
            />
          </View>
          <View style={styles.linha}>
            {["4", "5", "6"].map((numero) => (
              <Button
                key={numero}
                title={numero}
                onPress={() => setVisor(digitar(visor, numero))}
              />
            ))}
            <Button
              title="-"
              onPress={() => clicarOperacao("-")}
              color="orange"
            />
          </View>
          <View style={styles.linha}>
            {["1", "2", "3"].map((numero) => (
              <Button
                key={numero}
                title={numero}
                onPress={() => setVisor(digitar(visor, numero))}
              />
            ))}
            <Button
              title="x"
              onPress={() => clicarOperacao("x")}
              color="orange"
            />
          </View>
          <View style={styles.linha}>
            <Button title="C" onPress={limpar} color="red" />
            <Button title="0" onPress={() => setVisor(digitar(visor, "0"))} />
            <Button title="=" onPress={clicarIgual} color="green" />
            <Button
              title="/"
              onPress={() => clicarOperacao("/")}
              color="orange"
            />
          </View>
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
  linha: {
    flexDirection: "row",
    gap: 10,
  },
  espacoExtra: {
    marginLeft: 37,
  },
  visor: {
    width: 300,
    height: 80,
    backgroundColor: "#222222",
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  textoVisor: {
    fontSize: 28,
    color: "#ffffff",
  },
});
