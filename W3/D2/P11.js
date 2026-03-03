// Recursive function
// a function which call itself(repeating)

function factorial(n){
    if(n<=1){
        return 1;
    }
    return n*factorial(n-1);
}