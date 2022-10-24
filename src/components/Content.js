import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Trending from './Trending';

const Content = () => {
    return (
        <div className="content">
            <Routes>
                <Route index element={<Home />} />
                <Route element={<Trending />} />
            </Routes>
        </div>
    )
}

export default Content;