export const formatDateTime = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // To format as 12-hour time with am/pm
  };

  return date.toLocaleString(undefined, options);
};
