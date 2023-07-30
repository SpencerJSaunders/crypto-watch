import { useState } from "react";
import { fetchMarketInfo } from "@/clients/CoinGeckoClient";
import CryptoMarketTable from "@/src/components/CryptoMarketTable";

const CryptoMarketWatch = (props) => {
  const { marketInfo } = props;

  const [searchBarValue, setSearchBarValue] = useState("");

  return (
    <main>
      <h1 style={{ marginBottom: "1rem" }}>Crypto Market Watch</h1>
      <p style={{ marginBottom: "2.5rem" }}>
        To view more details for a specific coin, click on the name of a
        specific coin.
      </p>
      <CryptoMarketTable marketInfo={marketInfo} searchTerm={searchBarValue} />
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
