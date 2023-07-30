import Head from "next/head";
import Header from "@/src/components/Header";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme";
import "../styles/main.scss";
import Container from '@mui/material/Container';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header />
        <Container maxWidth="xl" sx={{
          marginTop: 3
        }}>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
