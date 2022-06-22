import { useState } from "react";
function App() {
  const [color, setColor] = useState(""); // color değişkendir.setColor özel bir fonsiyondur.(color değikenini değiştirme özelliği var)
  const [count, setCount] = useState(0); // count değişkendir(integerdir).setCount özel bir fonsiyondur.(count değişenini değiştirme özelliği var)
  // hook state ile birlikte kullanılır.
  // normal değişken değilde neden state kullanıyoruz? Çünkü sadece değiştirmek istediğimiz kısım için kullanıyoruz.

  function ChangeColor(renk) {
    setColor(renk);
  }
  function Add(sayi) {
    setCount(++sayi);
  }
  function Remove(sayi) {
    setCount(--sayi);
    if (sayi < 0) setCount(0);
  }
  return (
    <>
      <button className="btn btn-link" type="button" onClick={() => ChangeColor("")}>Reset</button>
      <button className="btn btn-danger" type="button" onClick={() => ChangeColor("Red")}>Red</button>
      <button className="btn btn-success" type="button" onClick={() => ChangeColor("Green")}>Green</button>
      <button className="btn btn-primary" type="button" onClick={() => ChangeColor("Blue")}>Blue</button>
      <button className="btn btn-light" type="button" onClick={() => ChangeColor("White")}>White</button>
      <button className="btn btn-secondary  " type="button" onClick={() => ChangeColor("Grey")}>Grey</button>
      <button className="btn btn-dark" type="button" onClick={() => ChangeColor("Black")}>Black</button>
      <h3>I am {color}</h3>


      <button className="btn btn-primary" type="button" onClick={() => Add(count)}>+</button>
      <button className="btn btn-primary" type="button" onClick={() => Remove(count)}>-</button>
      <h3>Sepetteki ürün miktarı: {count}</h3>

    </>
  );
}

export default App;

// iki çeşit component var
// 1-)function 2-)class
// function da metotlar yazılıyordu.Sonradan state de eklendi.Daha kullanılır hale geldi.
// functionda ki stateler UseState kullanıyor.Bununla birlikte hook ta kullanılıyor
// class da hem metotlar hem stateler vardı.
// classda ki stateler ComponentdidMount kullanıyor.
// class componenti demode oldu.function componenti daha çok kullanılıyor.
