import "./App.css";
import NavBar from "./components/navbar";
import cardData from "./data.json";
import Card from "./components/card";

function App() {
  const cardElement = cardData.map(data => <Card key={data.key} item={data}/>)
  return (
    <div className="App">
      <NavBar />
      <main className="card-container">
        {cardElement}
      </main>
    </div>
  );
}

export default App;
