// exercice 1:
const destinations = [
{ id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7,
disponible: true },
{ id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10,
disponible: true },
{ id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5,
disponible: false },
{ id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4,
disponible: true },
{ id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12,
disponible: true },
{ id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6,
disponible: false }
];
//Q1

destinations.forEach(d=> (
    console.log(d.ville))
    
);

//Q2
const villes=destinations.map(d => d.ville);
console.log(villes);

//Q3
const prix1500 = destinations.filter(d => d.prix<1500);
//ou bien 
destinations.filter(d=>{return d.prix <1500})

//Q4
const destinations_id3=destinations.find(d =>d.id==3);
console.log(destinations_id3);

//exemple 
//chnage prix de santorin augmentation de 1000
prix1500[0].prix+=1000;
console.log(prix1500);
console.log(destinations);
// changer tout les prix de destination avec augmenattaion de 1000
prix1500.map(d=>d.prix+=1000);
console.log(prix1500);
console.log(destinations);

//Q5 
const Tokyo=destinations.findIndex(
    d=>d.ville==="tokyo");
    console.log(Tokyo)

 //Q8
 const t=destinations.reduce(
    (s,d)=>s=s+d.prix,0)
console.log(t);

 
 // exercice 4:
 const destinationsEurope = ["Rome", "Paris", "Madrid"];
const destinationsAsie = ["Tokyo", "Bali", "Bangkok"];
//Q1
const copie=[...destinationsEurope];
console.log(copie);
//Q2
const fusion=[...destinationsEurope,...destinationsAsie];
//Q3
const Ajout=["lisbone",...destinationsAsie];
const Ajoutfin=[...destinationsEurope,"lande"],
 