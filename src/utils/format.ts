import { DateTimeFormatOptions } from "intl";

export const formatDate = (dateString: string) => {
  const options: DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
