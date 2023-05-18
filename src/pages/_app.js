import "@/styles/globals.css";
import { PaperEmbeddedWalletProvider } from "@paperxyz/embedded-wallet-service-rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

export default function App({ Component, pageProps }) {
    return (
        <PaperEmbeddedWalletProvider
            appName="Amazon Clone"
            walletOptions={{
                clientId: "c336bb31-4e95-48c9-b570-dba0b4e9670b",
                chain: "Goerli",
            }}
        >
            <Component {...pageProps} />;
        </PaperEmbeddedWalletProvider>
    );
}
