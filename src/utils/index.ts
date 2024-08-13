export function debounce<T extends Function>(func: T, wait: number = 100): T {
  let timeout: NodeJS.Timeout
  return function (this: any, ...args: any[]) {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(context, args), wait)
  } as any
}
