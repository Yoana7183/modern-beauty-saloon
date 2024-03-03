export const isEmpty = <T>(value: T | null | undefined | string): value is null | undefined => {
  return (
    value === undefined ||
    value === null ||
    value === 'null' ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
};