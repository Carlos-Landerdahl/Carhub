import { Inter } from 'next/font/google';
import { Box } from '@mui/material';
import Footer from '@/components/global/Footer';
import Navbar from '@/components/global/Navbar';
import ThemeRegistry from './ThemeRegistry';
import MainBody from '@/components/global/mainBody';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: {
    icon: ['/img/favicon.ico'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Box>
          <Navbar />
          <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
          <MainBody />
          <Footer />
        </Box>
      </body>
    </html>
  );
}
