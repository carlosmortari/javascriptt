//SuperClasse
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor) {
    if( valor > this.saldo ){
        console.log(`Saldo Insuficiente: Você tem R$${this.saldo} Reais disponivel`)
        return;
    } 
        
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(
        `Ag/c: ${this.agencia} / ${this.conta} | ` +
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
};

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia , conta, saldo )
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
    if( valor > (this.saldo + this.limite)){
        console.log(`Saldo Insuficiente: Você tem R$${this.saldo} Reais disponivel`)
        return;
    } 
        
    this.saldo -= valor;
    this.verSaldo();
};

function CP(agencia, conta, saldo, limite) {
    Conta.call(this, agencia , conta, saldo )
    this.limite = limite;
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

console.log('Conta-Corrente')
const contaCC = new CC(546, 452896, 0, 100);
contaCC.depositar(68)
contaCC.sacar(68)
contaCC.sacar(10)

console.log('------------------------------------')
console.log('------------------------------------')

console.log('Conta-Poupança')
const cp = new CP(163, 35698, 0);
cp.depositar(68)
cp.sacar(45)
cp.sacar(25)
