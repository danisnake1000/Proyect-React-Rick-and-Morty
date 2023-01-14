import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagina from "./components/Pagina";


function App() {
  const [character, seTcharacter] = useState([]);
  const [info, setInfo] = useState({});
  
  const onNexts = () => {
    
    fechUrl(info.prev);
  };
  
  const onPreviuss = () => {
    fechUrl(info.next);
  };

const url = "https://rickandmortyapi.com/api/character"

useEffect(() => {
  
  async function fechUrl(url) {
    const response = await fetch(url);
    const data = await response.json();
    setInfo(data.info);
    seTcharacter(data.results);
}

fechUrl(url);
}, []);

  return (
    <>
      <Navbar titulo="RICK AND MORTY" />
      <Pagina
        prev={info.prev}
        next={info.next}
        onPreviuss={onPreviuss}
        onNexts={onNexts}
      />
      <Characters character={character} />
      <Pagina prev={info.prev} next={info.next} />
    </>
  );
}

export default App;
