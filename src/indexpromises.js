function ab(){
    console.log("ab");
}

function b(){
    try{
        throw "My custom error";
    console.log("bc1");
    console.log("bc1");
    console.log("bc1");
    }catch(e){
        console.log(e);
    }
}

function c(){
    new Promise(function(){
        console.log("Amazing c");
         new Promise(function(){
            throw "My custom error";
         });
        console.log("bc1");
        console.log("bc1");
        console.log("bc1");
    });
    console.log("c1");
    console.log("c2");
    console.log("c3");
}

function cd(){
    console.log("cd");
}
function ef(){
    console.log("ef");
}
function gh(){
    console.log("gh");
}

ab();
b();
c();
cd();
ef();
gh();


function getData(){
  return  new Promise((resolve, reject) => {
        const res = {
            a: [],
            b: () => {},
            c: class Abc{ 

             },
            d: {}
        };
        resolve(res);
        console.log(1);
    });
}


getData().then(function(data){
    console.log("*********FROM THEN--getting resolved data");
    console.log(data);
}).catch(( data ) => {
    console.log("*********getting data from REJECT");
    console.log(data);
});


function myProm(fun){
    fun(() => {}, () =>{});
}

myProm((a, b) => {
    a();
    b();
});


function add(a,b){
    const prom$ = new Promise((resolve, reject) => {
            if(typeof a == 'number' && typeof b == 'number'){
                const sum = a+b;
                resolve(sum);
            }else{
                const err = new Error("You have to send to get sum of those numbers");
                reject(err);
            }
    });
    return prom$;
}

add(10,20).then((data) => {
    console.log("Sum is", data);
})
.catch(function(error){
    console.log("Error", error);
})
.finally(() =>{
    console.log("Completed");
});


async function process(){
  const res =  await add(90,90);
  console.log({res});
}

process();

