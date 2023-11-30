'use client';

import Providers from '@/Providers/Providers';
import { Layout } from '@/components/layout';
import PrivateRoute from '@/components/privateRoutes';
import { checkIsPublicRoute } from '@/functions/check-is-public-route';
import { usePathname } from 'next/navigation';

// export const metadata = {
//   title: 'Alugue seu carro - promoções ativas',
//   description: 'Faça o aluguel do seu carro - Dirija seus sonhos',
//   icons: {
//     icon: ['/favicon.ico'],
//   },
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isPublicPage = checkIsPublicRoute(pathname);

  return (
    <html lang="pt-br">
      <body>
        <Providers>
          <Layout>
            {isPublicPage && children}
            {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
