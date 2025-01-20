import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'

function App() {
  const [showCards, setShowCards] = useState(false);

  return (
    // JSX => um JAVASCRIPT QUE PARECE COM HTML
    <div className='container'>
      <button onClick={() => setShowCards((prevState) => !prevState)}>Exibir / Ocultar</button>
      { showCards && (
        <>
          <Card 
            imageUrl="https://cdn.pixabay.com/photo/2025/01/07/16/54/woman-9317323_1280.jpg" 
            name="Maria"
            />
  
          {/* <Card 
            imageUrl="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_1280.jpg" 
            name="José"
            /> */}
        </>
      )}
    </div>
  );
}

export default App
