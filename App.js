import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView
} from 'react-native';

import ToDo from './ToDo'

const { width, height } = Dimensions.get("window");

export default class App extends React.Component {

  state = {
    newToDo: "",
    todos: []
  }

  render() {
    const { newToDo, todos } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput 
            style={styles.input}
            placeholder={"+ add a new task"}
            value={newToDo}
            returnKeyType={"done"}
            onSubmitEditing={this.addToDo}
            onChangeText={(text) => {
              this.setState({
                newToDo: text
              })
            }}
          />
        </View>
        <ScrollView>
          <ToDo
            todos={todos}
            completeToDo={this.completeToDo}
          />
        </ScrollView>
      </View>
    );
  }

  addToDo = () => {
    let todos = this.state.todos
    let todoText = this.state.newToDo

    if(todoText != "") {
      let todoItem = {
        text: todoText,
        isCompleted: false,
        isEditing: false
      }

      todos.push(todoItem)

      this.setState({
        todos: todos,
        newToDo: ""
      })
    }
    console.log(todos)
  }

  completeToDo = (index) => {
    let todos = this.state.todos
  
    todos[index].isCompleted = !todos[index].isCompleted

    console.log("DSFSDFDSF")
    this.setState({
      todos: todos
    })
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e3d0',
    alignItems: 'center',
  },
  header: {
    width: width,
    height: height / 8,
    backgroundColor: "#d3d1c0",
    alignItems: "center"
  },
  input: {
    borderBottomColor: "#bbbbbb",
    borderBottomWidth: 1,
    backgroundColor: "#e0ded0",
    fontSize: 20,
    width: width - 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 30,
    borderRadius: 6,
  }
});
