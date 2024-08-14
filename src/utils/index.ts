export function debounce<T extends Function>(func: T, wait: number = 100): T {
  let timeout: NodeJS.Timeout
  return function (this: any, ...args: any[]) {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(context, args), wait)
  } as any
}

export const random = (max: number) => {
  return Math.floor(Math.random() * max)
}

export const randomMinMax = (min: number, max: number) => {
  return random(max - min) + min
}
