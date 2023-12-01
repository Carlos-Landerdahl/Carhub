import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('accessToken');
  const pathname = request.nextUrl.pathname;

  // Se o token existir e o usuário estiver acessando rotas de login/register, redirecione para a home
  if (token && (pathname === '/login' || pathname === '/register')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Se o token não existir e a rota for privada, redirecione para a página de login
  if (!token && pathname.startsWith('/checkout/')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout/:path*', '/login', '/register'],
};
