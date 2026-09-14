import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "SAB",
  description: "Medicamento de alto custo",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full font-poppins flex flex-col">
     
        {children}
      </body>
    </html>
  );
}