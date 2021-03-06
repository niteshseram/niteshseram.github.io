import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "../components/Loader/Loader";
import Theme from "../styles/theme";
import * as gtag from "../lib/gtag";
import Meta from "../components/Meta";
import useDarkMode from "use-dark-mode";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const darkMode = useDarkMode(false);

  const preloading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    preloading();
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Meta />
      <Theme darkMode={darkMode}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Component {...pageProps} darkMode={darkMode} />
          </>
        )}
      </Theme>
    </>
  );
}
