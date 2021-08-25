/**
 * Life
 * Info: {@link https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life Game Of Life}
 */

import React, { useEffect, useRef, useState } from 'react';

const dark = false;
const idle = 100;

function random(s) {
  return ~~(Math.random() * s);
}

function initGrid({ sw: w, sh: h }) {
  const map = [];
  for (let i = 0; i < w; ++i) {
    map[i] = Array(h).fill(false);
  }

  // randomly initialize the map
  for (let i = 0, l = (w * h) / 12; i < l; ++i) {
    map[random(w)][random(h)] = true;
  }

  if (w > 10 && h > 10) {
    for (let i = 0; i < 10; ++i) {
      let px = random(w - 10);
      let py = random(h - 10);

      /* Glider */
      map[px][py] =
        map[px + 1][py + 1] =
        map[px + 1][py + 2] =
        map[px + 2][py + 0] =
        map[px + 2][py + 1] =
          true;

      px = random(w - 10);
      py = random(h - 10);

      /* MWSS */
      map[px + 1][py] =
        map[px + 2][py] =
        map[px + 3][py] =
        map[px + 4][py] =
        map[px + 5][py] =
        map[px][py + 1] =
        map[px + 5][py + 1] =
        map[px + 5][py + 2] =
        map[px][py + 3] =
        map[px + 4][py + 3] =
        map[px + 2][py + 4] =
          true;
    }
  }
  return map;
}

export default function GameOfLife() {
  const pauseRef = useRef(false);
  const canvasRef = useRef();
  const [windowResized, rerender] = useState(0);

  useEffect(() => {
    const setState = () => {
      rerender((s) => s + 1);
    };

    const onResize = () => {
      if (!pauseRef.current) {
        const canvas = canvasRef.current; // @ts-ignore
        if (canvas) canvas.style.opacity = '0';
        pauseRef.current = true;
      }
      setState();
    };

    window.addEventListener('resize', onResize, false);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    pauseRef.current = false;

    setTimeout(() => {
      // @ts-ignore
      if (canvas) canvas.style.opacity = '.4';
    }, 300);

    let timeout = null; // @ts-ignore
    const context = canvas.getContext('2d');

    const width = window.document.body.clientWidth;
    const height = window.innerHeight;

    const size = Math.max(width, height);
    const tile = size < 4000 ? 12 : 20;
    const sw = ~~(width / tile);
    const sh = ~~(height / tile);

    // @ts-ignore
    canvas.width = width; // @ts-ignore
    canvas.height = height;

    function drawGrid(grid) {
      if (pauseRef.current) return grid;
      const map = [];
      for (let i = 0; i < sw; ++i) {
        const row = Array(sh).fill(false);
        map[i] = row;
        for (let j = 0; j < sh; ++j) {
          // @ts-ignore
          let cnt = !!grid[i][j - 1] + !!grid[i][j + 1]; // @ts-ignore
          if (i > 0) cnt += !!grid[i - 1][j - 1] + !!grid[i - 1][j + 1] + !!grid[i - 1][j]; // @ts-ignore
          if (i < sw - 1) cnt += !!grid[i + 1][j - 1] + !!grid[i + 1][j + 1] + !!grid[i + 1][j];

          if (grid[i][j]) {
            if (cnt < 2) row[j] = false;
            else if (cnt < 4) row[j] = true;
            else row[j] = false;
          } else {
            if (cnt === 3) row[j] = true;
            else row[j] = false;
          }

          context.fillStyle = row[j] ? 'hsla(206, 88%, 77%, 0.1)' : 'hsla(240, 22%, 21%, 0.5)';
          context.fillRect(i * tile, j * tile, tile, tile);
        }
      }
      return map;
    }

    function run(map) {
      timeout = setTimeout(run, idle, drawGrid(map));
    }

    run(initGrid({ sw, sh }));

    return () => {
      clearTimeout(timeout);
    };
  }, [windowResized]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0,
        transition: 'opacity 1.2s ease',
      }}
    />
  );
}
