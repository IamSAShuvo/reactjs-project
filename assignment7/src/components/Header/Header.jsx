import PropTypes from 'prop-types';
import Logo from '../../assets/logo.png'
import { CiBadgeDollar } from "react-icons/ci";

const Header = ({count}) => {
    return (
        <div className='flex justify-between items-center mx-auto max-w-7xl z-50 my-8 sticky top-0 backdrop-blur-[400px]'>
            <div><img src={Logo} alt="" /></div>
            <div className='flex items-center'>
                <ul className='flex gap-4 mr-8 text-lg'>
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                <div className='flex px-8 items-center py-2 rounded-xl border border-red-100 font-bold'>
                    <p className='mr-4'><span>{count}</span> Coin</p>
                    <span className='text-3xl text-yellow-500 font-extrabold'><CiBadgeDollar></CiBadgeDollar></span>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    count: PropTypes.number,
}

export default Header;