const prefix = Math.random()
  .toString(36)
  .slice(2);

export default function uuid() {
  const timestamp = Date.now();
  return `${prefix}-${timestamp.toString().slice(10)}`;
}
