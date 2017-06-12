export function stringEnum (...args) {
  return args.reduce((acc, arg) => {
    acc[arg] = arg
    return acc
  }, {})
}