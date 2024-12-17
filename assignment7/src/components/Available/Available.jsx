import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Player from "../Player/Player";

const Available = ({handleToChoosePlayer}) => {

    const [players, setAllPlayers] = useState([])

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setAllPlayers(data))
    }, []);

    return (
        <div className="grid grid-cols-3 gap-6 mx-auto max-w-7xl ">
            {
                players.map(player =>
                    <Player key={player.id} handleToChoosePlayer = {handleToChoosePlayer} player={player}>
                    </Player>)
            }
        </div>
    );
};

Available.propTypes = {
    handleToChoosePlayer: PropTypes.func
}

export default Available;