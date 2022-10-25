import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Detaildune from './Detaildune';
import './style.css';
import Navigasi from './Navigasi';
const Header = () => {
    return (
        <>
            <Navigasi />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="Dune" element={<Detaildune />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Header;