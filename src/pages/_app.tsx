import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "../amplifyconfiguration.json";
import { api } from "~/utils/api";
import "~/styles/globals.css";

Amplify.configure(config);

const inter = Inter({
  subsets: ["latin"],
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`flex-1 ${inter.className}`}>
      <Component {...pageProps} />
    </main>
  );
};

export default withAuthenticator(api.withTRPC(MyApp));
