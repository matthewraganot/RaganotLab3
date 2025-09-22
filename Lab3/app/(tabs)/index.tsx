import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Left Column */}
        <View style={styles.column}>
          {/* 3 small blue boxes */}
          <View style={styles.row}>
            <View style={[styles.smallBox, styles.blue]} />
            <View style={[styles.smallBox, styles.blue]} />
            <View style={[styles.smallBox, styles.blue]} />
          </View>

          {/* 1 green box */}
          <View style={[styles.mediumBox, styles.green]} />

          {/* 1 purple + 1 cyan side by side */}
          <View style={styles.row}>
            <View style={[styles.mediumBox, styles.purple]} />
            <View style={[styles.mediumBox, styles.cyan]} />
          </View>

          {/* Big orange box with 2 small blues and 1 medium blue inside */}
          <View style={[styles.largeBox, styles.orange]}>
            <View style={styles.row}>
              <View style={[styles.innerSmall, styles.blue]} />
              <View style={[styles.innerSmall, styles.blue]} />
            </View>
            <View style={[styles.innerMedium, styles.blue]} />
          </View>

          {/* Large blue at bottom */}
          <View style={[styles.largeBox, styles.blue]} />
        </View>

        {/* Right Column */}
        <View style={styles.column}>
          {/* Top green */}
          <View style={[styles.mediumBox, styles.green]} />

          {/* 2x2 purple grid */}
          <View style={styles.row}>
            <View style={[styles.mediumBox, styles.purple]} />
            <View style={[styles.mediumBox, styles.purple]} />
          </View>
          <View style={styles.row}>
            <View style={[styles.mediumBox, styles.purple]} />
            <View style={[styles.mediumBox, styles.purple]} />
          </View>

          {/* Green */}
          <View style={[styles.mediumBox, styles.green]} />

          {/* 3 small blues in a row */}
          <View style={styles.row}>
            <View style={[styles.smallBox, styles.blue]} />
            <View style={[styles.smallBox, styles.blue]} />
            <View style={[styles.smallBox, styles.blue]} />
          </View>

          {/* Large green bottom */}
          <View style={[styles.largeBox, styles.green]} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  container: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: 'center',
  },
  column: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    margin: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  smallBox: {
    flex: 1,
    height: 40,
    borderRadius: 6,
  },
  mediumBox: {
    flex: 1,
    height: 80,
    borderRadius: 6,
  },
  largeBox: {
    flex: 1,
    height: 120,
    borderRadius: 6,
    padding: 10,
    justifyContent: "space-between",
  },
  innerSmall: {
    flex: 1,
    height: 40,
    margin: 5,
    borderRadius: 6,
  },
  innerMedium: {
    flex: 1,
    height: 50,
    marginTop: 10,
    borderRadius: 6,
  },
  /* Colors */
  blue: { backgroundColor: "#2196f3" },
  green: { backgroundColor: "#4caf50" },
  orange: { backgroundColor: "#ff9800" },
  purple: { backgroundColor: "#e91e63" },
  cyan: { backgroundColor: "#00bcd4" },
});
