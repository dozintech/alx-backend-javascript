export default function cleanSet(set, startString) {
  const res = [];
  if (startString === '' || typeof (startString) !== 'string') return '';
  for (const item of set) {
    if (item && item.startsWith(startString)) res.push(item.slice(startString.length));
  }
  return res.join('-');
}
