import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import styles from './style'

export default function App() {
  const [list, setList] = useState([])
  const [UserInput, setUserInput] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)

  const addItem = () => {
    const tempList = [...list]
    tempList.push(UserInput)
    setList(tempList)
    setUserInput('');

  }
  const deleteItem = () => {
    const tempList = [...list];
    tempList.splice(index, 1);
    setList(tempList);
  }


  const editItem = () => {
    const value = list[index];
    setUserInput(value);
    setEditMode(true);
    setCurrentIndex(index);
  }

  const allItem = () => {
    setList([])
  }

  return (
    <View style={styles.container}>

      <Button
        onPress={allItem}
        title="DeleteAllItem"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <TextInput
        style={styles.input}
        onChangeText={text => setUserInput(text)}
        placeholder='Type any item'
        value={UserInput}
      />

      <Button
        onPress={addItem}
        title="Add Item"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"

      />

      {list.map(item  => {
        return <Text> {item}<Button
          onPress={() => editItem(index)}
          title="Edit Item"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        /> <Button
            onPress={ () => deleteItem(index)}
            title="Delet Item"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          /></Text>

      })}

      <StatusBar style="auto" />
    </View>
  );
}
