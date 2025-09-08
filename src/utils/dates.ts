export const formatDateToDisplay = (date: string) => {
  // ISO -> Jan 15, 2024, 02:00 AM
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  const AM_PM = hour < 12 ? "AM" : "PM";

  // Convert to 12-hour format
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  const displayMinute = minute.toString().padStart(2, "0");

  return `${month} ${day}, ${year}, ${displayHour
    .toString()
    .padStart(2, "0")}:${displayMinute} ${AM_PM}`;
};
