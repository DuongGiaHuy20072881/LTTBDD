import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function Color({ navigation, route }) {
  const [img, setImg] = useState(require("../assets/vs_blue.png"));
  const [color, setColor] = useState("Xanh");
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View
          style={{
            width: "40%",
            height: 135,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={img} style={{ width: 114, height: 128 }} />
        </View>
        <View
          style={{
            flexDirection: "column",
            width: "60%",
            height: 135,
            justifyContent: "space-around",
          }}
        >
          <Text>Điện thoại Vsmart Joy 3 Hàng chính hãng</Text>
          <Text>
            Màu: <Text style={{ fontWeight: "700" }}>{color}</Text>
          </Text>
          <Text>
            Cung cấp bởi{" "}
            <Text style={{ fontWeight: "700" }}>Tiki Tradding</Text>
          </Text>
          <Text style={{ fontWeight: "700" }}>1.790.000 đ</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "rgba(196, 196, 196, 1)",
          height: 490,
        }}
      >
        <View style={{ width: 360, paddingLeft: 20 }}>
          <Text>Chọn một màu bên dưới:</Text>
        </View>
        <View style={{ height: 350, justifyContent: "space-around" }}>
          <Pressable
            onPress={() => {
              setColor("bạc");
              setImg(require("../assets/vs_silver.png"));
            }}
            style={{
              width: 85,
              height: 80,
              backgroundColor: "rgba(197, 241, 251, 1)",
            }}
          ></Pressable>
          <Pressable
            onPress={() => {
              setColor("đỏ");
              setImg(require("../assets/vs_red.png"));
            }}
            style={{
              width: 85,
              height: 80,
              backgroundColor: "rgba(243, 13, 13, 1)",
            }}
          ></Pressable>
          <Pressable
            onPress={() => {
              setColor("đen");
              setImg(require("../assets/vs_black.png"));
            }}
            style={{
              width: 85,
              height: 80,
              backgroundColor: "rgba(0, 0, 0, 1)",
            }}
          ></Pressable>
          <Pressable
            onPress={() => {
              setColor("xanh");
              setImg(require("../assets/vs_blue.png"));
            }}
            style={{
              width: 85,
              height: 80,
              backgroundColor: "rgba(35, 72, 150, 1)",
            }}
          ></Pressable>
        </View>
        <View>
          <Pressable
            onPress={() => {
              navigation.navigate("Details", { img });
            }}
            style={{
              width: 326,
              height: 44,
              backgroundColor: "rgba(25, 82, 226, 0.58)",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
              XONG
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 360,
    height: 640,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});