export const getEntitiesDataByIds = <Data>(ids: string[], data: Record<string, Data>) => {
  return ids.reduce<Record<string, Data>>((acc, key) => {
    if (key in data) {
      acc[key] = data[key];
    }
    return acc;
  }, {});
};
