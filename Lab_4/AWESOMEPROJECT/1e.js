import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

var radio_props = [
  { label: "Male", value: 0 },
  { label: "Female", value: 1 },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.head1}>REGISTER</Text>
      <View style={styles.rowInput}>
        <TextInput style={styles.input} placeholder="Name" />
      </View>
      <View style={styles.rowInput}>
        <TextInput style={styles.input} placeholder="Phone" />
      </View>
      <View style={styles.rowInput}>
        <TextInput style={styles.input} placeholder="Email" />
      </View>
      <View style={styles.rowInput}>
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity>
          <Image
            source={require("./assets/1e/eye 1.png")}
            style={[styles.icon, { width: 36, height: 36 }]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rowInput}>
        <TextInput style={styles.input} placeholder="Birthday" />
      </View>
      <View style={[styles.rowInput, { backgroundColor: "transparent" }]}>
        <RadioForm
          style={{ display: "flex", flexDirection: "row" }}
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {}}
        />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff" }}>
          REGISTER
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 14, fontWeight: "400" }}>
        When you agree to terms and conditions
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  head1: {
    fontSize: 25,
    fontWeight: "700",
  },
  rowInput: {
    width: 330,
    height: 54,
    backgroundColor: "rgba(242, 242, 242, 1)",
    display: "flex",
    flexDirection: "row",
  },
  input: {
    width: 330,
    padding: 10,
  },
  icon: {
    position: "absolute",
    top: 8,
    right: 10,
  },
  btn: {
    width: 330,
    height: 45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(229, 57, 53, 1)",
  },
});