import './index.css';
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./components/data"

function App() {
  const cards = data.map(item => {
    return <Card 
      key={item.id}
      item={item}
    />
  }) 

  return (
    <div className="App">
      <Navbar />
      <div className='cards'>
        {cards}
      </div>
    </div>
  );
}

export default App;
