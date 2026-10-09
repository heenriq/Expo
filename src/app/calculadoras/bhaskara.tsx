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

export default function pitagorasView() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.heroSection}>
        <Text style={styles.titleText}>Bhaskara</Text>
        <Text style={styles.baseText}>Ax² + Bx + C = 0</Text>
        <TextInput
          style={styles.input}
          id="valueA"
          placeholder="A"
          inputMode="numeric"
        />
        <TextInput
          style={styles.input}
          id="valueB"
          placeholder="B"
          inputMode="numeric"
        />
        <TextInput
          style={styles.input}
          id="valueC"
          placeholder="C"
          inputMode="numeric"
        />
        <Button title="Calcular" color="#226bf5" />
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
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
