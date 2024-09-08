export function getDayName(dateStr, locale) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "short" });
}

export function getCurrentDayAndTime(locale) {
  const now = new Date();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfTheWeek = weekDays[now.getDay()];
  const time = now.toLocaleTimeString(locale, {
    hour: "numeric",
    minute: "numeric",
  });

  return {
    dayOfTheWeek,
    time,
  };
}
