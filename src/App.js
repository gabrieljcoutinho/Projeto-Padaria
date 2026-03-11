import '../src/index.css';
import Header from "../src/components/Header.jsx"
import Produtos from "../src/components/Produtos.jsx"
import Promocao from "../src/components/Promocao.jsx"



function App() {
  return (
    <div className="App">

          <Header />
          <Produtos/>
          <Promocao/>
          <br /><br /><br /><br />
    </div>
  );
}

export default App;
