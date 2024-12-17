import { useState } from 'react';
import Buttons from "../Buttons/Buttons";
import PropTypes from 'prop-types';
import Available from "../Available/Available";
import Selected from "../Selected/Selected";

const Main = ({handleToChoosePlayer, selectedPlayer, handleToDeletePlayer}) => {
    
    const [activeComponent, setActiveComponent] = useState('Available');

    console.log(activeComponent == 'Available'); 
    return (
        <>
            <Buttons activeComponent = {activeComponent} selectedPlayer = {selectedPlayer} setActiveComponent = {setActiveComponent}></Buttons>
            <div className='mb-60'>
                {activeComponent == 'Available' && <Available handleToChoosePlayer = {handleToChoosePlayer} />}
                {activeComponent == 'Selected' && <Selected setActiveComponent = {setActiveComponent} handleToDeletePlayer = {handleToDeletePlayer} selectedPlayer = {selectedPlayer} />}
            </div>
        </>
    );
};

Main.propTypes = {
    handleToChoosePlayer: PropTypes.func,
    handleToDeletePlayer: PropTypes.func,
    selectedPlayer: PropTypes.array,
}

export default Main;