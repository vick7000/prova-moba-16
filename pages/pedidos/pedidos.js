import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function Pedido({route}) {

    const [pedido, setPedido ] = useState ([]);

    const { id } = route.params;

    useEffect(() => {
        let url = "http://10.87.207.2:3000/entregas/entregues/" + id;

        fetch(url)
        .then(resp => { return resp.json(); })
        .then(data => { setPedido(data); })
    }, []);
    return(
        <View>
            {
                pedido.map((item,index) => {
                    return(
                        <Text key={index}>{ item.endereco }</Text>
                    )
                })
            }
        </View>
    )
}