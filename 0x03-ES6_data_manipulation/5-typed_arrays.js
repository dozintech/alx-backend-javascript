export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) throw new Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  int8View[position] = value;
  return new DataView(buffer);
}

// Alternatively
// export default function createInt8TypedArray(length, position, value) {
//   if (position < 0 || position >= length) throw new Error('Position outside range');
//   const buffer = new ArrayBuffer(length);
//   const view = new DataView(buffer);
//   view.setInt8(position, value);
//   return view;
// }
