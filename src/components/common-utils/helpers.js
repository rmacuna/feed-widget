export const formatDate = (date) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("default", { month: "long" });
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  return `${month} ${day}, ${year} at ${hours}:${minutes}`;
};
