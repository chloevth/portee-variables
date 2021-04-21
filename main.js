const coucou = 55; // global
console.log(coucou);

function test(){    //local
    let hello = 24;
    console.log(hello);
}

document.getElementById('button').addEventListener('click',test);
let hello ='salut nico ';
console.log(hello);

function truc(){
   /* let hello = 32;*/
    console.log (hello);
}

document.getElementById('click').addEventListener('click',truc);


/* on a 3 let hello qui fonctionnent pas de la même façon
3 variables hello 

3 cas possibles global - local

*/