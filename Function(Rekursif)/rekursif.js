function test(x){
    if (x === 0){
      return;  
    }
    console.log(x);
    return test(x-1);
}

test(7);