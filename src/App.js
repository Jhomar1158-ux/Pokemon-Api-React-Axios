import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PokemonAPI from './components/PokemonAPI';
import LukeAPI from './components/LukeAPI';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Link className="btn btn-success" to="/">Home</Link> */}
        {/* <Link className="btn btn-danger" to="/api"> DogApi </Link> */}
        {/* <Link className="btn btn-primary" to="/formularios"> formularios </Link> */}
        {/* <Link className="btn btn-success" to="/:palabra"> palabra </Link> */}
        <Link className="btn btn-primary" to="/api/lukeapi"> Luke APIwalker </Link>
        
        {/* <Link className="btn btn-warning" to="/api/pokemon"> PokemonAPI </Link> */}

        <Switch>
          {/* <Route path="/" exact render={() => <Home />}/> */}
          {/* <Route path="/api" exact render={()=> <ComponenteAPI />} /> */}
          {/* <Route path="/formularios"  render={() => <Formularios />}/> */}
          {/* <Route path="/api/pokemon" render={()=> <PokemonAPI/> } /> */}
          {/* <Route path="/:id" exact render={()=><PeopleId url={"https://swapi.dev/api/people/"} />} /> */}
          {/* <Route path="/:palabra" exact render={() => <ComponenteParametros />}/> */}
          {/* <Route path="/:palabra/:color/:bg" exact render={() => <ComponenteParametros />}/> */}
          <Route path="/api/lukeapi" render={() => <LukeAPI/> }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
