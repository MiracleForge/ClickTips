import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import './style/globals.css';

import Header from '@/components/navbar/navbar';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Click Tips',
    default: "Destrave Memórias com um Click | Venda, alugue e Anúncie",
  },
  description: "Anúncie já com oa Click Tips, venda , aluguel ou anuncie seus serviçõs e construa suas novas memórias",
  keywords: ['Venda', 'Aluguel', 'Anúncios', 'Classificados', 'Imóveis', 'Automóveis', 'Sonnen Software'],
  openGraph: {
    title: 'Destrave Memórias com um Click | Venda, alugue e Anúncie',
    description: 'Anúncie já com oa Click Tips, venda , aluguel ou anuncie seus serviçõs e construa suas novas memórias',
    url: 'www.clicktips.com.br',
    siteName: 'Click Tips',
    images: [
      {
        url: 'https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/Logo.png', 
        width: 800,
        height: 600,
      },
      {
        url: 'https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/Logo.png', 
        width: 1800,
        height: 1600,
        alt: 'Imagem representativa da Logo do Click Tips',
      },
    ],
    locale: 'pt_br',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">

      <body className={poppins.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
