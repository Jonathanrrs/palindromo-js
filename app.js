class Palindromo {
    constructor() {

    }

    empatar(num) {
        let arriba = this.recorrerArriba(num);
        let abajo = this.recorrerAbajo(num);
        console.log(arriba);
        console.log(abajo);
        if(arriba == abajo) {
            console.log('Es un palíndromo');
        } else{
            console.log('No es palíndromo');
        }
    }

    recorrerArriba(num) {
        let numString = `${num}`;
        let newNumero = numString.split("");
        let print = "";
        for (let i = 0; i < newNumero.length; i++) { 
            print += newNumero[i];
        }
        return print;
    }

    recorrerAbajo(num) {
        let numString = `${num}`;
        let newNumero = numString.split("");
        let print = "";
        for (let i = newNumero.length-1; i >= 0; i--) {
            print += newNumero[i];
        }
        return print;

    }
}

let palindromo = new Palindromo();
palindromo.empatar(12321)