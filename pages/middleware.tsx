// pages/_middleware.ts
import type { NextFetchEvent, NextRequest } from 'next/server';

const Middleware = (req: NextRequest, ev: NextFetchEvent) => {
  return <div>Middleware</div>;
};

export default Middleware;
