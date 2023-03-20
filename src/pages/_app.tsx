import "@/styles/globals.css";
import Layout from "@components/Layout";
import { AppPropsWithLayout } from "src/models/Global";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return <Layout>{page}</Layout>;
    });
  return getLayout(<Component {...pageProps} />);
}
