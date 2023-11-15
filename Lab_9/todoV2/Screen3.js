import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Checkbox, RadioButton } from "react-native-paper";

const Screen3 = ({ navigation, route }) => {
  const [note, setNote] = useState("");
  const [state, setState] = useState(false);
  const [priority, setPriority] = useState(1);
  const [id,setId] = useState(0);
  const [accountId,setAccountId] = useState(route.params?.accountId)

  useEffect(() => {
    if (route.params?.item) {
      const item = route.params?.item;
      setNote(item.note);
      setPriority(item.priority);
      setState(item.status);
      setId(item.id);
      setAccountId(item.accountId)
    }
  }, [route.params?.item]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: 700 }}>Note</Text>
        <TextInput
          style={{ width: 350, borderWidth: 1 }}
          multiline
          numberOfLines={10}
          onChangeText={setNote}
          value={note}
        />
      </View>
      <View style={{ width: 350 }}>
        <Text style={{ fontSize: 18, fontWeight: 700 }}>Priority:</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <RadioButton
            value="1"
            status={priority === 1 ? "checked" : "unchecked"}
            onPress={() => setPriority(1)}
            color="red"
          />
          <RadioButton
            value="2"
            status={priority === 2 ? "checked" : "unchecked"}
            onPress={() => setPriority(2)}
            color="orange"
          />
          <RadioButton
            value="3"
            status={priority === 3 ? "checked" : "unchecked"}
            onPress={() => setPriority(3)}
            color="yellow"
          />
        </View>
      </View>
      <View style={{ width: 350 }}>
        <Text style={{ fontSize: 18, fontWeight: 700 }}>Status:</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Complete</Text>
          <Checkbox
            status={state ? "checked" : "unchecked"}
            onPress={() => {
              setState(!state);
            }}
          />
        </View>
      </View>
      <Pressable
      onPress={()=>{
        if (route.params?.item){
            fetch(
              `https://654df06ecbc32535574216e1.mockapi.io/account/${accountId}/Notes/${id}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    note:note,
                    priority:priority,
                    status:state
                }),
              }
            ).then((reponse) => {
              if (reponse.ok) {
                navigation.navigate("Screen2",{id:accountId})
              }
            });
        }
        else{
            fetch(
              `https://654df06ecbc32535574216e1.mockapi.io/account/${accountId}/Notes`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  note: note,
                  priority: priority,
                  status: state,
                }),
              }
            ).then((reponse) => {
              if (reponse.ok) {
                navigation.navigate("Screen2", { id: accountId });
              }
            });
        }
      }}
        style={{
          width: 150,
          height: 50,
          borderRadius: 10,
          backgroundColor: "lightgreen",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 700 }}>Done</Text>
      </Pressable>
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "space-around",
    width: 390,
    height: 844,
  },
});