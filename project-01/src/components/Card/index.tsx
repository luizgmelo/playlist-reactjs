import { useState } from 'react';
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
