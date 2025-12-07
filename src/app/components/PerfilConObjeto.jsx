<<<<<<< HEAD
import React from 'react';
=======
"use client";
import React from 'react';

>>>>>>> 7d70c453838081820818d100bc4a0ef33742aa73
export default function PerfilConObjeto({ usuario }) {
  const hobbies = usuario?.hobbies?.length
    ? usuario.hobbies.join(", ")
    : "Sin hobbies";

  return (
    <div>
      <h2>{usuario?.nombre}</h2>
      <p>{hobbies}</p>
    </div>
  );
}