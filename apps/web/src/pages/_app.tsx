import type { AppProps } from "next/app";

import { Poppins, Montserrat } from "@next/font/google";

import "@/styles/globals.css";
import Script from "next/script";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-46QHYVR4HL"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-46QHYVR4HL', {
              page_path: window.location.pathname,
            });
      `,
        }}
      />

      <Head>
        <meta name="title" content="DeerHack 2023 - Fawning Over Innovation" />
        <meta
          name="description"
          content="Deer Hack 2023 is the brainchild of a small team to unleash the potential of young innovators through a 36-hour hackathon in which developers, designers, students, entrepreneurs, educators, and mentors collaborate to create solutions that tackle real-world problems. When people from many backgrounds collaborate, they do more than merely do good; they become a force for global change."
        />
        <meta
          name="keywords"
          content="Hackathon in Nepal, 36 Hours Hackathon, Upcoming Hackathons in Nepal, Deerwalk Hackathon, Deerwalk Institute Of Technology, hackathon nepal, hackathon meaning, what is a hackathon, why participate in hackathon"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Deerwalk Institute Of Technology" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://deerhack.deerwalk.edu.np/" />
        <meta
          property="og:title"
          content="DeerHack 2023 - Fawning Over Innovation"
        />
        <meta
          property="og:description"
          content="Deer Hack 2023 is the brainchild of a small team to unleash the potential of young innovators through a 36-hour hackathon in which developers, designers, students, entrepreneurs, educators, and mentors collaborate to create solutions that tackle real-world problems. When people from many backgrounds collaborate, they do more than merely do good; they become a force for global change."
        />
        <meta
          property="og:image"
          content="https://deerhack.deerwalk.edu.np/images/deerhack.webp"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://deerhack.deerwalk.edu.np/"
        />
        <meta
          property="twitter:title"
          content="DeerHack 2023 - Fawning Over Innovation"
        />
        <meta
          property="twitter:description"
          content="Deer Hack 2023 is the brainchild of a small team to unleash the potential of young innovators through a 36-hour hackathon in which developers, designers, students, entrepreneurs, educators, and mentors collaborate to create solutions that tackle real-world problems. When people from many backgrounds collaborate, they do more than merely do good; they become a force for global change."
        />
        <meta
          property="twitter:image"
          content="https://deerhack.deerwalk.edu.np/images/deerhack.webp"
        />
      </Head>

      <div
        className={`${poppins.variable} ${montserrat.variable} min-w-[312px]`}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
