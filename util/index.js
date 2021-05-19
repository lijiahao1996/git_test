export function getData(flag) {
  console.log(11111)
  return new Promise((resolve) => {
    setTimeout(() => resolve(flag ? [4, 5, 6] : [1, 2, 3]), 1000)
  })
}
