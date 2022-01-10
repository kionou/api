
const  recherche = async() => {
    afrique = await fetch(`https://restcountries.com/v3.1/region/Africa `)
    .then(res => res.json()) 
    console.log(afrique[0]);
    
    return afrique;
}


async function affiche() {
    results = await recherche();
    console.log(results);
    for (let i = 0; i < results.length; i++) {
        const element = results[i];
        document.body.innerHTML +=`mm`
        
    }
    
}
affiche()

console.log("rrrr");

