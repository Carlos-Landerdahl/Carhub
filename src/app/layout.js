import { Inter } from 'next/font/google';
import { Box } from '@mui/material';
import Footer from '@/components/global/Footer';
import Navbar from '@/components/global/Navbar';
import ThemeRegistry from './ThemeRegistry';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Algue seu carro - promoções ativas',
  description: 'Faça o aluguel do seu carro - Dirija seus sonhos',
  icons: {
    icon: ['/favicon.ico'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Box>
          <Navbar />
          <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
          <Footer />
        </Box>
      </body>
    </html>
  );
}
