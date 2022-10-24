import Navigasi from './Navigasi';
import './style.css';
const Header = () => {
    return (
        <div className="header" id='home'>
            <Navigasi />
            <div className='caption'>
                NONTON GRATIS TANPA BELI TIKET
            </div>
        </div>
    )
}

export default Header;