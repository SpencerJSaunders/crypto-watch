import Image from "next/image";
import { fetchCoinInfo } from "@/clients/CoinGeckoClient";
import Grid from "@mui/material/Unstable_Grid2";
import parse from "html-react-parser";

const CoinInfo = (props) => {
  const { coinInfo } = props;
  return (
    <main>
      <div className="coin-info__name-container">
        <Image
          src={coinInfo.image.small}
          width={50}
          height={50}
          alt={`${coinInfo.name} logo`}
        />
        <h1>{coinInfo.name}</h1>
      </div>
      <div className="coin-info__description">
        <p>{parse(coinInfo.description.en)}</p>
      </div>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6} sm={4}>
          <div className="coin-info__grid-item">
            <p>Market Cap</p>
            <p> ${coinInfo.market_data.market_cap.usd.toLocaleString()}</p>
          </div>
        </Grid>
        <Grid xs={6} sm={4}>
          <div className="coin-info__grid-item">
            <p>Market Cap Rank</p>
            <p>#{coinInfo.market_cap_rank}</p>
          </div>
        </Grid>
        <Grid xs={6} sm={4}>
          <div className="coin-info__grid-item">
            <p>Current Price</p>
            <p> ${coinInfo.market_data.current_price.usd.toLocaleString()} </p>
          </div>
        </Grid>
        <Grid xs={6} sm={4}>
          <div className="coin-info__grid-item">
            <p>All Time High</p>
            <p>
              ${coinInfo.market_data.ath.usd.toLocaleString()} on{" "}
              {coinInfo.market_data.ath_date.usd.substring(0, 10)}
            </p>
          </div>
        </Grid>
        <Grid xs={6} sm={4}>
          <div className="coin-info__grid-item">
            <p>24 Hour High</p>
            <p>${coinInfo.market_data.high_24h.usd.toLocaleString()}</p>
          </div>
        </Grid>
        <Grid xs={6} sm={4}>
          <div className="coin-info__grid-item">
            <p>24 Hour Low</p>
            <p>${coinInfo.market_data.low_24h.usd.toLocaleString()}</p>
          </div>
        </Grid>
      </Grid>
    </main>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const response = await fetchCoinInfo(params.id);
  return {
    props: {
      coinInfo: response,
    },
  };
}

export default CoinInfo;
