import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Suggestions = (props) => {

  return (
    <View style={styles.item}>
      
        
        <Text style = {styles.texts} >{props.text}</Text>
      
     
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ff0000',
    padding: 25,
    borderRadius: 50,

    marginBottom: 20,

  },

  texts : {
    fontWeight: 'bold' , 
    color: 'white' , 
  } , 
  
 
  
});

export default Suggestions;