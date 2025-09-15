import { Link } from 'react-router-dom';
import './inicio.scss';

function Inicio() {
  return (
    <div>
      <h1>Renan Nunes de Jesus</h1>
      <p>Informática A</p>
      <Link to="/multiplicar">Multiplicar</Link>
      <Link to="/dividir">Dividir</Link>
    </div>
  );
}

export default Inicio;
