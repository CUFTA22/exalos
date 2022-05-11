import { NextResponse, NextRequest, NextFetchEvent } from 'next/server';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  // prettier-ignore
  const { nextUrl, nextUrl: { pathname }, ip } = req;

  if (process.env.ALLOWED_IP !== ip && process.env.NODE_ENV !== 'development') {
    const url = nextUrl.clone();
    url.pathname = '/401';
    return NextResponse.rewrite(url);
  }

  if (pathname.includes('dashboard')) {
    return NextResponse.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }

  return NextResponse.next();
}
