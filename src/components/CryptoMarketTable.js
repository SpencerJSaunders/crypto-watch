import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Link from "next/link";

const CryptoMarketTable = ({ marketInfo, searchTerm }) => {
  const generateTwentyFourHourChangeStyling = (twentyFourHourChange) => {
    let textColor = "";

    if (twentyFourHourChange > 0) {
      textColor = "green";
    } else if (twentyFourHourChange < 0) {
      textColor = "red";
    }

    return (
      <p style={{ color: textColor }}>{twentyFourHourChange.toFixed(2)}%</p>
    );
  };

  return (
    <div className="crypto-market-table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Crypto market table">
          <TableHead>
            <TableRow>
              <TableCell>Coin</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Market Cap Rank</TableCell>
              <TableCell>24 Hour Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {marketInfo &&
              marketInfo.map((coin) => {
                // console.log(coin.name);
                // console.log(coin.id);
                if (coin.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return (
                    <TableRow
                      key={coin.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>
                        <div className="crypto-market-table__coin-logo">
                          <Image
                            src={coin.image}
                            width={30}
                            height={30}
                            alt={`${coin.id} img`}
                          />
                          <Link href={`/coininfo/${coin.id}`}>{coin.name}</Link>
                        </div>
                      </TableCell>
                      <TableCell>
                        ${coin.current_price.toLocaleString()}
                      </TableCell>
                      <TableCell>#{coin.market_cap_rank}</TableCell>
                      <TableCell>
                        {generateTwentyFourHourChangeStyling(
                          coin.price_change_percentage_24h
                        )}
                      </TableCell>
                    </TableRow>
                  );
                }
                return;
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CryptoMarketTable;
