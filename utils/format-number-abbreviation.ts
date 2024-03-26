export const formatNumberWithAbbreviation = (number: number) => {
  let absNumber = Math.abs(number);

  if (absNumber >= 1e12) {
    return formatWithPrecision(number, 1e12, "T");
  } else if (absNumber >= 1e9) {
    return formatWithPrecision(number, 1e9, "B");
  } else if (absNumber >= 1e6) {
    return formatWithPrecision(number, 1e6, "M");
  } else if (absNumber >= 1e3) {
    return formatWithPrecision(number, 1e3, "K");
  } else {
    return number.toString();
  }
};

const formatWithPrecision = (
  number: number,
  divisor: number,
  suffix: string
) => {
  let dividedNumber = number / divisor;
  let formattedNumber = dividedNumber.toFixed(2); // Format with two decimal places

  // Check if the formatted number ends with '.00', if so, remove the decimal part
  if (formattedNumber.endsWith(".00")) {
    formattedNumber = formattedNumber.substring(0, formattedNumber.length - 3);
  }

  return `${formattedNumber}${suffix}`;
};
