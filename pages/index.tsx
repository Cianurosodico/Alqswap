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
      className={`flex flex-col mx-8 pt-8 md:max-w-80 min-w-50 place-items-center`}
    >
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
