function update(input, model){
    const {bill_amount} = input
    const {bill_tip} = input
    const tip_money_new = (bill_amount * bill_tip)/100
    const total = bill_amount + (bill_amount * bill_tip)/100
    return {
        ...model,
        bill_amount: bill_amount,
        tip: bill_tip,
        tip_money: +tip_money_new.toFixed(2),
        total: +total.toFixed(2)
    }
}

module.exports = {
    update
}