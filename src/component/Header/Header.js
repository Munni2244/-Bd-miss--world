import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-details">
            <h1>Miss World Bangladesh <span style={{color:'pink'}}>2<i class="far fa-grin-hearts"></i>21</span> Contestens</h1>
            <p style={{color:'pink'}}>We are Looking for Beautyfull WomenS, Now it's your turn. Apply now and ready to prepare yourself, as Miss Universe Bangladesh 2021.</p>
            <h2>Total Budget:100 Million</h2>
        </div>
    );
};

export default Header;