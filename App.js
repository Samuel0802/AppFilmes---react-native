import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import api from "./src/services/api";
import Filmes from "./src/Filmes";

export default function App(){

  const [filmes, setFilmes] = useState([]);

  useEffect( () => {

    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes'); //get() = buscar algo da api

      setFilmes(response.data);
    }

    loadFilmes();

  },[]);//Array de dependecia fica vazio - motivos -> quando user ver a tela busque api

  return(
 
    <View style={styles.container}>
        <FlatList
        data={filmes}
        keyExtractor={ item => String(item.id)} //Conveter key de Numero para string
        renderItem={ ({item}) => <Filmes data={item}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
   container:{
    flex: 1
   }
   
});