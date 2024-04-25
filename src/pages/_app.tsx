import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { NavigationBar } from "~/components/layout.tsx/nav";
import { Footer } from "~/components/layout.tsx/footer";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "~/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className={`flex-1 ${inter.className}`}>
        <NavigationBar />
        <main className="flex-1 scroll-smooth ">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
