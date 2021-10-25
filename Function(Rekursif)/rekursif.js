function test(x){
    if ( x === 0) return 1;
    return  x * test(x-1);
}

test(4);