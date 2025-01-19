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
  return (
    <div className='card'>
      <div>
        <img src={props.imageUrl} alt={props.name} />
        <strong>{props.name}</strong>
      </div>

      <button>Follow</button>
    </div>
  );

}
