const drawVisualizer = (u8aData: any, canvas: HTMLCanvasElement) => {
  const data = [...u8aData];

  if (!canvas) return;

  let ctx = canvas.getContext('2d');

  const barColor = 'hsla(206, 88%, 77%)';
  const shadowBlur = 20;
  const shadowColor = 'hsla(206, 88%, 77%)';
  const barWidth = 2;
  const barHeight = 2;
  const barSpacing = 7;

  const radiusReduction = 70;
  const amplitudeReduction = 4;

  const cx = canvas.width / 2 + 20;
  const cy = canvas.height / 2 + 20;
  const radius = Math.min(cx, cy) - radiusReduction;
  const maxBarNum = Math.floor((radius * 2 * Math.PI) / (barWidth + barSpacing));
  const slicedPercent = Math.floor((maxBarNum * 28) / 100);
  const barNum = maxBarNum - slicedPercent;
  const freqJump = Math.floor(data.length / maxBarNum);

  let gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(1, barColor);
  ctx.fillStyle = gradient;
  ctx.shadowBlur = shadowBlur;
  ctx.shadowColor = shadowColor;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < barNum; i++) {
    // Instead of [1, 2, 3, 4] it goes [1, 2, 2, 1]
    const newI = i > barNum / 2 ? barNum - 1 - i : i;

    const amplitude = data[newI * freqJump] / 1.4 || barHeight;
    const theta = (i * 2.77 * Math.PI) / maxBarNum;
    const delta = ((4 * 45 - barWidth) * Math.PI) / 180;
    const x = 0;
    const y = radius - (amplitude / 24 - barHeight);
    const w = barWidth;
    const h = amplitude / amplitudeReduction + barHeight;

    ctx.save();
    ctx.translate(cx + barSpacing - 26, cy + barSpacing - 20);
    ctx.rotate(theta - delta);
    ctx.fillRect(x, y, w, h);
    ctx.restore();
  }
};

export default drawVisualizer;
