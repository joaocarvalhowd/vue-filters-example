import toMoney from '@/utils/filters/toMoney'

describe('Filter "toMoney".', () => {
  it('"toMoney" should show value formatted in currency.', () => {
    expect(toMoney(39)).to.equal('R$ 39,00')
    expect(toMoney(930.9)).to.equal('R$ 930,90')
  })
})
