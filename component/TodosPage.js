import { View, Text, SafeAreaView ,ScrollView,StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import Footer from "./minicomponents/Footer";
import { useSelector } from "react-redux";
import TodoItem from "./minicomponents/TodoItem";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../Redux/todoslices";
import Toast from "react-native-toast-message";

const TodosPage = () => {
  const dispatch=useDispatch()
  const todo=useSelector(state=>state.todos)

  const DeleteTodo=(Todoindex)=>{
    Toast.show({
      type: 'success',
      text1: 'Deleted',
      text2: `Todo is Deleted successfully 🥰`
    });
    console.log("deleteing...")
    dispatch(deleteTodo(Todoindex))
  }

  return (
    <SafeAreaView className="flex bg-gray">
      <View className="w-[100%] h-[100%] gap-3 pt-7 flex items-center bg-transparent justify-between">
        <View className="h-[85%] p-3 gap-2 w-full shadow-2xl">
          <Text className=" text-xl font-semibold text-center">Todos Page</Text>
          <View className=" w-full h-[90%] flex justify-evenly ">
            
          <ScrollView className=' flex gap-2 p-2' >
            {todo.length > 0 ? (
                todo.map((data,index) => {
                    return (
                    <TouchableOpacity onLongPress={()=>DeleteTodo(data.id)} key={index} className=' shadow-2xl border-[0.3px] border-gray-400 overflow-hidden'>
                    <TodoItem key={data.id} todo={data} />
                    </TouchableOpacity>
                );
                })
            ) : (
                <Text className=" text-center p-5">No Todos Found</Text>
            )}
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
};

export default TodosPage;

const styles = StyleSheet.create({
    shadowBox: {
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.25,
      shadowRadius: 2.84,
      elevation: 3
    }
})