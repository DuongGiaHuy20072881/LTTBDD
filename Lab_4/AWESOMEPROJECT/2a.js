import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: 330 }}>
        <Text style={{ fontSize: 30, fontWeight: "700" }}>LOGIN</Text>
      </View>
      <View style={styles.containerInput}>
        <View style={styles.rowInput}>
          <Image
            source={require("./assets/avatar_user 1.png")}
            style={[styles.icon, { width: 32, height: 32 }]}
          />
          <TextInput style={styles.input} placeholder="Name" />
        </View>

        <View style={styles.rowInput}>
          <Image
            source={require("./assets/lock-152879 1.png")}
            style={[styles.icon, { width: 32, height: 32 }]}
          />
          <TextInput style={styles.input} placeholder="Password" />
          <TouchableOpacity>
            <Image
              source={require("./assets/eye 1.png")}
              style={[styles.icon2, { width: 32, height: 32 }]}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff" }}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage:
      "linear-gradient(rgba(251, 203, 0, 1),rgba(191, 154, 0, 1))",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  containerInput: {
    height: 150,
    display: "flex",
    justifyContent: "space-around",
  },
  rowInput: {
    width: 330,
    height: 54,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
  },
  input: {
    width: 330,
    height: 54,
    fontSize: 18,
    paddingLeft: 40,
  },
  icon: {
    position: "absolute",
    top: 8,
    left: 2,
  },
  icon2: {
    position: "absolute",
    top: -15,
    right: 10,
  },

  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 330,
    height: 45,
    backgroundColor: "rgba(6, 0, 0, 1)",
  },
});