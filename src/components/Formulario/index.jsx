import { useState, useEffect } from "react";

const Formulario = () => {
  const [materiaA, setMateriaA] = useState(0);
  const [materiaB, setMateriaB] = useState(0);
  const [materiaC, setMateriaC] = useState(0);
  const [nome, setNome] = useState("");

  useEffect(() => {
    console.log(`o componente iniciou`);

    return () => {
      console.log("O componente finalizou");
    };
  }, []);

  useEffect(() => {
    console.log(`O estado ${nome} mudou`);
  }, [nome]);

  useEffect(() => {
    console.log(`materia A mudou ${materiaA}`);
  }, [materiaA, materiaB, materiaC]);

  const alteraNome = ({ target }) => {
    // setNome(target.value);

    setNome((estadoAnterior) => {
      console.log(estadoAnterior);

      return target.value;
    });
  };

  const renderizaResultado = () => {
    const soma = +materiaA + materiaB + materiaC;
    const media = soma / 3;

    if (media >= 7) {
      return <p>{nome}, Aprovado(a)</p>;
    } else {
      return <p>{nome} Reprovado(a)</p>;
    }
  };

  return (
    <form>
      <ul>
        {[1, 2, 3, 4, 5].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <input type="text" placeholder="seu Nome" onChange={alteraNome} />
      <input
        onChange={({ target }) => setMateriaA(Number(target.value))}
        type="number"
        placeholder="Nota matéria A"
      />
      <input
        onChange={(event) => setMateriaB(Number(event.target.value))}
        type="number"
        placeholder="Nota matéria B"
      />
      <input
        onChange={({ target }) => setMateriaC(Number(target.value))}
        type="number"
        placeholder="Nota matéria C"
      />

      {renderizaResultado()}
    </form>
  );
};

export default Formulario;
