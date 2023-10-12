import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Checkbox } from "react-native-paper";

export default function App() {
  var [password, setPassword] = useState("");
  var [pLength, setPLength] = useState(0);
  var [lowercase, choiceLowerCase] = useState(true);
  var [uppercase, choiceUpperCase] = useState(true);
  var [number, choiceNumber] = useState(true);
  var [specialSymbol, choiceSpecialSymbol] = useState(true);
  var generatePassword = (length, lc, uc, num, sps) => {
    var lowercaseChars = "";
    var uppercaseChars = "";
    var numbers = "";
    var specialChars = "";
    var pattern = "";

    if (lc) {
      lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      pattern += "(?=.*[a-z])";
    }
    if (uc) {
      uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      pattern += "(?=.*[A-Z])";
    }
    if (num) {
      numbers = "0123456789";
      pattern += "(?=.*[0-9])";
    }
    if (sps) {
      specialChars = "@#$!%*?&";
      pattern += "(?=.*[@#$!%*?&])";
    }

    var finalPattern = new RegExp(pattern);
    var allChars = lowercaseChars + uppercaseChars + specialChars + numbers;
    let password = "";
    do {
      password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
      }
    } while (!finalPattern.test(password));

    setPassword(password);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerChild}>
        <View style={{ width: 181, height: 64 }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 25,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            PASSWORD GENERATOR
          </Text>
        </View>
        <View>
          <TextInput
            style={styles.inputDisplay}
            readOnly={true}
            value={password}
          />
        </View>
        <View>
          <View style={styles.row}>
            <Text style={styles.label}>Password length</Text>
            <TextInput
              onChangeText={setPLength}
              keyboardType="numeric"
              style={styles.inputLength}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Include lower case letters </Text>
            <Checkbox
              uncheckedColor="#fff"
              color="#fff"
              status={lowercase ? "checked" : "unchecked"}
              onPress={() => {
                choiceLowerCase(!lowercase);
              }}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Include upcase letters </Text>
            <Checkbox
              uncheckedColor="#fff"
              color="#fff"
              status={uppercase ? "checked" : "unchecked"}
              onPress={() => {
                choiceUpperCase(!uppercase);
              }}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Include number</Text>
            <Checkbox
              uncheckedColor="#fff"
              color="#fff"
              status={number ? "checked" : "unchecked"}
              onPress={() => {
                choiceNumber(!number);
              }}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Include special symbol </Text>
            <Checkbox
              uncheckedColor="#fff"
              color="#fff"
              status={specialSymbol ? "checked" : "unchecked"}
              onPress={() => {
                choiceSpecialSymbol(!specialSymbol);
              }}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              generatePassword(
                pLength,
                lowercase,
                uppercase,
                number,
                specialSymbol
              )
            }
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
              GENERATE PASSWORD
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 640,
    flex: 1,
    backgroundImage:
      "radial-gradient(145% 145% at 50% 50%, #3B3B98 26.56%, rgba(196, 196, 196, 0) 87.36%)",
    alignItems: "center",
    justifyContent: "center",
  },
  containerChild: {
    width: 322,
    height: 605,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(35, 35, 91, 1)",
    borderRadius: 15,
  },
  inputDisplay: {
    width: 297,
    height: 55,
    backgroundColor: "rgba(21, 21, 55, 1)",
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    height: 33,
    width: 297,
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    width: 247,
  },
  inputLength: {
    width: 118,
    height: 33,
    backgroundColor: "#fff",
  },
  btn: {
    width: 269,
    height: 55,
    backgroundColor: "rgba(59, 59, 152, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});