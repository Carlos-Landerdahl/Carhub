'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import Providers from '@/Providers/Providers';
import { Layout } from '@/components/layout';
import PrivateRoute from '@/components/privateRoutes';
import { checkIsPublicRoute } from '@/functions/check-is-public-route';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isPublicPage = checkIsPublicRoute(pathname);

  useEffect(() => {
    document.title = 'Alugue seu carro - promoções ativas';
  }, [pathname]);

  return (
    <>
      <Head>
        <meta name="description" content="Faça o aluguel do seu carro - Dirija seus sonhos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </>
  );
}
