import Providers from '@/Providers/Providers';
import { Layout } from '@/components/layout';

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
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
