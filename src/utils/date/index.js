export const getDate = time => {
  const date = new Date(time);
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
}