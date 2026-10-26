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
export function calc() {
  alert("pressionado")
}
export default function calcScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <View style={styles.visor}>
            <Text style={styles.textoVisor}></Text>
          </View>
          <View style={styles.linha}>
            <Button title="7" onPress={calc} />
            <Button title="8" />
            <Button title="9" />
            <Button title="+" />
          </View>
          <View style={styles.linha}>
            <Button title="4" />
            <Button title="5" />
            <Button title="6" />
            <Button title="-" />
          </View>
          <View style={styles.linha}>
            <Button title="1" />
            <Button title="2" />
            <Button title="3" />
            <Button title="x" />
          </View>
          <View style={styles.linha}>
            <Button title="C" />
            <Button title="0" />
            <View style={styles.espacoExtra}>
              <Button title="/" />
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
