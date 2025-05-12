export const convertRecordSetToArrays = (input: Record<string, Set<string>>): Record<string, string[]> => {
  const result: Record<string, string[]> = {};

  for (const key in input) {
    result[key] = Array.from(input[key]);
  }

  return result;
};
