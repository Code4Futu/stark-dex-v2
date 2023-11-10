function formatNumberWithCommas(number: number): string {
  if (number) return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return "";
}

function getDecimalDigits(number: number, decimalCount: number): number {
  const multiplier = Math.pow(10, decimalCount);
  return Math.round((number + Number.EPSILON) * multiplier) / multiplier;
}

function convertToAbbreviation(tokenName: string): string {
  const words = tokenName.split(" ");
  const abbreviation = words.map((word) => word[0]).join("");
  return abbreviation.toUpperCase();
}

export { formatNumberWithCommas, getDecimalDigits, convertToAbbreviation };
