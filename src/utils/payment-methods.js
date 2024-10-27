import visaLogo from "../assets/svg/visa.svg";
import mastercardLogo from "../assets/svg/mastercard.svg";
import amexLogo from "../assets/svg/amex.svg";
import skrillLogo from "../assets/svg/skrill.svg";
import usdtLogo from "../assets/svg/usdt.svg";
import bitcoinLogo from "../assets/svg/bitcoin.svg";
import etheriumLogo from "../assets/svg/ethereum.svg";

const PAYMENT_METHODS = [
    { id: 1, name: "Visa", image: visaLogo },
    { id: 2, name: "Mastercard", image: mastercardLogo },
    { id: 3, name: "American Express", image: amexLogo },
    { id: 4, name: "Skrill", image: skrillLogo },
    { id: 5, name: "USDT", image: usdtLogo },
    { id: 6, name: "BITCOIN", image: bitcoinLogo },
    { id: 7, name: "ETHEREUM", image: etheriumLogo },
  ];

export default PAYMENT_METHODS;