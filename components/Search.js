import React,{useState} from 'react'
import { View, TextInput ,TouchableOpacity,  StyleSheet ,  ScrollView  } from 'react-native'
import Suggestions from './Suggestions'
import Back  from './Back'



export default function Search( {change , change_status }) {
    
    const [cities,setCities] = useState([])
    const [city,setCity] = useState('')
    const fetchCities = (text)=>{
        setCity(text)
        fetch(``)
        .then(res=>res.json())
        .catch(err => console.log(err))
        .then(data=>{setCities(data.location.address)})
        .catch(err => {
            setCities([])
          } )


        // setCity(text)
    }
    function selectcity(index){
      try{
        let i 
        let s = ""
        for(i = 0 ; i < cities[index].length ; i++){
          if(cities[index][i] !== ","){
            
            s += cities[index][i]
          }
          else{
            break
          }
           }
        
        return(
          change(s)

        )}
      catch(err){
        console.log(err) }
}

    

   return (
              
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1
      }}
      keyboardShouldPersistTaps='handled'
    >

    
        <View style={styles.tasksWrapper}>
            
          <View  style={styles.writeTaskWrapper}>
              <TextInput style={styles.input1} placeholder={' Search other locations '} placeholderTextColor= '#ff304f'  value={city} onChangeText={fetchCities} />
              <TouchableOpacity  >
                <View style={styles.addWrapper} >
                  <Back change_status = {change_status} />
                </View>
              </TouchableOpacity>
            
          </View>


            

            <View style={styles.items}>
            {
                cities.map((item, index) => {
                  
                return (
                    <TouchableOpacity key={index}  onPress={() =>  selectcity(index) }>
                    <Suggestions text={item} /> 
                    </TouchableOpacity>
                )
                })
            }

        
            </View>
        </View>
      
    </ScrollView>
    

    )
}

const styles = StyleSheet.create({
      input1: {
        color: '#24a2cc' ,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#270724',
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 1,
        width: "80%",
       
      },
      tasksWrapper: {
        paddingTop: 10,
        paddingHorizontal: 20,
      },
      sectionTitle: {
        fontSize: 30,
        fontWeight: 'bold' , 
        textAlign : 'center' , 
        marginBottom : 10 , 
        color : '#ff0000' , 
      },
      items: {
        marginTop: 15,
      },
      writeTaskWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      addWrapper: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',

      },
      addText: {
        fontSize: 24,
    
      },    
    

   
})
