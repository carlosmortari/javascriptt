function* geradora1 (){
    //codigo qualquer ....
    yield 'valor 1';
    //codigo qualquer ....
    yield 'valor 2';
    //codigo qualquer ....
    yield 'valor 3';
}

const g1 = geradora1();
for (let valor of g1){
    console.log(valor)
}

