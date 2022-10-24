import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Trending from './Trending';
import Detail from './Detailfilm';

const Content = () => {
    return (
        <div className="content">
            <Routes>
                <Route index element={<Home />} />
                <Route path="trending" element={<Trending />} />
                <Route path="Dune" element={<Detail />} />
            </Routes>
        </div>
    )
}

export default Content;