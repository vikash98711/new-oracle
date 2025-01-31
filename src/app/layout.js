
import { Inter } from "next/font/google";
import {Urbanist} from "next/font/google"; 
import {Roboto} from 'next/font/google'

import "../../node_modules/bootstrap/dist/css/bootstrap.css"; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import "./globals.css";
import "./custom.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] }); 
const urbanist = Urbanist({ subsets: ["latin"] }); 
// const roboto = Roboto({weight: '400', subsets: ["latin"] }); 

export const metadata = {
  title: "Join The Best International Language Institute for Foreign Languages course | Oracle Global Education",
  description: "If you have a passion for learning foreign and regional languages then this is the best institute to learn international languages. Oracle is the best coaching, learning teaching institute in Delhi. It covers all the courses of international languages ",
  keywords: ['best international language institute in Delhi', 'best foreign language institute in Delhi', 'best leading language institute in Delhi', 'best language teaching institute in Delhi', 'study with best global language institute oracle'],
  metadataBase: new URL('https://www.oracleglobaleducation.com'),
};  
export default function RootLayout({ children }) {  
  return (
    <html lang="en">  
      {/* <body className={roboto.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
