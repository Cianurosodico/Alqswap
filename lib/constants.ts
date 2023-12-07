import type { Address } from "wagmi";

export const MAX_ALLOWANCE =
  115792089237316195423570985008687907853269984665640564039457584007913129639935n;

export const exchangeProxy = "0xDef1C0ded9bec7F1a1670819833240f027b25EfF";

/* type Token = {
  address: Address;
}; */

interface Token {
  name: string;
  address: Address;
  symbol: string;
  decimals: number;
  chainId: number;
  logoURI: string;
}

export const POLYGON_TOKENS: Token[] = [
  
  {
    chainId: 56,
    name: "Alquimia Token",
    symbol: "ALQ",
    decimals: 18,
    address: "0x4b48c0db4e460c894bfc031d602a5c3b57a26857",
    logoURI: "https://raw.githubusercontent.com/Cianurosodico/logos/main/ALQsvg.svg ",
  },
  {
    chainId: 56,
    name: "OGT",
    symbol: "OGT",
    decimals: 18,
    address: "0x598642f59c0366643c6f9ee3252cbb3ef1524c51",
    logoURI: "https://raw.githubusercontent.com/Cianurosodico/logos/main/ogt.svg",
  },
  {
    chainId: 56,
    name: "Tether USD ",
    symbol: "USDT",
    decimals: 18,
    address: "0x55d398326f99059ff775485246999027b3197955",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdt.svg",
  },
  {
    chainId: 56,
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
    address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/bnb.svg",
  },
];

export const POLYGON_TOKENS_BY_SYMBOL: Record<string, Token> = {
  
  alq: {
    chainId: 56,
    name: "Alquimia Token",
    symbol: "ALQ",
    decimals: 18,
    address: "0x4b48c0db4e460c894bfc031d602a5c3b57a26857",
    logoURI: "https://raw.githubusercontent.com/Cianurosodico/logos/main/ALQsvg.svg ",
  },
  ogt: {
    chainId: 56,
    name: "OGT",
    symbol: "OGT",
    decimals: 18,
    address: "0x598642f59c0366643c6f9ee3252cbb3ef1524c51",
    logoURI: "https://raw.githubusercontent.com/Cianurosodico/logos/main/ogt.svg",
  },
  usdt: {
    chainId: 56,
    name: "Tether USD ",
    symbol: "USDT",
    decimals: 18,
    address: "0x55d398326f99059ff775485246999027b3197955",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdt.svg",
  },
  bnb: {
    chainId: 56,
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
    address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/bnb.svg",
  },
};

export const POLYGON_TOKENS_BY_ADDRESS: Record<string, Token> = {
  
  "0x4b48c0db4e460c894bfc031d602a5c3b57a26857": {
    chainId: 56,
    name: "Alquimia Token",
    symbol: "ALQ",
    decimals: 18,
    address: "0x4b48c0db4e460c894bfc031d602a5c3b57a26857",
    logoURI: "https://raw.githubusercontent.com/Cianurosodico/logos/main/ALQsvg.svg ",
  },
  "0x598642f59c0366643c6f9ee3252cbb3ef1524c51": {
    chainId: 56,
    name: "OGT",
    symbol: "OGT",
    decimals: 18,
    address: "0x598642f59c0366643c6f9ee3252cbb3ef1524c51",
    logoURI: "https://raw.githubusercontent.com/Cianurosodico/logos/main/ogt.svg",
  },
  "0x55d398326f99059ff775485246999027b3197955": {
    chainId: 56,
    name: "Tether USD",
    symbol: "USDT",
    decimals: 18,
    address: "0x55d398326f99059ff775485246999027b3197955",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdt.svg",
  },
  "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE": {
    chainId: 56,
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
    address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/bnb.svg",
  },
};


