import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Pokemon } from "./src/utils/types";
import Data from "./src/components/Data";

export default function App() {
  const [pokemon, setPokemon] = useState<Pokemon>({
    height: 20,
    id: 0,
    name: "Pochoclo",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/26.png",
    },
    weight: 34,
  });
  const [loading, setloading] = useState(true);

  const getPokemon = (id: number) => {
    setloading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((resutl) => resutl.json())
      .then((newPokemon: Pokemon) => setPokemon(newPokemon))
      .then((result) => setloading(false));
  };

  useEffect(() => {
    getPokemon(1);
  }, []);

  if (loading) {
    <ActivityIndicator size={"large"} color="#893467" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.spritesView}>
        <Image
          source={{ uri: pokemon.sprites.front_default }}
          style={styles.sprites}
        />
        <Image
          source={{ uri: pokemon.sprites.back_default }}
          style={styles.sprites}
        />
      </View>

      <Text style={styles.name}>{pokemon.name}</Text>

      <Data
        data={[
          { title: "ID", value: pokemon.id },
          { title: "Altura", value: pokemon.height },
          { title: "Ancho", value: pokemon.weight },
        ]}
      />

      <View style={styles.spritesView}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => getPokemon(pokemon.id > 1 ? pokemon.id - 1 : 898)}
        >
          <Text style={styles.btnText}>Atras</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => getPokemon(pokemon.id < 898 ? pokemon.id + 1 : 1)}
        >
          <Text style={styles.btnText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1FAEE",
    justifyContent: "center",
  },
  spritesView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  sprites: {
    width: 150,
    height: 150,
  },
  name: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#E63946",
    padding: 10,
    width: 100,
    alignItems: "center",
    borderRadius: 20,
  },
  btnText: {
    color: "#F1FAEE",
  },
});
