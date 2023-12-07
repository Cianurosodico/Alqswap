import { useState } from "react";
import PriceView from "./Price";
import QuoteView from "./Quote";
import type { PriceResponse } from "./api/types";
import { useAccount } from "wagmi";

export default function Home() {
  const [tradeDirection, setTradeDirection] = useState("sell");
  const [finalize, setFinalize] = useState(false);
  const [price, setPrice] = useState<PriceResponse | undefined>();
  const [quote, setQuote] = useState();
  const { address } = useAccount();

  return (
    <main
      className={`flex flex-row w-full h-full justify-center`}
    >
      <div className="flex justify-center w-[80%] ">
        <iframe className="w-[100%] h-[100%] mx-5 my-5" src="https://dexscreener.com/bsc/0xb9081e31c419625E318eDcA4c89f071d643A94D0?embed=1&theme=dark&trades=0&info=0"></iframe>
      
      </div>

      {finalize && price ? (
        <QuoteView
          takerAddress={address}
          price={price}
          quote={quote}
          setQuote={setQuote}
        />
      ) : (
        <PriceView
          takerAddress={address}
          price={price}
          setPrice={setPrice}
          setFinalize={setFinalize}
        />
      )}
    </main>
  );
}
