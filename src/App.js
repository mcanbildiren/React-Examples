import "./App.css";
import Personel from "./Personel";

function App() {
  const kisi = {
    id: 1,
    name: "can",
    surname: "bildiren",
    maas: 3500,
  };
  const student = {
    id: 2,
    name: "emre",
    surname: "yasar",
  };
  return (
    <>
      <Personel person={kisi} student={student} />
    </>
  );
}

export default App;
