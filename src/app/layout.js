import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-background text-text grid-rows(--my-grid-rows) grid grid-cols-(--my-grid-cols) items-start ${montserrat.className}`}
      >
        <div className="col-(--content-col) grid">{children}</div>
      </body>
    </html>
  );
}
