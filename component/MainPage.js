import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from "react";
import Footer from "./minicomponents/Footer";
import TodoItem from "./minicomponents/TodoItem";
import { useSelector,useDispatch } from "react-redux";
import {settodo} from '../Redux/todoslices'
import Toast from "react-native-toast-message";

export default function MainPage() {
  const dispatch = useDispatch()
  const todo=useSelector(state=>state.todos)

  const addTodo = () => {
    if( content.length < 5){
      Toast.show({
        text1: 'Not Added',
        text2: `Please Write more then five letters 🙂`
      });
      return
    }
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    dispatch(settodo({ date: formattedDate, text: content, id: todo.length+1 }));
    console.log(todo);
    Toast.show({
      type: 'success',
      text1: 'Added',
      text2: `Todo is added successfully 🥰`
    });
    setContent('')
  };
  

  const [content, setContent] = useState("");

  function adjustText(text) {
    text = text.trim();
    text = text.replace(/\s+/g, ' ');
    text = text.replace(/\n{2,}/g, '\n');
    text = text.replace(/\t+/g, ' ');
    text = text.replace(/([.,\/#!$%\^&\*;:{}=\-_`~()\[\]]){2,}/g, '$1');
    return setContent(text);
}

const words = content.split(' ');
const wordsWithoutEmptyStrings = words.filter(word => word !== '');
const wordCount = wordsWithoutEmptyStrings.length;

  return (
    <SafeAreaView className="flex bg-gray">
      <View className="w-[100%] h-[100%] bg-transparent gap-3 pt-7 flex items-center justify-between">
        <View className="h-[85%] p-3 gap-2 w-full shadow-2xl">
          <Text className=' text-xl font-semibold text-center' >Write New Todo</Text>
          <View style={styles.shadowBox} className="h-[40%] rounded-t-3xl flex">
            <View className="p-1 h-full ">
            <ScrollView>
              <TextInput
                className="flex w-full p-2"
                multiline={true}
                onChangeText={(text) => setContent(text)}
                value={content}
                placeholder="Enter text here..."
                />
            </ScrollView>
            </View>
          </View>

          <View className="flex flex-row justify-between mb-5 p-2">
            <View className="flex flex-col items-center">
              <Text className="text-sm font-bold">{wordCount}</Text>
              <Text>Total Words</Text>
            </View>
            <TouchableOpacity
              className="bg-black rounded-md p-3"
              onPress={() => adjustText(content)}
            >
              <Text className="text-white font-bold">ADJUST</Text>
            </TouchableOpacity>
            <View className="flex flex-col items-center">
              <Text className="text-sm font-bold">{content.length}</Text>
              <Text>Total letters</Text>
            </View>
          </View>

          <TouchableOpacity
            className="flex flex-row items-center border-[1px] border-black bg-yellow-400 rounded-md p-3 mb-5"
            onPress={addTodo}
          >
            <Ionicons name="add-circle" size={24} color="black" />
            <Text className="text-black ml-2">Add Todo</Text>
          </TouchableOpacity>

          <Text className=' text-lg pl-2' >Recent Todos</Text>
          <View style={styles.shadowBox} className="h-[24%] flex p-1">
                <ScrollView >
                { todo.length>0? 
                todo.map((data)=>{
                  return(
                    <TodoItem key={data.id} todo={data} text={data.text?.length<10} />
                  )
                }):<Text className=' text-center p-5' >No Todos Found</Text>
                }
                </ScrollView>
          </View>
        </View>
        <View className="w-full h-[15%] flex justify-center items-center ">
           <Footer />
        </View>
      </View>
      <Toast/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  shadowBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 50,
  },
});
