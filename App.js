import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput
} from 'react-native';

const { height, width } = Dimensions.get("window")

export default class App extends React.Component {

  state = {
    newToDo: "",
    todos: []
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput 
            style={styles.input}
            placeholder={"+ add a new task"}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eae7d0',
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
    marginTop: 30,
    borderRadius: 6,
  }
});
