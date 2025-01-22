import EmptyImage from '../../assets/empty.svg';
import './Empty.css';

interface IEmptyProps {
  show: boolean;
  title: string;
}

export default function Empty({ title = "Nenhum dado encontrado!", show }: IEmptyProps) {
  return (
    <>
      {show && (
        <div className="container-empty">
          <img src={EmptyImage} alt="empty"></img>
          <h3>{title}</h3>
        </div>
      )}
    </>
  );
}