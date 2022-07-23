function nFactorial(n) {
  if(n>-1 && n<2){
    return 1;
  }
  else if(n<0){
    return 0;
  }
  
  return n*nFactorial(n-1);
}

//console.log(nFactorial(5));

function nFibonacci(n) {
  if(n<0)
    return 'ERROR';
  if(n<2)
    return n;
  
  return nFibonacci(n-1) + nFibonacci(n-2);
}

//console.log(nFibonacci(6));


function Queue() {
  this.cola=[];
}

Queue.prototype.enqueue = function(valor){
  this.cola.push(valor);
}

Queue.prototype.dequeue=function(){
  return this.cola.shift();
}

Queue.prototype.size=function(){
  let longitud = this.cola.lenght;
  return longitud;
}

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue('pepe');
console.log(queue);
console.log(queue.size());




