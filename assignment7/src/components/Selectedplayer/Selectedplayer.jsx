import PropTypes from 'prop-types';
import { RiDeleteBin2Line } from "react-icons/ri";


const Selectedplayer = ({ player, handleToDeletePlayer }) => {

    const { id, player_img, player_name, player_type} = player;
    return (
        <div className='flex gap-2 w-full border border-gray-400 items-center my-4 px-6 py-4 justify-between rounded-xl'>
            <div className='flex gap-2 items-center'>
                <img className='w-[100px] rounded-lg' src={player_img} alt="" />
                <div>
                    <h3>{player_name}</h3>
                    <h4>{player_type}</h4>
                </div>
            </div>
            <button onClick={() => handleToDeletePlayer(id)}><RiDeleteBin2Line className='text-red-600 text-2xl' /></button>
        </div>
    );
};

Selectedplayer.propTypes = {
    player: PropTypes.object,
    handleToDeletePlayer: PropTypes.func,
}

export default Selectedplayer;