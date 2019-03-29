import React from 'react';
import COLORS from './enums/colors';
import './ColorSelector.scss';

const calculatePoints = (cardStack) => {
    const multiplier = cardStack.filter((card) => card === 0).length + 1;
    const stackValue = cardStack.reduce((acc, card) => acc + card) - 20;
    const bonus = cardStack.length >= 8 ? 20 : 0;
    return (multiplier * stackValue) + bonus;
}

const ColorSelector = ({ player, cards, color, onChangeColor }) => {
    return (
        <div className="color-selector card">
            {
                Object.values(COLORS).map((c) => {
                    const className = ['color', c]
                    if (color === c) {
                        className.push('selected');
                    }
                    const cardStack = cards[player - 1][c];
                    return (
                        <button
                            key={c}
                            className={className.join(' ')}
                            onClick={() => onChangeColor(c)}
                            title={c}
                        >
                            {cardStack.length !== 0 ? calculatePoints(cardStack) : ''}
                        </button>
                    )
                })
            }
        </div>
    );
}

export default ColorSelector;