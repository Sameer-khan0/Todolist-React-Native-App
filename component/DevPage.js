import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import React from "react";
import Footer from "./minicomponents/Footer";
import Pro1 from '../assets/pro1.png'
import Pro2 from '../assets/pro2.png'
import Pro3 from '../assets/pro3.png'

const TodosPage = () => {
  const contactInfo = [
    { label: "Gmail:", value: "muhmmadsameer86@gmail.com" },
    { label: "Phone:", value: "03430159930" },
    {
      label: "Website:",
      value: "My portfolio",
      url: "https://sameer-khan0.github.io/react_portfolio",
    },
  ];

  const projects = [
    { name: "Project 1", description: "A brief description", url: "", image: Pro1 },
    { name: "Project 2", description: "Another project description", url: "", image: Pro2 },
    { name: "Project 3", description: "Another project description", url: "", image: Pro3 },
  ];

  return (
    <SafeAreaView className="flex bg-gray">
      <View className="w-[100%] h-[100%] bg-transparent gap-3 pt-7 flex items-center justify-between">
        <View className="h-[85%] p-3 gap-2 flex items-center justify-between w-full shadow-2xl">
          <Text className=" text-xl flex font-semibold text-center">
            Developer Profile Page
          </Text>
          <View
            className=" w-[90%] h-[80%] relative rounded-[20px]"
            style={styles.shadowBox}
          >
            <View className=" bg-black w-[40%] h-[25%] absolute top-[-10%] left-[30%] rounded-full ">
              <Image
                source={require("../assets/profile.jpg")}
                className="w-full h-full rounded-full object-contain mb-4"
                alt="Developer profile picture"
              />
            </View>
            <View className=" h-[17%]"></View>
            <View className=" w-full h-[10%] ">
              <Text className=" text-center text-lg font-semibold w-full">
                Muhammad Sameer
              </Text>
              <Text className=" text-center text-sm">Software Developer</Text>
            </View>

            <View className=" h-[40%] p-2">
              <Text className=" text-center font-bold">Personal info</Text>
              <View className=" flex justify-evenly gap-1 h-full p-2">
                {contactInfo.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style="shadow-md rounded-lg mb-4"
                    onPress={() => item.url && Linking.openURL(item.url)}
                  >
                    <View
                      style={styles.shadowBox}
                      className="p-2 flex flex-row justify-between "
                    >
                      <Text className="font-semibold pr-1">{item.label}</Text>
                      <Text className="pl-1 ">{item.value}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={{ height: "33%", padding: 5 }}>
              <Text className="text-lg font-semibold mb-2 pl-2">Web Projects</Text>
              <ScrollView
                horizontal={true}
                className="w-full h-full flex flex-row space-x-4"
              >
                {projects?.length > 0 ? (
                  projects.map((project,index) => (
                    <View
                      key={index}
                      className=" w-[290px] h-28 bg-gray-200 rounded-lg shadow-md"
                    >
                      <Image source={project.image} className=' object-contain w-full h-full' ></Image>
                    </View>
                  ))
                ) : (
                  <Text className="text-gray-500 text-center">
                    No Projects Found
                  </Text>
                )}
              </ScrollView>
            </View>
          </View>
        </View>
        <View className="w-full h-[15%] flex justify-center items-center ">
          <Footer />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TodosPage;

const styles = StyleSheet.create({
  shadowBox: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
});
