import "./App.css";
import Personel from "./Personel";

function App() {
  const kisi = {
    id: 1,
    name: "ali",
    surname: "kılıç",
    maas: 3500,
  };
  return (
    <>
      <Personel kisi = {kisi}/>
    </>
  );
}

export default App;
