import VMasker from 'vanilla-masker'

function toMoney (value) {
  return VMasker.toMoney(parseFloat(value).toFixed(2), {
    precision: 2,
    unit: 'R$ ',
    zeroCents: false
  })
}

export default toMoney
