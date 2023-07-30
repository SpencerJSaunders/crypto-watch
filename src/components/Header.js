import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import Typography from "@mui/material/Typography";
import CoinGeckoLogo from "../../images/coingecko.png";

const Header = () => {
  return (
    <header>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* This icon appears on md */}
            <CurrencyBitcoinIcon fontSize="large" sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Crypto Market Watch
            </Typography>

            {/* This icon disappears on md */}
            <CurrencyBitcoinIcon fontSize="large" sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "none", sm: 'flex', md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Crypto Market Watch
            </Typography>
            <div className='coin-gecko-logo__container'>
              <span className='coin-gecko-logo__text'>Powered by</span>
              <Image width={30} height={30} src={CoinGeckoLogo} alt="Coin Gecko logo" />
            </div>
          </Toolbar>
        </Container>
      </AppBar>{" "}
    </header>
  );
};

export default Header;
