export function generate<T>(
  length: number,
  generatorFn: (index: number, array: T[]) => T
): T[] {
  const array: T[] = new Array(length);

  for (let index = 0; index < length; index++) {
    array[index] = generatorFn(index, array);
  }

  return array;
}
