import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { Amplify } from "aws-amplify";

import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";

import { withAuthenticator } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";

import config from "../amplifyconfiguration.json";
Amplify.configure(config);

import { api } from "~/utils/api";

import "~/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`font-sans ${inter.variable}`}>
      <Component {...pageProps} />
    </main>
  );
};

export default withAuthenticator(api.withTRPC(MyApp));
