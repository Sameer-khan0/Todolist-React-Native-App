import { View, Text, SafeAreaView, StyleSheet,Image,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigate=useNavigation()

  return (
    <SafeAreaView style={styles.container} >
      <View className=" w-[100%] h-[100%] pt-7 flex items-center justify-center bg-gray-100">
        <View className=' pt-3 flex h-[50%] gap-2 items-center w-full' >
          <Text className=" text-center text-2xl font-semibold">
            Welcome to Todo App
          </Text>
          <Text className=' font-normal text-center text-xs ' > write your thoughts and save them in binary </Text>
          <View className=' w-[70%] h-[70%] flex justify-center items-center' >
            <Image source={require("../assets/logo.jpg")} className=' rounded-full w-full h-full object-contain ' />
          </View>
        </View>
        <View className=' flex h-[30%] items-center w-full' >
          <View className=' w-full flex justify-end items-center gap-2 ' >
            <TouchableOpacity onPress={()=>navigate.navigate('mainpage')} className='w-[80%] font-semibold h-[40%] flex justify-center rounded-lg border-[1px] border-black items-center bg-yellow-300' ><Text >Get Started -{'>'}</Text></TouchableOpacity>
            <Text className='text-xs' >Develop by Muhammad Sameer</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
