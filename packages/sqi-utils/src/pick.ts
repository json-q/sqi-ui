export function pick<T extends object, K extends keyof T>(obj: T, fields: K[] | readonly K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;

  fields.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });

  return result;
}
