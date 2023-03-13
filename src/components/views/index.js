import PropTypes from 'prop-types';
import PokeCard from "../PokeCard";
import { View, Row } from '../styles';

export const MainView = ({ pokemons }) => {
    const renderPokemonCards = () => pokemons.map((pokemon, index) =>
        <PokeCard key={index} pokemon={pokemon} />
    );

    return (
        <View>
            <Row>
                {renderPokemonCards()}
            </Row>
        </View>
    )
}

MainView.propTypes = {
    pokemons: PropTypes.array.isRequired
}
  
export default MainView;