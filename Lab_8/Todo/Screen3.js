import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    TextInput,
  } from "react-native";
  import { useEffect, useState } from "react";
  
  const Screen3 = ({ navigation, route }) => {
    const { user } = route?.params;
    const [job, setJob] = useState("");
    useEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: user.image }}
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                backgroundColor: "rgba(217, 203, 246, 1)",
              }}
            />
            <View>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Hi {user.name}
              </Text>
              <Text>Have agrate day a head</Text>
            </View>
          </View>
        ),
        headerRight: () => (
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ paddingRight: 20 }}
          >
            <Image
              source={require("./assets/arrowback.png")}
              style={{ width: 22, height: 22 }}
            />
          </Pressable>
        ),
      });
    }, []);
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 32, fontWeight: "700" }}>ADD YOUR JOB</Text>
        <View>
          <Image
            source={require("./assets/job.png")}
            style={{
              width: 24,
              height: 24,
              position: "absolute",
              top: 10,
              left: 5,
            }}
          />
          <TextInput
            onChangeText={setJob}
            style={{
              width: 334,
              height: 44,
              borderWidth: 1,
              borderRadius: 4,
              borderColor: "rgba(144, 149, 160, 1)",
              paddingLeft: 30,
            }}
            placeholder="Input your job"
          />
        </View>
        <Pressable
          onPress={() => {
            fetch("https://6546fee0902874dff3abe603.mockapi.io/user/" + user.id, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                todo: [
                  ...user.todo,
                  {
                    id: (user.todo.length+1).toString(),
                    job:job
                  },
                ],
              }),
            }).then(response =>{
              if(response.ok)
                  return navigation.navigate("Screen2",{id:user.id});
            })
          }}
          style={{
            width: 190,
            height: 44,
            borderRadius: 12,
            backgroundColor: "rgba(0, 189, 214, 1)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>FINISH-&gt;</Text>
        </Pressable>
        <Image
          source={require("./assets/Image 95.png")}
          style={{ width: 190, height: 170 }}
          resizeMode="contain"
        />
      </View>
    );
  };
  
  export default Screen3;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "#fff",
    },
  });