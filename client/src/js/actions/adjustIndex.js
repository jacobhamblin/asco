export const ADJUST_INDEX = 'ADJUST_INDEX'

export const adjustIndex = (val) => {
  return {
    type: ADJUST_INDEX,
    adjustment: val
  }
}
