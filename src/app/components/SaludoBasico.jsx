import React from 'react';
export default function SaludoBasico({ nombre, entusiasta }) {
  return <h1>Hola, {nombre}{entusiasta ? "!!!" : ""}</h1>;
}
