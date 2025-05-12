type WithoutTypename<T> =
  T extends Array<infer U>
    ? Array<WithoutTypename<U>> // Обрабатываем массивы
    : T extends object
      ? { [K in Exclude<keyof T, '__typename'>]: WithoutTypename<T[K]> } // Убираем __typename из объектов
      : T; // Для примитивных типов ничего не меняем

// Удаление директивы qhl __typename из объекта
export function removeTypename<T>(obj: T): WithoutTypename<T> {
  if (Array.isArray(obj)) {
    return obj.map(removeTypename) as WithoutTypename<T>; // Рекурсивно обрабатываем массив
  } else if (obj !== null && typeof obj === 'object') {
    const newObj: Partial<Record<keyof T, never>> = {};
    for (const key in obj) {
      if (key !== '__typename') {
        newObj[key] = removeTypename((obj as Record<string, never>)[key]); // Рекурсивно обрабатываем объекты
      }
    }
    return newObj as WithoutTypename<T>;
  }
  return obj as WithoutTypename<T>; // Для примитивов возвращаем как есть
}
