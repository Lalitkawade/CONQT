import React from 'react';
import './Header.css';
const Header = () => {



    return (
        <div>
            <header className="header">
                <div className="top-section">
                    <div className="conqt-name">
                        <span>CON<i class="fa-brands fa-searchengin fa-lg"></i>T</span>
                    </div>
                    <input className='search-bar' type="text" placeholder="Find Vendor" />
                    <input className='search-bar' type="text" placeholder="Find Customer" />
                </div>
                <div className="left-section">
                    <button className="expert-call-button"><i class="fa-solid fa-phone"></i>Expert Call</button>
                    <div className="profile-menu">
                                                <i class="fa-solid fa-user fa-lg"></i>
                    </div>
                </div>
            </header>
            <div className="header-2">
                <div className="top-section">
                    <div className="header-buttons">
                        <div className="dropdown-buttons">
                            <div className="dropdown-button">All categories<i class="fa-solid fa-chevron-down"></i></div>
                            <div className="dropdown-button">By industry<i class="fa-solid fa-chevron-down"></i></div>
                            <div className="dropdown-button">By Department<i class="fa-solid fa-chevron-down"></i></div>
                        </div>
                        <div className="flat-buttons">
                            <div className="flat-button">Compare</div>
                            <div className="flat-button">Sell your Products</div>
                            <div className="flat-button">Offers</div>
                        </div >
                        <div className='flat-button-right'>
                            <div className="flat-button">Write Review</div>
                            <div className="flat-button">Need Help<i class="fa-regular fa-circle-question"></i></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;
