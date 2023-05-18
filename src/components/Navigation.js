import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { ConnectButton } from "@paperxyz/embedded-wallet-service-rainbowkit";

const Navigation = ({ account, setAccount }) => {
    return (
        <nav>
            <div className="nav__brand">
                <h1>Amazon</h1>
            </div>

            <input type="text" className="nav__search" />

            <ConnectButton />

            <ul className="nav__links">
                <li>
                    <a href="#Clothing & Jewelry">Clothing & Jewelry</a>
                </li>
                <li>
                    <a href="#Electronics & Gadgets">Electronics & Gadgets</a>
                </li>
                <li>
                    <a href="#Toys & Gaming">Toys & Gaming</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
