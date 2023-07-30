import { useState } from "react";
import { fetchMarketInfo } from "@/clients/CoinGeckoClient";
import CryptoMarketTable from "@/src/components/CryptoMarketTable";
import SearchBar from "@/src/components/CoinTableSearchBar";
import { Button } from "@mui/material";

const CryptoMarketWatch = (props) => {
  const { marketInfo } = props;

  const [searchBarValue, setSearchBarValue] = useState("");
  const [displayAmount, setDisplayAmount] = useState(50);
  const [coinMarketInfo, setCoinMarketInfo] = useState(marketInfo);

  const loadAdditionalMarketInfo = async () => {
    // CoinGecko API can load up to 250 coins
    if (displayAmount < 250) {
      const numberOfCoinsToLoad = displayAmount + 50;
      const response = await fetchMarketInfo(numberOfCoinsToLoad);
      setDisplayAmount(displayAmount + 50);
      setCoinMarketInfo(response);
    }
  };

  console.log(searchBarValue);


  return (
    <main>
      <h1 style={{ marginBottom: "1rem" }}>Crypto Market Watch</h1>
      <p style={{ marginBottom: "2.5rem" }}>
        To view more details for a specific coin, click on the name of a
        specific coin.
      </p>
      <SearchBar searchBarValue={searchBarValue} setSearchBarValue={setSearchBarValue}/>
      <CryptoMarketTable
        marketInfo={coinMarketInfo}
        searchTerm={searchBarValue}
      />
      <Button
        className="load-more-coins-button"
        onClick={() => loadAdditionalMarketInfo()}
        variant="contained"
      >
        Load More Coins
      </Button>
    </main>
  );
};

export async function getServerSideProps(context) {
  const response = await fetchMarketInfo(50);

  return {
    props: {
      marketInfo: response,
    },
  };
}

export default CryptoMarketWatch;
