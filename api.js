const  recherche = async() => {
    pays = await fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())  
    return pays;
}

const contenu = document.querySelector('.contenu')
const search = document.querySelector('.search')
async function affiche() {
    results = await recherche();
    console.log(results);
    results
    .map((countrie)=>{
         contenu.innerHTML += `

    <div class="card" >
        <div class="face face1">
            <div class="content">
                <span class="stars"></span>
                 <img src="${countrie.flags.png}" alt="" />
                <h2  class="specia" >Nom: ${countrie.translations.fra.common}</h2>
                <h3 class="specia" >Capitale: ${countrie.capital}</h3>
                <p class="specia">Superficie:${countrie.area} km²</p>
                <p class="specia" >Momaie: ${countrie.languages}</p>
            </div>
        </div>
        <div class="face face2">
            <img src="${countrie.flags.png}" alt="" />
        </div>
    </div>
        
        `;
        
    })
    
}
affiche()

search.addEventListener("input", async  (e) => {
    const results = await recherche()
   const ff = results.filter((el) => el.translations.fra.common.includes(e.target.value));
  console.log(ff);
  return ff
});

console.log("rrrr");

