import { Box } from '@mui/material';
import Footer from '@/components/global/Footer';
import Navbar from '@/components/global/Navbar';
import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry';
import { Roboto } from 'next/font/google';
import { ThemeMuiProvider } from '@/components/ThemeRegistry/ThemeMuiProvider';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700', '900'],
});

export const metadata = {
  title: 'Alugue seu carro - promoções ativas',
  description: 'Faça o aluguel do seu carro - Dirija seus sonhos',
  icons: {
    icon: ['/favicon.ico'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeMuiProvider>
          <Box>
            <Navbar />
            <ThemeRegistry className={roboto.className} options={{ key: 'mui' }}>
              {children}
            </ThemeRegistry>
            <Footer />
          </Box>
        </ThemeMuiProvider>
      </body>
    </html>
  );
}
