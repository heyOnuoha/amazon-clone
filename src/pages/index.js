import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { useEffect, useState } from "react";
import { ethers } from "ethers";

// Components
import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import Product from "@/components/Product";

// ABIs
import AmazonABI from "@/abis/Amazon.json";

// Config
import config from "@/config.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [provider, setProvider] = useState(null);
    const [contract, setContract] = useState(null);

    const [account, setAccount] = useState(null);

    const [electronics, setElectronics] = useState(null);
    const [clothing, setClothing] = useState(null);
    const [toys, setToys] = useState(null);

    const [item, setItem] = useState({});
    const [toggle, setToggle] = useState(false);

    const togglePop = (item) => {
        setItem(item);
        toggle ? setToggle(false) : setToggle(true);
    };

    const loadBlockchainData = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);

        const contract = new ethers.Contract(
            config.contract.address,
            AmazonABI,
            provider
        );
        setContract(contract);

        const items = [];

        for (var i = 0; i < 9; i++) {
            const item = await contract.items(i + 1);
            items.push(item);
        }

        const electronics = items.filter(
            (item) => item.category === "electronics"
        );
        const clothing = items.filter((item) => item.category === "clothing");
        const toys = items.filter((item) => item.category === "toys");

        setElectronics(electronics);
        setClothing(clothing);
        setToys(toys);
    };

    useEffect(() => {
        loadBlockchainData();
    }, []);

    return (
        <>
            <Head>
                <title>Amazon Clone</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div>
                    <Navigation account={account} setAccount={setAccount} />

                    <h2>Amazon Clone</h2>

                    {electronics && clothing && toys && (
                        <>
                            <Section
                                title={"Clothing & Jewelry"}
                                items={clothing}
                                togglePop={togglePop}
                            />
                            <Section
                                title={"Electronics & Gadgets"}
                                items={electronics}
                                togglePop={togglePop}
                            />
                            <Section
                                title={"Toys & Gaming"}
                                items={toys}
                                togglePop={togglePop}
                            />
                        </>
                    )}

                    {toggle && (
                        <Product
                            item={item}
                            provider={provider}
                            account={account}
                            contract={contract}
                            togglePop={togglePop}
                        />
                    )}
                </div>
            </main>
        </>
    );
}
