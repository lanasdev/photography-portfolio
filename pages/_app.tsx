import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-slate-50 text-slate-900 dark:text-slate-50 dark:bg-slate-900">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
