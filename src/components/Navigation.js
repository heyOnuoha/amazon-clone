import { ethers } from 'ethers'
import { useState, useEffect } from 'react'

const Navigation = ({ account, setAccount }) => {

    const [connected, setConnected] = useState(false)

    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
        setConnected(account ? true : false);
    }

    useEffect(() => {
        connectHandler()
    },[]);

    return (
        <nav>
            <div className='nav__brand'>
                <h1>Amazon</h1>
            </div>

            <input
                type="text"
                className="nav__search"
            />

            {connected ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}

            <ul className='nav__links'>
                <li><a href="#Clothing & Jewelry">Clothing & Jewelry</a></li>
                <li><a href="#Electronics & Gadgets">Electronics & Gadgets</a></li>
                <li><a href="#Toys & Gaming">Toys & Gaming</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;