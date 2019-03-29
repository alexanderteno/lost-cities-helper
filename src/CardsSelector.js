import React from 'react';
import './CardsSelector.scss';

const CARDS = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getContent = (value) => {
    switch (value) {
        case 0:
            return 'thumbs_up_down';
        case 6:
        case 9:
            return `${value}.`;
        default:
            return value;
    }
}

const getHighCard = (cardStack) => {
    if (!cardStack.length) {
        return 0; // No cards used
    }
    const threeWagers = (cardStack.filter((card) => (card === 0)).length === 3);
    const highCard = cardStack[cardStack.length - 1];
    return (highCard === 0) && threeWagers ? 1 : highCard;
}

const CardsSelector = ({ player, color, cards, onSelectCard }) => {
    const currentStack = cards[player - 1][color];
    const highCard = getHighCard(currentStack);
    return (
        <div className="cards-selector card">
            {
                CARDS.map((card) => {
                    const className = ['card', color];
                    if (card === 0) {
                        className.push('material-icons');
                        className.push('icon')
                    }
                    const disabled = (!!highCard) && (card <= highCard);
                    return (
                        <button
                            key={card}
                            disabled={disabled}
                            className={className.join(' ')}
                            onClick={() => onSelectCard(player, color, card)}
                        >
                            {getContent(card)}
                        </button>
                    );
                })
            }
        </div>
    )
};

export default CardsSelector;