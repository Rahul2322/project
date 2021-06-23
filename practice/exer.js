const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

function overTheRoad(address, n){
  //code here
  if(address%2!=0){
    x=(address+1)/2
    return 2*n-2*(x-1)
  }else{
    x=(2*n-address)/2
    return 2*x+1
  }
}
console.log(overTheRoad(10,11))
// return 2*n+1-address

