const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function Title(){
    return chalk.green(
        figlet.textSync(
            'Tip Calculator',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function Table(model){
    const {bill_amount} = model
    const {tip} = model
    const {tip_money} = model
    const {total} = model
    return [
        {"Bill Amount": bill_amount + '$', "Tip (%)": tip + '%', 
        Tip: tip_money + '$', Total: total + '$'},
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
            validate: function(value){
                if(value >= 0){
                    return true
                } else {
                    return 'Enter a number (START OVER)'
                }
            }
        },
        {
            name: 'bill_tip',
            type: 'number',
            message: message2,
            default: input,
            validate: function(value){
                if(value >= 0){
                    return true
                } else {
                    return 'Enter a number (START OVER)'
                }
            }
        }
    ])
}



// Get actual console view
function view(model){
    return {
        title: Title(),
        table: Table(model)
    }
}

module.exports = {
    view, 
    inputForm
}