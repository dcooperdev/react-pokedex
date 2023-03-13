import styled from 'styled-components';
import { hexToRgbA } from '../utils/hexToRgba';

export const theme = {
    normal: {
        background: '#a8a878',
        color: '#fff',
        rgba: hexToRgbA('#a8a878')
    },
    fighting: {
        background: '#c03028',
        color: '#fff',
        rgba: hexToRgbA('#c03028')
    },
    flying: {
        background: '#a890f0',
        color: '#fff',
        rgba: hexToRgbA('#a890f0')
    },
    poison: {
        background: '#a040a0',
        color: '#fff',
        rgba: hexToRgbA('#a040a0')
    },
    ground: {
        background: '#e2bf65',
        color: '#fff',
        rgba: hexToRgbA('#e2bf65')
    },
    rock: {
        background: '#a38c21',
        color: '#fff',
        rgba: hexToRgbA('#a38c21')
    },
    bug: {
        background: '#729f3f',
        color: '#fff',
        rgba: hexToRgbA('#729f3f')
    },
    ghost: {
        background: '#7b62a3',
        color: '#fff',
        rgba: hexToRgbA('#7b62a3')
    },
    steel: {
        background: '#b7b7b7',
        color: '#fff',
        rgba: hexToRgbA('#b7b7b7')
    },
    fire: {
        background: '#f08030',
        color: '#fff',
        rgba: hexToRgbA('#f08030')
    },
    water: {
        background: '#6890f0',
        color: '#fff',
        rgba: hexToRgbA('#6890f0')
    },
    grass: {
        background: '#78c850',
        color: '#fff',
        rgba: hexToRgbA('#78c850')
    },
    electric: {
        background: '#f8d030',
        color: '#fff',
        rgba: hexToRgbA('#f8d030')
    },
    psychic: {
        background: '#f85888',
        color: '#fff',
        rgba: hexToRgbA('#f85888')
    },
    ice: {
        background: '#98d8d8',
        color: '#fff',
        rgba: hexToRgbA('#98d8d8')
    },
    dragon: {
        background: '#a8b8b8',
        color: '#fff',
        rgba: hexToRgbA('#a8b8b8')
    },
    dark: {
        background: '#705848',
        color: '#fff',
        rgba: hexToRgbA('#705848')
    },
    fairy: {
        background: '#f8b0f8',
        color: '#fff',
        rgba: hexToRgbA('#f8b0f8')
    },
    unknown: {
        background: '#68a8a8',
        color: '#fff',
        rgba: hexToRgbA('#68a8a8')
    },
    shadow: {
        background: '#000000',
        color: '#fff',
        rgba: hexToRgbA('#000000')
    },
    none: {
        background: '#ffffff',
        color: '#fff',
        rgba: hexToRgbA('#ffffff')
    },
};

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const View = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;


export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 200px;
    border-radius: 4px;
    background-color: #fff;
    margin-bottom: 1rem;

    &:not(:last-child) {
        margin-right: 1rem;
    }

    img {
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid #fff;
        border-radius: 4px;
        width: 90%;

        background: rgb(209, 208, 219);
        background: ${
            props => (props.types.length === 1)
                ? `linear-gradient(135deg, ${theme[props.types[0].type.name].rgba} 0%, ${theme[props.types[0].type.name].rgba} 100%)`
                : `linear-gradient(135deg, ${theme[props.types[0].type.name].rgba} 0%, ${theme[props.types[1].type.name].rgba} 100%)`
        };
    }
`;

export const Type = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    background-color: ${props => theme[props.type].background || '#fff'};
    color: ${props => theme[props.type].color || '#fff'};
    border-radius: 5px;
    font-size: 80%;
    width: ${props => (props.length > 1) ? `${(100 / props.length) - (props.length * 2)}%` : '100%'};
    text-align: center;

    &:not(:last-child) {
        margin-right: ${props => `${props.length}%`};
    }
`;

export const MarginsLeftRight = styled.div`
    margin-left: ${props => props.left};
    margin-right: ${props => props.right};
`;

export const Text = styled.p`
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.color};
    font-size: ${props => props.size};
    margin: 0;
`;

export const Loading = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 99vh;
`