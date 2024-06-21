import { Moment } from "moment"
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';


type myClockProps = {
    time: Moment
}

const Clock = ({time}:myClockProps)=>{
    // hold rotation values
    const timeData = {
        hr: (time.hour()%12)*360 - 90,
        min: (time.minute()/60)*360 -90,
        s: (time.second()/60)*360 -90
    }


    return ( 
    
        <>
        <div style={{flex:1, alignItems:'center'}}>
            <h1  style={{rotate: `${timeData.s}deg`, width:'25', height:'25;', position:'absolute', flex:1, alignSelf:'center' } }>....................</h1>
            <h1  style={{rotate: `${timeData.min}deg`, width:'25', height:'25;',position:'absolute', flex:1 } }>.................</h1>
            <h1  style={{rotate: `${timeData.hr}deg`, width:'25', height:'25;', position:'absolute' , flex:1 } }>.........</h1>
        </div>
        </>
    )
}

export default Clock;