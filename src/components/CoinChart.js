import { getCoinHistory } from "@/clients/CoinGeckoClient";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CoinChart = ({ coinInfo }) => {
  const [chartInfo, setChartInfo] = useState([]);

  useEffect(() => {
    generateChartData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateChartData = async () => {
    let formattedChartData = [];
    const response = await getCoinHistory(coinInfo.id, 30, "daily");
    console.log(response);

    const { prices } = response;
    prices.forEach((price) => {
      console.log(moment(price[0]).format("YYYY-MM-DD"));
      formattedChartData.push({
        name: moment(price[0]).format("YYYY-MM-DD"),
        price: price[1].toFixed(2),
      });
    });
    setChartInfo(formattedChartData);
  };

  console.log(coinInfo);

  return (
    <LineChart
      width={600}
      height={400}
      data={chartInfo}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="price"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default CoinChart;
