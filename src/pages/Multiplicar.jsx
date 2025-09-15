import { useState } from 'react';
import { Link } from 'react-router-dom';
import './multiplicar.scss';

function Multiplicar() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    const res = parseFloat(num1) * parseFloat(num2);
    setResult(res.toString());
  };

  return (
    <div>
      <h1>Multiplicar</h1>
      <label>Número 1</label>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <br />
      <label>Número 2</label>
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <br />
      <button onClick={calculate}>Calcular</button>
      <p>Resultado: {result}</p>
      <Link to="/">Inicio</Link>
      <Link to="/dividir">Dividir</Link>
    </div>
  );
}

export default Multiplicar;
