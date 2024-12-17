import PropTypes from 'prop-types';
import bannerLogo from '../../assets/banner-main.png'
import '../Banner/Banner.css';

const Banner = ({handleToAddCoinBalance}) => {
    return (
        <div className='banner-bg mx-auto max-w-7xl text-center py-8 rounded-xl text-white'>
            <img className='w-[248px] mx-auto' src={bannerLogo} alt="" />
            <h3 className='text-3xl font-bold text-center my-3'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
            <h4>Beyond Boundaries Beyond Limits</h4>
            <button onClick={handleToAddCoinBalance} className='bg-yellow-500 border text-black border-cyan-400 p-2 rounded-md my-2'>Claim Free Credit</button>
        </div>
    );
};

Banner.propTypes = {
    handleToAddCoinBalance: PropTypes.func
}

export default Banner;