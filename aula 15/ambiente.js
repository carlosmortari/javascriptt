var num = [5, 2, 6, 8]
num.sort()
num.push(9)
num.push(10)

for(c = 0; c < num.length; c++){
    console.log(num[c])
}

var c = num.indexOf(8)
console.log(`O valor 8 esta na posição ${c}`)