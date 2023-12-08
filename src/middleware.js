import { NextResponse } from 'next/server';

export function middleware(request) {
  const { cookies } = request;
  const token = cookies.get('accessToken');
  const userRole = cookies.get('userRole');
  const pathname = request.nextUrl.pathname;

  // Redireciona do login/register se já estiver autenticado
  if (token && (pathname === '/login' || pathname === '/register')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Redireciona para login se tentar acessar rotas privadas sem autenticação
  if (!token && (pathname.startsWith('/checkout/') || pathname.startsWith('/profile/'))) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Restringe acesso à rota /admin apenas para usuários com role 'ROLE_ADMIN'
  if (pathname.startsWith('/admin') && userRole.value !== 'ROLE_ADMIN') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout/:path*', '/profile/:path*', '/login', '/register', '/admin/:path*'],
};
