export default function guardrail(mathFunction) {
  const queue = [];
  const msg = 'Guardrail was processed';
  try {
    queue.push(mathFunction(), msg);
  } catch (err) {
    queue.push(`Error: ${err.message}`, msg);
  }
  return queue;
}
