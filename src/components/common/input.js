import React from 'react';
import { Text, TextInput, StyleSheet, View} from 'react-native';

const Input = ({ text, inputPlaceHolder, onChangeText, value, secureTextEntry }) => {
  const { inputWrapper, textStyle, inputStyle } = styles;
  return (
    <View style={inputWrapper}>
      <Text style={textStyle}> {text} </Text>
      <TextInput style={inputStyle}
                 secureTextEntry={secureTextEntry}
                 placeholder={inputPlaceHolder}
                 onChangeText={onChangeText}
                 value={value}
                 />
    </View>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    height: 50,
    width: 'auto',
    borderColor: '#FFA500',
    borderWidth: 2,
    borderRadius:10,
    alignItems: 'center',
    margin:5
  },
  textStyle: {
    paddingLeft: 30,
    fontSize: 17,
    flexGrow: 1
  },
  inputStyle: {
    fontSize: 17,
    flexGrow: 1
  }
})

export { Input }
