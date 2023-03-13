import PropTypes from 'prop-types';
import { Card, Type, Row, MarginsLeftRight, Text } from '../styles';
import { Capitalice } from '../../utils/capitalice';

export const PokeCard = ({ pokemon }) => {
    const PokeId = () => {
        const id = pokemon.id.toString().split('');
        switch (id.length) {
            case 1: return `00${pokemon.id}`;
            case 2: return `0${pokemon.id}`;
            case 3: return `${pokemon.id}`;
            default: return `${pokemon.id}`;
        }
    }
    return (
        pokemon && <Card types={pokemon.types}>
            <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${PokeId()}.png`}
                alt={`${pokemon.name}-avatar`}
                width="180"
                height="180"
            />
            <MarginsLeftRight left='10px' right='10px'>
                <Text size={'100%'} color={'#919191'}>{`#${PokeId()}`}</Text>
                <Text size={'150%'} color={'#313131'}>{Capitalice(pokemon.name)}</Text>
                <Row>
                    {
                        pokemon.types.map((type, index) => (
                            <Type key={index} length={pokemon.types.length} type={type.type.name} >
                                {Capitalice(type.type.name)}
                            </Type>
                        ))
                    }
                </Row>
            </MarginsLeftRight>
        </Card>
    )
}

PokeCard.propTypes = {
    pokemon: PropTypes.object.isRequired
}
  
export default PokeCard;