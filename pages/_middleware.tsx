import { NextResponse, NextRequest, NextFetchEvent } from 'next/server';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  // prettier-ignore
  const { nextUrl: { pathname }, ip } = req;

  if (process.env.ALLOWED_IP !== ip) {
    return NextResponse.redirect('/401', 401);
  }

  if (pathname.includes('dashboard')) {
    return NextResponse.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }

  return NextResponse.next();
}
