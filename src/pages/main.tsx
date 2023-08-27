import { useState, useEffect, useRef } from 'react'
import Logo from "../img/Logo.svg"
import Preloader from "../img/Preloader.png"
import Flash from "../img/flash.svg"
import Wallet from "../img/wallet.svg"

const Main = () => {
    

    return (
        <>
            <main>
                <div className="header">
                    <img src={Logo} alt="logo"/>
                     <div className="header__balance">
                        <div className="header__wallet">
                            <img src={Wallet}/>
                        </div>
                        <div className="header__baltext">
                            Balance: 100,000 $RBET
                        </div>
                    </div>
                    <div className="header__tablo">
                        <div className="header__preloader">
                            <img src={Preloader} className="header__loader"/>
                        </div>
                        <div className="header__info">
                            Requesting the hash of your game...
                        </div>
                    </div>
                    <div className="header__buttons">
                        <a className="button__size button__transparent" href="#" style={{marginRight: "8px"}}>Swap tokens</a>
                        <a className="button__size button__style" href="#">Connect Wallet</a>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="inputs">
                        <div className="inputs__section">
                            <div className="inputs__title">
                                Bid amount
                            </div>
                            <input 
                                type="number"
                                placeholder="Enter amount"
                                className="inputs__input"
                            />
                            <div className="inputs__buttons">
                                <button className="inputs__setter">Double</button>
                                <button className="inputs__setter">Half</button>
                                <button className="inputs__setter">Max</button>
                                <button className="inputs__setter">Min</button>
                            </div>
                        </div>
                        <div className="inputs__section">
                            <div className="inputs__title">
                                Chance of win
                            </div>
                            <input 
                                type="number"
                                placeholder="Enter amount"
                                className="inputs__input"
                            />
                            <div className="inputs__buttons">
                                <button className="inputs__setter">Double</button>
                                <button className="inputs__setter">Half</button>
                                <button className="inputs__setter">Max</button>
                                <button className="inputs__setter">Min</button>
                            </div>
                        </div>
                    </div>
                    <div className="decision">
                        <button className="decision__button decision__button_less">
                            Less
                        </button>
                        <button className="decision__button decision__button_more">
                            More
                        </button>
                    </div>
                    <div className="pieces">
                        <div className="pieces__cell">0 - 950000</div>
                        <div className="pieces__cell">950000 - 999999</div>
                    </div>
                    <div className="ranges">
                        <div className="ranges__line ranges__line_right"></div>
                        <div className="ranges__line ranges__line_left"></div>
                    </div>
                    <div className="possible">
                        Possible Win
                    </div>
                    <div className="possibletext">
                        190.2 $RBET
                    </div>
                    <div className="max">
                        <div className="max__title">
                            <img className="max__icon" src={Flash} alt="logo"/>
                            <div>Maximum possible win:</div>
                        </div>
                        <div className="max__sum">
                            900,000,000 $RBET
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main;