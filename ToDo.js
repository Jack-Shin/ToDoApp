import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get("window");

export default class ToDo extends Component {
  componentWillMount() {
    let todos = this.props.todos

    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <View style={styles.container}>
      {
        this.state.todos.map((todoItem, index) => {
          return(
            <View key={index} style={styles.elements}>
              <TouchableOpacity  onPress={this.props.completeToDo.bind(this, index)}>
                <View 
                  style={[
                    styles.circle,
                    todoItem.isCompleted ? styles.completeCircle : styles.uncompleteCircle
                  ]}
                />
              </TouchableOpacity>

              <Text style={styles.text}>{todoItem.text}</Text>

              <View style={styles.buttongrp}>
                <TouchableOpacity>
                  <Text style={[styles.text, styles.btn]}>✏️</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={[styles.text, styles.btn]}>❌</Text>
                </TouchableOpacity>
              </View>
              
            </View>
          )
        }) 
      }
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    width: width -15
  },
  elements: {
    flexDirection: 'row',
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    width: 28,
    height: 28, 
    borderRadius: 14,
    borderWidth: 5,
    borderColor: '#e57e86'
  },
  completeCircle: {
    borderColor: '#e57e86'
  },
  uncompleteCircle: {
    borderColor: '#bbb'
  },
  text: {
    color: '#444444',
    fontSize: 20
  }, 
  buttongrp: {
    flexDirection: 'row'
  },
  btn: {
    paddingHorizontal: 10,
  }
});