export default function formatTime(time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  const hoursPart = hours > 0 ? `${hours} h` : " ";
  const minutesPart = minutes > 0 ? `${minutes} min` : " ";

  return `${hoursPart} ${minutesPart}`.trim();
}
