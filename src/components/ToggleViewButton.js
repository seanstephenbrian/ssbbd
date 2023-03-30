import React from 'react';

import '../styles/toggle-view-button.scss';

export default function ToggleViewButton(props) {

    const { currentView, handleClick } = props;

    let buttonText;
    let buttonClassName;

    if (currentView === 'minimal') {
        buttonText = 'switch to full view';
        buttonClassName = 'toggle-view-button toggle-view-button-minimal';
    }
    if (currentView === 'full') {
        buttonText = 'switch to minimal view';
        buttonClassName = 'toggle-view-button toggle-view-button-full';
    }

    return (
        <button className={buttonClassName} onClick={handleClick}>
            {buttonText}
        </button>
    )
}