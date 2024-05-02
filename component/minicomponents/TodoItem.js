import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TodoItem = ({todo}) => {
  const {id,text,date}=todo

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View className='bg-gradient-to-b from-blue-500 to-purple-500' style={styles.circle} >
          <Text style={styles.circleText}>{id}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{date}</Text>
          <Text>{text}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 10,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    color: "white",
    fontWeight: "bold",
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: "bold",
  },
});

export default TodoItem;
