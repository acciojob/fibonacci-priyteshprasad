function fibonacci(num) {
// your code here
	var a = 1, b = 0, temp;
	if(num == 1) return 0;
	if(num == 2) return 1;
	

  while (num > 2){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return a; 
}
// var n = prompt("Enter the number of elements");
// alert(fibonacci(n)); 

module.exports = fibonacci;
