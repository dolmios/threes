export function useTruncate(address: string): string {
  if (!address) return '';

  const truncatedAddress = address.substring(0, 6) + '...' + address.substring(address.length - 4);

  return truncatedAddress;
}
