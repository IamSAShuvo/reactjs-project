import Available from '../Available/Available';
import Selected from '../Selected/Selected';
import PropTypes from 'prop-types';
import '../Buttons/Buttons.css';

const Buttons = ({ activeComponent, setActiveComponent, selectedPlayer }) => {

    return (
        <>
            <div className="flex justify-end mx-auto max-w-7xl mt-12 mb-6">
                <div className="flex border border-red-300 py-3 px-4 rounded-xl">
                    <button onClick={() => setActiveComponent('Available')} className={`${activeComponent == 'Available'? "px-3 font-bold py-2 rounded-md active":"px-3 font-bold py-2 rounded-md"}`}
                    >Available</button>
                    <button onClick={() => setActiveComponent('Selected')} className={`${activeComponent == 'Selected'? "px-3 font-bold py-2 rounded-md active":"px-3 font-bold py-2 rounded-md"}`}>Selected <span>({selectedPlayer.length})</span></button>
                </div>
            </div>
            <div className='mx-auto max-w-7xl font-bold mb-4 text-2xl'>
                <h2>{activeComponent == 'Available' ? "Available Players" : "Selected Players (" + selectedPlayer.length + "/6)"} </h2>
            </div>
        </>
    );
};

Buttons.propTypes = {
    handleToAddCoinBalance: PropTypes.func,
    setActiveComponent: PropTypes.func,
    selectedPlayer: PropTypes.array,
    activeComponent: PropTypes.string
}

export default Buttons;