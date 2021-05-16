const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Tip Calculator App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {total} = model
    const {tip} = model
    const {bill_amount} = model
    const {tip_money} = model
    return [
        {"Bill Amount": bill_amount + '$', "Tip (%)": tip + '%' , Tip: tip_money + '$', Total: total + '$'},
    ]
}

function inputForm(model){
    const {input} = model
    const message = 'Bill amount?:'
    const message2 = 'Tip (%):'
    return inquirer.prompt([
        {
            name: 'bill_amount',
            type: 'number',
            message: message,
            default: input,
        },
        {
            name: 'bill_tip',
            type: 'number',
            message: message2,
            default: input,
        }
    ])
}



// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm
}