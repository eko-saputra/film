import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Content />
    </BrowserRouter>
  );
}

export default App;
