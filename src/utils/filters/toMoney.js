import VMasker from 'vanilla-masker'

export function toMoney (value) {
  return VMasker.toMoney(parseFloat(value).toFixed(2), {
    precision: 2,
    unit: 'R$ ',
    zeroCents: false
  })
}
