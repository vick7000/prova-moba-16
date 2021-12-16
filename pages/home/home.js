import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from './style.js';

export default function Home({navigation}) {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        let url = "http://10.87.207.2:3000/entregas/entregadores"

        fetch(url)
        .then((response) => { return response.json() })
        .then(data => {setLista(data); })
    }, []);
    


    return(
        <View style={style.view}>
            {
                lista.map((item,index) => {
                    return(
                        <TouchableOpacity style={style.text} key={index} onPress={ () => { navigation.navigate("Entregador", {id:item.id_entregador})}}>
                            <Text>{ item.id_entregador }</Text>
                            <Text>{ item.nome }</Text>
                        </TouchableOpacity>
                        
                    )
                })
            }
            

             
        </View>
    )
}