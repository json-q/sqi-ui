export default function debounce<T>(fn: () => any): () => Promise<T> {
  let pending: Promise<T> | undefined;
  return () => {
    if (!pending) {
      pending = new Promise((resolve) => {
        Promise.resolve().then(() => {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
