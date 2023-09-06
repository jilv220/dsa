export function twoCrystalBalls(breaks: boolean[]) {
  const jumpAmt = Math.floor(Math.sqrt(breaks.length));
  let i;
  for (i = jumpAmt; i < breaks.length; i += jumpAmt) {
    if (breaks[i]) {
      break;
    }
  }
  i -= jumpAmt;

  for (let j = 0; j < jumpAmt && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }
  return -1;
}
