import './style.css';

interface IProps {
  value: string;
  handleSetValue: React.Dispatch<React.SetStateAction<string>>;
  handleSearchUser: () => void;
}

export function Search({handleSearchUser, handleSetValue, value} : IProps) {
  return (
    <div className="container-search">
      <input type="text" placeholder="Procure um usúario" value={value} 
          onChange={(event) => handleSetValue(event.target.value)}
      />
      <button onClick={handleSearchUser}>Buscar</button>
    </div>
  );
}