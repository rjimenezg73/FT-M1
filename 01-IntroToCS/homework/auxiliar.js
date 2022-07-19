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


function DecimalABinario(num){
  //Tu código acá
  let arrBinario = [];
  let arrBinarioR = [];
  let cadAux='';

  while(num>=1){
    arrBinario.push(num%2);
    num=Math.floor(num/2);
  }
  arrBinarioR = arrBinario.reverse();
  cadAux=arrBinario.join('');

  return cadAux;
}




decimal = BinarioADecimal('11001');
console.log(decimal);

strDecimalBinario = DecimalABinario(25);
console.log(strDecimalBinario);