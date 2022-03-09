import { NextResponse, NextRequest } from 'next/server';

export async function middleware(req, ev) {
  const { pathname } = req.nextUrl;

  if (pathname.includes('dashboard')) {
    return NextResponse.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }

  return NextResponse.next();
}
