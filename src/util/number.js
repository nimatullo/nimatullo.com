export const random = (max) => {
  return Math.floor(Math.random() * (max - max * -1 + 1)) + max * -1
}

export const randomMinMax = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const randomHSLColor = () => {
  const h = randomMinMax(0, 360)
  const s = randomMinMax(42, 98)
  const l = randomMinMax(40, 90)
  return `hsla(${h}, ${s}%, ${l}%, 0.4)`
}
