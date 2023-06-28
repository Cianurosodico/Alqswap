import qs from "qs";
import useSWR from "swr";
import { ConnectKitButton } from "connectkit";
import { useState, ChangeEvent } from "react";
import { formatUnits, parseUnits } from "ethers";
import {
  erc20ABI,
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  type Address,
} from "wagmi";
import {
  POLYGON_TOKENS,
  POLYGON_TOKENS_BY_SYMBOL,
  MAX_ALLOWANCE,
  exchangeProxy,
} from "../../lib/constants";

interface PriceRequestParams {
  sellToken: string;
  buyToken: string;
  buyAmount?: string;
  sellAmount?: string;
  takerAddress?: string;
}

export const fetcher = ([endpoint, params]: [string, PriceRequestParams]) => {
  const { sellAmount, buyAmount } = params;
  if (!sellAmount && !buyAmount) return;
  const query = qs.stringify(params);

  return fetch(`${endpoint}?${query}`).then((res) => res.json());
};

export default function PriceView({
  setPrice,
  setFinalize,
  takerAddress,
}: {
  price: any;
  setPrice: (price: any) => void;
  setFinalize: (finalize: boolean) => void;
  takerAddress: Address | undefined;
}) {
  // fetch price here
  const [sellAmount, setSellAmount] = useState<number>(0);
  const [buyAmount, setBuyAmount] = useState("");
  const [tradeDirection, setTradeDirection] = useState("sell");
  const [sellToken, setSellToken] = useState("ogt");
  const [buyToken, setBuyToken] = useState("alq");

  const handleTokenSwitch =  (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setBuyToken(sellToken);
    setSellToken(buyToken);
  };

  const handleSellTokenChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSellToken(e.target.value);
  };

  function handleBuyTokenChange(e: ChangeEvent<HTMLSelectElement>) {
    setBuyToken(e.target.value);
  }

  const sellTokenDecimals = POLYGON_TOKENS_BY_SYMBOL[sellToken].decimals;

  const parsedSellAmount =
    sellAmount && tradeDirection === "sell"
      ? parseUnits(sellAmount, sellTokenDecimals).toString()
      : undefined;

  const buyTokenDecimals = POLYGON_TOKENS_BY_SYMBOL[buyToken].decimals;

  const parsedBuyAmount =
    buyAmount && tradeDirection === "buy"
      ? parseUnits(buyAmount, buyTokenDecimals).toString()
      : undefined;

  const { isLoading: isLoadingPrice } = useSWR(
    [
      "/api/price",
      {
        sellToken: POLYGON_TOKENS_BY_SYMBOL[sellToken].address,
        buyToken: POLYGON_TOKENS_BY_SYMBOL[buyToken].address,
        sellAmount: parsedSellAmount,
        buyAmount: parsedBuyAmount,
        takerAddress,
      },
    ],
    fetcher,
    {
      onSuccess: (data) => {
        setPrice(data);
        if (tradeDirection === "sell") {
          setBuyAmount(formatUnits(data.buyAmount, buyTokenDecimals));
        } else {
          setSellAmount(formatUnits(data.sellAmount, sellTokenDecimals));
        }
      },
    }
  );

  return (

  <div className="flex flex-col shadow-xl shadow-white p-4 rounded-lg max-w-sm">

      <p className="text-5xl font-bold">ALQ SWAP</p> 
    <div className= "flex justify-between shadow-sm pr-4">
      <div className= "flex ">

        <div className= "flex ">
        </div>

      </div>
      <div className= "flex w-1/3">


          <p className="text-lg font-bold">Market</p> 

          <p className="text-lg mx-2 cursor-not-allowed">Limit</p> 
      </div>
    </div>

    <form className="flex flex-col ">
    <section className="flex justify-between mb-6 mt-4 items-start p-4 shadow-md shadow-white rounded-md">
      <label htmlFor="sell-amount" className="sr-only"></label>
      <input inputMode="decimal" 
      autoComplete="off" 
      autoCorrect="off" type="text"
      pattern="^[0-9]*[.,]?[0-9]*$" 
      placeHolder="0" minLength="1" maxLength="79" spellCheck="false"  value = {sellAmount}
      id="sell-amount"
      value={sellAmount}
      className="w-1/2 h-9 text-4xl rounded-md bg-transparent"
      style={{ border: "1px solid black none" ,
      outline: "none" }}
      onChange={(e) => {
        setTradeDirection("sell");
        setSellAmount(e.target.value);
      }}
      />
      <img
      alt={sellToken}
      className="h-9 w-9 mr-2 rounded-md"
      src={POLYGON_TOKENS_BY_SYMBOL[sellToken].logoURI}
      />
      <label htmlFor="sell-select" className="sr-only"></label>     
      <select
      value={sellToken}
      name="sell-token-select"
      id="sell-token-select"
      className="mr-2 w-20 h-9  bg-transparent rounded-md"
      onChange={handleSellTokenChange}
      >
            {/* <option value="">--Choose a token--</option> */}
      {POLYGON_TOKENS.map((token) => {
        return (
          <option
          key={token.address}
          value={token.symbol.toLowerCase()}
          >
          {token.symbol}
          </option>
          );

      })}
      </select>
    </section>
      <button className="h-9 w-9 self-center mr-2 rounded-md" onClick={handleTokenSwitch}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>

      </button>
  

    <section className="flex justify-between mb-6 mt-4 items-start p-4 shadow-md shadow-white rounded-md">

    <label htmlFor="buy-token" className="sr-only"></label>




    <label htmlFor="buy-amount" className="sr-only"></label>
    <input
    id="buy-amount"
    value={buyAmount}
    className="h-9 w-1/2 text-4xl rounded-md bg-transparent cursor-not-allowed"
    style={{ border: "1px solid black none" }}
    disabled
    onChange={(e) => {
      setTradeDirection("buy");
      setBuyAmount(e.target.value);
    }}
    />


    <img
    alt={buyToken}
    className="h-9 w-9 mr-2 rounded-md"
    src={POLYGON_TOKENS_BY_SYMBOL[buyToken].logoURI}
    />

    <select
    name="buy-token-select"
    id="buy-token-select"
    value={buyToken}
    className="mr-2 w-20 text self-end h-9 bg-transparent rounded-md"
    onChange={(e) => handleBuyTokenChange(e)}
    >
        {/* <option value="">--Choose a token--</option> */}
    {POLYGON_TOKENS.map((token) => {
      return (
        <option key={token.address} value={token.symbol.toLowerCase()}>
        {token.symbol}
        </option>
        );
    })}
    </select>

    </section>


    <div className="flex justify-center">
    {takerAddress ? (
      <ApproveOrReviewButton
      sellTokenAddress={POLYGON_TOKENS_BY_SYMBOL[sellToken].address}
      takerAddress={takerAddress}
      onClick={() => {
        setFinalize(true);
      }}
      />
      ) : (
      <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName, chain }) => {
        return (
          <button
          onClick={show}
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
          {isConnected ? address : "Connect Wallet"}
          </button>
          );
      }}
      </ConnectKitButton.Custom>
      )}

      {isLoadingPrice && (
        <div className="text-center mt-2">Fetching the best price...</div>
        )}
      </div>
  

      </form>

        </div>
  );
}

