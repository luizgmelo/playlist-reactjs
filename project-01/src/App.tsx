import './App.css'
import { Card } from './components/Card'

function App() {

  return (
    // JSX => um JAVASCRIPT QUE PARECE COM HTML
    <div className='container'>
     <Card imageUrl="https://cdn.pixabay.com/photo/2025/01/07/16/54/woman-9317323_1280.jpg" name="Maria"/>
     <Card imageUrl="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_1280.jpg" name="José"/>
     <Card imageUrl="https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_960_720.jpg" name="Roberto"/>
    </div>
  )
}

export default App
