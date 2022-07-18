let decimal=0;
let strDecimalBinario='';

function BinarioADecimal(num) {
  // tu codigo aca
  let suma = 0;

  for(let i=0; i<num.length;i++){
      suma = suma + (num[i]*Math.pow(2,num.length-1-i));
  }

  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca

  let dividendo = num;
  let modulo = 0;
  let cadAuxiliar='';
  let cadBinario='';
 
  do{
    modulo = dividendo%2;
    dividendo = Math.floor(dividendo/2);
    cadAuxiliar= cadAuxiliar + modulo.toString();

  } while(dividendo > 0);

  for(let i=0; i<cadAuxiliar.length;i++){
    cadBinario = cadBinario + cadAuxiliar.charAt(cadAuxiliar.length-1-i);
  }
  
  return cadBinario;

}


strDecimalBinario = DecimalABinario(225);
console.log(strDecimalBinario);

decimal = BinarioADecimal('11100001');
console.log(decimal);