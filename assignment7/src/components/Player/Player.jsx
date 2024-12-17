import PropTypes from 'prop-types';
import { FaUser } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";


const Player = ({ player, handleToChoosePlayer }) => {
    const { id, player_img, player_name, country, player_type, rating, style, bowling_style, price } = player;
    return (
        <div className='border border-gray-200 p-4 rounded-md space-y-2'>
            <img className='w-full h-[300px] rounded-md' src={player_img} alt="" />
            <div className='flex gap-2 mt-2 items-center'>
                <span><FaUser></FaUser></span>
                <h1 className='text-xl'>{player_name}</h1>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-2 items-center'>
                    <IoFlagSharp className='text-xl'/>
                    <p>{country}</p>
                </div>
                <div className='bg-gray-200 p-2 rounded-md'>
                    <p>{player_type}</p>
                </div>
            </div>
            <hr className='mt-3' />
            <h4 className=''>Rating: {rating}</h4>
            <div className='flex gap-2 justify-between'>
                <h5 className='text-md'>Batting: {style}</h5>
                <h5 className='text-md'>Bowling: {bowling_style}</h5>
            </div>
            <div className='flex mt-2 items-center justify-between'>
                <div className='flex gap-2'>
                    <p>Price: ${price}</p>
                </div>
                <div>
                    <button onClick={() => handleToChoosePlayer(player)} className='bg-gray-100 border border-gray-300 p-2 rounded-lg'>Choose Player</button>
                </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object,
    handleToChoosePlayer: PropTypes.func
}

export default Player;