import { StyleSheet, Text, TextInput, View, TouchableOpacity} from "react-native";
export default function Cau1c() {
  return (
    <View style={styles.container}>

      <Text style={styles.head1}>CODE</Text>
      <Text style={styles.title}>VERIFICATION</Text>
      <Text style={styles.title2}>
        Enter ontime password sent on ++849092605798
      </Text>
      <View style={styles.rowInput}>
        <TextInput style={styles.input} keyboardType="numeric" maxLength={1} />
        <TextInput style={styles.input} keyboardType="numeric" maxLength={1} />
        <TextInput style={styles.input} keyboardType="numeric" maxLength={1} />
        <TextInput style={styles.input} keyboardType="numeric" maxLength={1} />
        <TextInput style={styles.input} keyboardType="numeric" maxLength={1} />
        <TextInput style={styles.input} keyboardType="numeric" maxLength={1} />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(rgba(199, 244, 246, 1),rgba(209, 244, 246, 1),rgba(229, 244, 245, 1),rgba(0, 204, 249, 1))',
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 640,
  },
  head1: {
    height: 70,
    textAlign: "center",
    fontSize: 60,
    fontWeight: "700",
    lineHeight: 70.31,
  },
  title: {
    width: 169,
    height: 58,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "700",
    lineHeight: 29.3,
  },
  title2: {
    width: 302,
    height: 36,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 17.58,
  },
  rowInput: {
    height: 50,
    display: "flex",
    flexDirection: "row",
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },
  btn: {
    display: "flex",
    width: 339,
    height: 50,
    backgroundColor: "rgba(227, 192, 0, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
});