import React from 'react';
import './PlayerSelector.scss';

const PLAYERS = [1, 2];

const PlayerSelector = ({ player, onChangePlayer }) => (
    <div className="player-selector card">
        {
            PLAYERS.map((p) => {
                const className = ['player'];
                if (p === player) {
                    className.push('selected');
                }
                return (
                    <button
                        key={p}
                        className={className.join(' ')}
                        onClick={() => onChangePlayer(p)}
                    >
                        Player {p}
                    </button>
                )
            })
        }
    </div>
)

export default PlayerSelector