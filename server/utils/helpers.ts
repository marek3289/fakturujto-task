export const filterByKeys = <T, K extends keyof T>(obj: Partial<T>, ...notAllowedFields: K[]) => {
  const newObj: Partial<T> = {};

  (Object.keys(obj) as K[]).forEach((key: K) => {
    if (!notAllowedFields.includes(key)) {
      newObj[key] = obj[key];
    }
  });

  return newObj;
};
