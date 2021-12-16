import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Entregador({navigation, route}) {
    const [entregador, setEntregador] = useState ([]);

    const { id } = route.params;

    useEffect(() => {
        let url = "http://10.87.207.2:3000/entregas/entregadores/" + id;

        fetch(url)
        .then(resp => { return resp.json(); })
        .then(data => { setEntregador(data); })
    }, []);


    return(
        <View>
            {
                entregador.map((item,index) => {
                    
                    return(
                        <TouchableOpacity key={index} onPress={ () => {navigation.navigate("Pedido", {id:item.id_entrega})}}>
                            <Text>{ item.id_entrega }</Text>
                            <Text>{ item.cliente }</Text>
                            <Text>{ item.endereco }</Text>
                            <Text>{ item.produto }</Text>
                            <Text>{ item.valor }</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )

}