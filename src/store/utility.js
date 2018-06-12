// this expects two arguments. one is the old Object which is to copy and update. and the updated values.
export const updatedObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues
  }
}
