

const Money = (value: number | undefined) => {
  if (!value) return '0.00';
  if (value > 0 || value === 0) return `+ ${value.toFixed(2)}`;
  return `- ${Math.abs(value).toFixed(2)}`;
}

export default Money;