import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

export default class Login extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <view style={{ backgroundColor: "#FFF", height: "100%" }}>
        <Image
          source={require("../images/image.jpg")}
          style={{ width: "80%", height: "50%", alignSelf: "center" }}
        />
        <Text
          style={{
            fontSize: 70,
            fontFamily: "Regular",
            alignSelf: "center",
          }}
        >
          {" "}
          AgroX{" "}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "fontOne",
            textAlign: "center",
            marginHorizontal: 50,
            opacity: 0.5,
          }}
        >
          ScorpiansScorpiansScorpiansScorpiansScorpiansScorpiansScorpiansScorpiansScorpiansScorpiansScorpiansScorpiansScorpiansScorpians
        </Text>
        {/*For loging email textfield and password textfields*/}
        <view
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 10,
            paddingHorizontal: 10,
            borderColor: "#00716F",
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          <Icon name="mail" color="#00716F" size={24} />
          <TextInput style={{ paddingHorizontal: 10 }} />
        </view>
        <view
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 10,
            paddingHorizontal: 10,
            borderColor: "#00716F",
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          <Icon name="mail" color="#00716F" size={24} />
          <TextInput style={{ paddingHorizontal: 10 }} />
        </view>
        {/*************************************************/}
        <view
          style={{
            marginHorizontal: 55,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            backgroundColor: "#00716F",
            paddingVertical: 8,
            borderRadius: 23,
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "fontOne",
            }}
          >
            Already a member
          </Text>
        </view>
        <Text
          onPress={() => navigate("Register")}
          style={{
            alignSelf: "center",
            color: "#00716F",
            fontFamily: "fontOne",
            paddingVertical: 30,
          }}
        >
          New User
        </Text>
      </view>
    );
  }
}
