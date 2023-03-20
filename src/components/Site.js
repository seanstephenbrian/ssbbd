import { backgroundStyles } from '../scripts/gen';

import Background from './Background';

import '../styles/main.scss';

function Site() {
    return (
        <div className='site-wrapper'>
            <Background
                variableStyles={backgroundStyles}
            />
        </div>
    );
}

export default Site;
