import { useEffect, useState } from 'react';
import './styles.css'

// PROPS => propriedades que um component pode receber
// PROPS => parametros

// INTERPOLAÇÃO => colocar um valor de uma váriavel dentro do JSX.
// <h1> {nomeVariavel} </h1>

interface CardProps {
  imageUrl: string;
  name: string;
}

export function Card(props: CardProps) {
  // let follow = false;
  // useState => parametro é o valor inicial
  // retorna 0: o valor do estado
  // 1: uma função para mudar o valor do estado
  // template literals => onde podemos colocar javascript dentro do interpolado
  const [follow, setFollow] = useState(false);

  function handleFollowAndUnfollow() {
    setFollow((prevState) => !prevState);
  }

  // CHAMADO QUANDO COMPONENT É MONTADO
  // QUANDO UM ESTADO QUALAUQER SOFRE UMA ATUALIZAÇÃO
  // observa todas as mudanças de estados
  // useEffect(() => {
  //   console.log("Chamou o useEffect 1");
  // });

  // CHAMADO APENAS NA PRIMEIRA RENDERIZAÇÃO QUANDO O COMPONENT É MONTADO
  // Geralmente utilizado na chamada de API's
  // useEffect(() => {
  //   console.log("Chamou useEffect 2");
  // }, []);

  // CHAMADO QUANDO O COMPONENT É MONTADO
  // ELE ESTÁ OBSERVANDO A MUDANÇA DO ESTADO follow
  useEffect(() => {
    console.log("Montou o component");
    localStorage.setItem("card", "o card está aberto");
    if (follow) {
      alert("Você passou a seguir mais uma pessoa...");
    }

    // chamado quando o component deixa de existir
    return () => {
      console.log("Desmontou o component...");
      localStorage.removeItem("card");
    }

  }, [follow])

  return (
    <div className='card'>
      <div>
        <img src={props.imageUrl} alt={props.name} />
        <strong>{props.name}</strong>
      </div>

      <button
      onClick={handleFollowAndUnfollow} 
      className={`${follow ? "btn-follow" : "btn"}`}
      >
        {follow ? 'UnFollow' : 'Follow'}
      </button>
    </div>
  );

}
