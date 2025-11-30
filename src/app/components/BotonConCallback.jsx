import react from 'react';
export default function BotonConCallback({ onClick, texto }) {
  return <button onClick={onClick}>{texto}</button>;
}