function ApproveOrReviewButton({
  takerAddress,
  onClick,
  sellTokenAddress,
}: {
  takerAddress: Address;
  onClick: () => void;
  sellTokenAddress: Address;
}) {
  // 1. Read from erc20, does spender (0x Exchange Proxy) have allowance?
  const { data: allowance, refetch } = useContractRead({
    address: sellTokenAddress,
    abi: erc20ABI,
    functionName: "allowance",
    args: [takerAddress, exchangeProxy],
  });

  // 2. (only if no allowance): write to erc20, approve 0x Exchange Proxy to spend max integer
  const { config } = usePrepareContractWrite({
    address: sellTokenAddress,
    abi: erc20ABI,
    functionName: "approve",
    args: [exchangeProxy, MAX_ALLOWANCE],
  });

  const {
    data: writeContractResult,
    writeAsync: approveAsync,
    error,
  } = useContractWrite(config);

  const { isLoading: isApproving } = useWaitForTransaction({
    hash: writeContractResult ? writeContractResult.hash : undefined,
    onSuccess(data) {
      refetch();
    },
  });

  if (error) {
    return <div>Something went wrong: {error.message}</div>;
  }

  if (allowance === 0n && approveAsync) {
    return (
      <>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          onClick={async () => {
            const writtenValue = await approveAsync();
          }}
        >
          {isApproving ? "Approving..." : "Approve"}
        </button>
      </>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
    >
      Review Trade
    </button>
  );
}
