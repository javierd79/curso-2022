export const everyWeek = (x) => {
  const prev = new Date()
  prev.setDate(prev.getDate() + (x + (7 + prev.getDay())) % 7)
  return prev
    .toISOString()
    .slice(0, 10)
    .replace('T', ' ')
}
