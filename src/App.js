import '../src/index.css';
import Header from "../src/components/Header.jsx"
import Produtos from "../src/components/Produtos.jsx"
import Promocao from "../src/components/Promocao.jsx"
import ExploreMore from "../src/components/ExploreMore.jsx"
import Footer from "../src/components/Footer.jsx"



function App() {
  return (
    <div className="App">

          <Header />
          <Produtos/>
          <Promocao/>
          <ExploreMore/>
          <Footer />
    </div>
  );
}

export default App;
