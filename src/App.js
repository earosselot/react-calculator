import './App.css';
import Calculator from "./components/Calculator/Calculator";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header />
            <Calculator />
            <Footer />
        </div>
    )
}

export default App;
