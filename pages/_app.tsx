import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createConfig } from "wagmi";
import { polygon, bsc , polygonMumbai} from "wagmi/chains";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";
import { useEffect, useState } from "react";

const chains = [bsc, polygon];


const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: "MzUaa0A87yexjd8UKcHm8HIr1f4aghxT",
    walletConnectProjectId: "a8024e8262cb4e7102941a3577b5a5c0",

    // Required
    appName: "0x Next.js Demo App",

    // Optional
    appDescription: "A Next.js demo app for 0x Swap API and ConnectKit",
    chains,
  })
);

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      className =""
      style={{
        padding: "20px",
      }}
    >
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <ConnectKitButton />
          {mounted && <Component className ="grid place-items-center h-screen p-4 rounded-lg mb-3"{...pageProps} />}
        </ConnectKitProvider>
      </WagmiConfig>
    </div>
  );
}
