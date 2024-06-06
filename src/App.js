import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
function App() {
  const cards = data.map(item => {
    return (
        <Card 
            key={item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            country={item.location}
            title={item.title}
            price={item.price}
            openspots={item.openSpots}
        />
    )
})       
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <section className="cards-list">
                {cards}
      </section>
    </div>
  );
}

export default App;
