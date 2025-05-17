import transform from 'lodash/transform';

// 根据 ve 的 contract cssVar 推导 key
export type FlattenPaths<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${T[K] extends object ? `-${FlattenPaths<T[K]>}` : ''}`;
    }[keyof T]
  : '';

export const createFlattenVars = <T extends object>() => {
  return function flattenVars(obj: T, path: string[] = []): Record<FlattenPaths<T>, string> {
    return transform(
      obj,
      (result, value, key) => {
        const newPath = [...path, key as string];

        if (typeof value === 'object' && value !== null) {
          Object.assign(result, flattenVars(value as T, newPath));
        } else {
          const fullPath = newPath.join('-');
          (result as Record<string, string>)[fullPath] = `color-${fullPath}`;
        }
      },
      {} as Record<FlattenPaths<T>, string>,
    );
  };
};

// const toCamelCase = (paths: string[]) =>
//       paths.map((p, i) =>
//         i === 0 ? p.toLowerCase() :
//         p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()
//       ).join('');

export const createMapThemeValues = <T extends object>() => {
  return function mapThemeValues(source: T, prefix: string[] = []): Record<FlattenPaths<T>, string> {
    return Object.entries(source).reduce(
      (acc, [key, value]) => {
        const path = [...prefix, key];

        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          Object.assign(acc, mapThemeValues(value as T, path));
        } else {
          const varKey = path.join('-');
          (acc as Record<string, string>)[varKey] = value as string;
        }

        return acc;
      },
      {} as Record<FlattenPaths<T>, string>,
    );
  };
};
