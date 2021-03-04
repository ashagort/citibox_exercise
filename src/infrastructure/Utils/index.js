
export const iconBeer = (value) => {
  let icon = null
  if (value > 15) {
    icon = '\uD83E\uDD22'
    return icon
  } else if (value <= 15 && value > 8) {
    icon = '\uD83E\uDD74'
    return icon
  } else if (value <= 8 && value > 3) {
    icon = '\uD83D\uDE0A'
    return icon
  } else {
    icon = '\uD83D\uDE42'
    return icon
  }
}
