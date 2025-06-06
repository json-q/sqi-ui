export function omit<T extends object, K extends keyof T>(obj: T, fields: K[] | readonly K[]): Omit<T, K> {
  const clone = Object.assign({}, obj);

  if (Array.isArray(fields)) {
    fields.forEach((key) => {
      delete clone[key];
    });
  }

  return clone;
}
