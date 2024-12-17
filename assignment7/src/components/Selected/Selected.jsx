import PropTypes from 'prop-types';
import Selectedplayer from '../Selectedplayer/Selectedplayer';

const Selected = ({ selectedPlayer, handleToDeletePlayer, setActiveComponent }) => {

    return (
        <>
            <div className="mx-auto max-w-7xl">
                {
                    selectedPlayer.map(player =>
                        <Selectedplayer handleToDeletePlayer={handleToDeletePlayer} key={player.id} player={player}>
                        </Selectedplayer>)
                }
                <div className='border border-red-300 w-[180px] p-3 max-w-7xl my-3 rounded-xl'>
                    <button onClick={() => setActiveComponent('Available')} className='bg-yellow-400 px-4 py-2 text-center rounded-md'>Add More Player</button>
                </div>
            </div>

        </>
    );
};

Selected.propTypes = {
    selectedPlayer: PropTypes.array,
    handleToDeletePlayer: PropTypes.func,
    setActiveComponent: PropTypes.func,
}

export default Selected;