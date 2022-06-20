import React from "react";

export default function Personel({ person, student }) {
  console.log(person);
  return (
    <div>
      <h3>Kişi</h3>
      <p>{person.id}</p>
      <p>{person.name}</p>
      <p>{person.surname}</p>
      <p>{person.maas}</p>
      <h3>Öğrenci</h3>
      <p>{student.id}</p>
      <p>{student.name}</p>
      <p>{student.surname}</p>
    </div>
  );
}
