let cuenta = {
    titular: "Sebastian",
    saldo: 100000,

    consultarSaldo: function() {
        console.log(this.saldo);
    }
};

cuenta.consultarSaldo();

//sin embargo tambien podemos hacer lo mismo pero mas simplificado asi
user2 = {
  sayHi() {   // igual que "sayHi: function(){...}"
    console.log("Hello");
  }
};
user2.sayHi()




