import React from 'react';

import '../styles/footer.scss';

export default function Footer() {
    return (
        <footer>
            <p>copyright © {new Date().getFullYear()} | ssbbd </p>
        </footer>
    )
}