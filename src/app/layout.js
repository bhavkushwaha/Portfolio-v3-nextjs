import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bhav Kushwaha",
  description: "A Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
   <head>
{/* Google Analytics Script */}
{/* Google tag (gtag.js) */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6KV5M71LL2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6KV5M71LL2');
</script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
