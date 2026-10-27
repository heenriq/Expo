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
  TextInput,
  View,
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
export function calc() {}

export function operacao(op: string, dis) {
  dis = parseFloat(dis)
  if(isNaN(dis)){
    alert("Selecione ao menos um numero!")
  }
}

export default function calcScreen() {
  const [visor, setVisor] = useState("0");

  const digitar = (tecla: string) => {
    setVisor(visor + tecla);
  };
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
                onPress={() => digitar(numero)}
              />
            ))}
            <Button title="+" onPress={() => operacao("+", visor)} />
          </View>
          <View style={styles.linha}>
            {["4", "5", "6"].map((numero) => (
              <Button
                key={numero}
                title={numero}
                onPress={() => digitar(numero)}
              />
            ))}
            <Button title="-" onPress={() => operacao("-", visor)} />
          </View>
          <View style={styles.linha}>
            {["1", "2", "3"].map((numero) => (
              <Button
                key={numero}
                title={numero}
                onPress={() => digitar(numero)}
              />
            ))}{" "}
            <Button title="x" onPress={() => operacao("x", visor)} />
          </View>
          <View style={styles.linha}>
            <Button title="C" />
            <Button title="0" onPress={() => digitar("0")} />
            <View style={styles.espacoExtra}>
              <Button title="/" onPress={() => operacao("/", visor)} />
            </View>
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
