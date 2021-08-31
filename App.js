import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ActivityIndicator ,  ScrollView , SafeAreaView } from 'react-native'
import * as Location from 'expo-location'
import WeatherInfo from './components/WeatherInfo'
import ReloadIcon from './components/ReloadIcon'
import WeatherDetails from './components/WeatherDetails'
import Search  from './components/Search'
import Find from './components/Find'
// import { WEATHER_API_KEY } from 'react-native-dotenv'

const BASE_WEATHER_URL = ''

export default function App() {
    const [errorMessage, setErrorMessage] = useState(null)
    const [currentWeather, setCurrentWeather] = useState(null)
    
    const [status , setStatus] = useState(true)
    const [city , setCity] = useState("")
   
    const WEATHER_API_KEY = ""
    useEffect(() => {
        load()
    }, [])
    
    async function find_city_weather(city){
        const weatherUrl = `${BASE_WEATHER_URL}q=${city}&appid=${WEATHER_API_KEY}`
        try{
            const response = await fetch(weatherUrl)
        

            const result = await response.json()
            
            if (response.ok) {
                setCurrentWeather(result)
            } else {
                setErrorMessage(result.message)
            }

        }
        catch(error){
            console.log(error)
        }

        
    }


    async function load() {
        setCurrentWeather(null)
        setErrorMessage(null)
        try {
            let { status } = await Location.requestForegroundPermissionsAsync()

            if (status !== 'granted') {
                setErrorMessage('Access to location is needed to run the app')
                return
            }
            const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true })

            const { latitude, longitude } = location.coords
         
            let respo = await Location.reverseGeocodeAsync({
                latitude,
                longitude
              });

            setCity(respo[0].city)
            find_city_weather(respo[0].city)
  

          

 
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    function change(city){
        setCity(city)
        setStatus(!status)
        find_city_weather(city)
        }
    // console.log("city in app.js " , city)
    function change_status(){
        
        setStatus(!status)
       
    }

   
    if (currentWeather) {
       
        return (
                <>
                  {
                        status === true
                        ?
                                <>
                                    <StatusBar style="auto" backgroundColor = {"#808080"}  translucent={false}/> 
                                    <View style={styles.container1} >
                                        <ScrollView 
                                                    contentContainerStyle={{
                                                        flexGrow: 1
                                                    }}
                                                    
                                                    keyboardShouldPersistTaps='handled'>
                                            <View>
                                            
                                                <WeatherInfo currentWeather={currentWeather} />
                                                <ReloadIcon load={load} />
                                                <Find change_status = {change_status}/>
                                                <WeatherDetails currentWeather={currentWeather}  />
                                                
                                            </View>
                                        </ScrollView>
                                    </View>
                                </>
                            
                       
                    :( 
                        <View style = {styles.container1}>
                            <View >
                                
                                <Search change = {change} change_status = {change_status} />

                            </View>
                            

                        </View>
          
                    )
                    }
 
                </>
               
              

          

        )
    } else if (errorMessage) {
        
        
        return (
                <View style={styles.container}>
                  
                        <ReloadIcon load={load} />
                        <Text style={{ textAlign: 'center' , color : "#24a2cc" }}>{errorMessage}</Text>
    
                </View>

           

        )
    } else {
         
        return (
     
 
                <View style={styles.container}>
                  
                   <ActivityIndicator size="large" color={'#ff304f'} />

                </View>
                    
           

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection : "column" , 
        backgroundColor: '#021d36' , 
    },
    container1 : {
        flex : 1 ,
        backgroundColor: '#021d36' , 
    } , 

    

})
