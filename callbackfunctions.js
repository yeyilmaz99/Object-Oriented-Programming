// callback functions

let val;

function MultipleByTwo (a,b,c,callback){
    let arr = [];

    if (callback && typeof callback ==='function'){
    for (let i = 0; i<3 ; i++){
        arr[i] = callback(arguments[i]*2);
    }
}
    return arr;
}


function addOne(a){
    return a+1;
}
function addTwo(a){
    return a+2;
}
function addThree(a){
    return a+3;
}



val = MultipleByTwo(5,10,20,addThree);

// val = addOne(100);

// for (let i = 0; i<val.length; i++){
//     val[i] = addOne(val[i]);
// }



console.log(val);
