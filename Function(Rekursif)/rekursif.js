function test(x){
    console.log(x);
    return test(x-1);
    
}

test(7);