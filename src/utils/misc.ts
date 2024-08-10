export const truncateString = (address: string) => {
  if (!address) return "Unknown Address";
  return `${address.slice(0, 8)}......${address.slice(-4)}`;
};
