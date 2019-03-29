import React from 'react';
import './CardsViewer.scss';

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

const CardsViewer = ({ player, color, cards, onRemoveCard }) => {
    const currentStack = cards[player - 1][color];
    return (
        <div className="cards-viewer card">
            {
                currentStack.map((card, index) => {
                    const className = ['content', color]
                    if (card === 0) {
                        className.push('material-icons');
                        className.push('icon');
                    }
                    const content = getContent(card);
                    return (
                        <div key={`${card}-${index}`} className="selection">
                            <div className={className.join(' ')}>{content}</div>
                            <button className="remove material-icons" onClick={() => { onRemoveCard(player, color, index) }}>clear</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardsViewer;