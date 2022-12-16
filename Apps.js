import React from 'react';
import{ StyleSheet,Text,View } from 'react-native';

export default function app() {
   return (
    
    <View>
      
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>   //touchable

    </View>
    
    <View style={stylestwo.containertwo}>
      <Text style={stylestwo.boxOne}>One<Text>abc</Text></Text>
      <Text style={stylestwo.boxTwo}>Two</Text>
      <Text style={stylestwo.boxThree}>Three</Text>
      <Text style={stylestwo.boxFour}>Four</Text>
      
      
       </View>
       
    </View>
    
   )
}

const styles = StyleSheet.create({
container: {


  flexDirection: "row",
  paddingTop: 40,
  
  justifyContent: 'space-around',
  alignItems: 'flex-end',
  backgroundColor: 'white',
},
boxOne:{

  backgroundColor: 'violet',
  padding: 10,

},
boxTwo:{
  
  backgroundColor: 'red',
  padding: 20,

},
boxThree: {

  backgroundColor: 'green',
  padding: 30,

},
boxFour:{

  backgroundColor: 'skyblue',
  padding: 40,

},
})


const stylestwo = StyleSheet.create({
  containertwo: {
  
  
    flexDirection: "row",
    paddingTop: 40,
    
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: 'white',
  },
  boxOne:{
  
    backgroundColor: 'violet',
    padding: 10,
  
  },
  boxTwo:{
    
    backgroundColor: 'red',
    padding: 20,
  
  },
  boxThree: {
  
    backgroundColor: 'green',
    padding: 30,
  
  },
  boxFour:{
  
    backgroundColor: 'skyblue',
    padding: 40,
  
  },

})
