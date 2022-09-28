// var opr = prompt("Operator: ")
// var num3 = parseInt(prompt("Number 3: "))
// var num2 = parseInt(prompt("Number 2: "))

// if(opr == "+")
// {
//     console.log(num3 + num2)
//     {else if(opr == "-")
//     }
    
//     console.log(num3 - num2)
//     {else if(opr == "*")
//     }

//     console.log(num3 * num2)
//     {else if(opr == "/")
//     }

//     console.log(num3 / num2)
// }

//range nilai
// 100-90 = A
// 70-89 = B
// 69-50 = C
// 49-20 = D
// 19-0 = E

var nilai = '90'

if(nilai >90 && nilai <100) {
    document.write('a')
}else if(nilai >70 && nilai<89) {
    document.write('b')
}else if(nilai >69 && nilai<50) {
    document.write('c')
}else if(nilai >49 && nilai<20) {
    document.write('d')
}else if(nilai >19 && nilai<0) {
    document.write('e')
}