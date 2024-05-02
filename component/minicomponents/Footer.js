import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigate = useNavigation();

  const [icons] = useState([
    {
      name: "account",
      size: 28,
      color: "#71717a",
      iconSet: MaterialCommunityIcons,
      navigateTo: "devpage",
    },
    {
      name: "home",
      size: 28,
      color: "#71717a",
      iconSet: FontAwesome5,
      navigateTo: "mainpage",
    },
    {
      name: "list",
      size: 28,
      color: "#71717a",
      iconSet: Ionicons,
      navigateTo: "todolist",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);
  const animation = useState(new Animated.Value(0))[0];

  useEffect(() => {
    const loopAnimation = Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    );
    loopAnimation.start();
    return () => loopAnimation.stop();
  }, [animation]);

  const handlePress = (index, address) => {
    setActiveIndex(index);
    navigate.navigate(address);
  };

  const interpolatedOpacity = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.8, 1, 0.8],
  });

  return (
    <View style={styles.container} className=" w-full bg-transparent ">
      {icons.map((icon, index) => (
        <TouchableOpacity
          key={index}
          style={styles.iconContainer}
          onPress={() => handlePress(index, icon.navigateTo)}
        >
          <Animated.View
            style={[styles.icon, { opacity: interpolatedOpacity }]}
          >
            {React.createElement(icon.iconSet, {
              name: icon.name,
              size: icon.size,
              color: icon.color,
            })}
          </Animated.View>
          {/* {activeIndex === index && (
            <Text style={styles.iconText}>{icon.name}</Text>
          )} */}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    marginTop: 5,
    fontSize: 12,
    color: "#71717a",
  },
});

export default Footer;
