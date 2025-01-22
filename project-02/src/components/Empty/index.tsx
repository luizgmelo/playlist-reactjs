import EmptyImage from '../../assets/empty.png'
import './style.css';

export function Empty() {
  return ( 
    <div className="container-empty">
      <img src={EmptyImage} alt="empty"/>
      <span>Nenhum usúario foi encontrado</span>
    </div>
  );
}