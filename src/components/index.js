import { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import { Spinner } from "./Spinner/styles";
import { Loading } from "./styles";
import MainView from "./views";

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [metaData, setMetaData] = useState({
    next: null,
    previous: null
  });

  const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  
  useEffect(() => {
    fetchPokemons(baseUrl);
  }, []);
  
  useEffect(() => {
    if(process.env.NODE_ENV === 'development') {
      console.log({ pokemons });
    }
  }, [pokemons]);

  const fetchPokemons = async (url) => {
    setLoading(true);
    const list = await fetch(url).then(res => res.json());

    const pages = {
      next: list.next,
      previous: list.previous
    };

    const pokemons = list.results.map(async (pokemon) => {
      const pokemonData = await fetch(pokemon.url).then(res => res.json());
      return {
        ...pokemon,
        ...pokemonData
      };
    });

    const pokemonsList = await Promise.all(pokemons);

    setMetaData(pages);
    setPokemons(pokemonsList);
    setTimeout(() => setLoading(false), 500)
  };

  return (
    <>
      {loading && <Loading>
        <Spinner />
      </Loading>}
      {!loading && <>
        <MainView pokemons={pokemons} />
        <NavigationBar
          next={metaData.next}
          previous={metaData.previous}
          fetchPokemons={fetchPokemons}
        />
      </>}
    </>
  );
}

export default App;