//fonction double
const double =(a)=>a*2 ;
console.log(double(2));
// calcule TVA
const calcul=(prix,taux)=>prix*taux;
const calcul2=(prix)=>{
    if (prix>100)
        return 0.1*prix
    else
        return 0.05*prix;
}
// sans utiliser if et else 
const calcul3=(prix)=>prix >100 ? 0.1*prix : 0.05*prix;

console.log(calcul(100,0.2))
console.log(calcul2(100))
console.log(calcul3(100))

// template:
const fruitsRouge=["fraise","framboise","cerise"];
for(let fruit of fruitsRouge){
    console.log(`la ${fruit} c'est bon`);
}
// autre methode avec for each
fruitsRouge.forEach(fruit => 
    console.log(`la ${fruit} c'est bon !`)
)


//mps
const nombres=[12,3,4,10];
let doubles=nombres.map(n => n*2)
console.log(doubles);
let d2=nombres.forEach(n=>console.log(n*2))

let paires=nombres.filter(n=>n%2==0)
console.log(paires)