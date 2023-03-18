import generatedStyles from '../scripts/gen';

import Background from './Background';

import '../styles/main.scss';

function Site() {
    return (
        <div className='site-wrapper'>
            <Background
                variableStyles={generatedStyles()}
            />
        </div>
    );
}

export default Site;
