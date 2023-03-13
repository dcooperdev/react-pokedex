import { NavBar, Button } from "./styles";

export const NavigationBar = ({ next, previous, fetchPokemons }) => (
    <NavBar>
        <Button onClick={() => fetchPokemons(previous)} disabled={previous === null}>Prev</Button>
        <Button onClick={() => fetchPokemons(next)} disabled={next === null}>Next</Button>
    </NavBar>
);

export default NavigationBar;