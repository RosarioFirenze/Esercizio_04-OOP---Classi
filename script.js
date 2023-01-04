const Persona = {
  nome:"luca",
  cognome:"rossi",
  genere:"maschio",
  interessi:["basket","baseball","calcio"],
  indirizzo:{
    Via:"firenze",
    cap:"59100",
    provincia:"Po",
    citta:"prato"
  },
  saluta:()=>{
    let nome1=Persona.nome.toUpperCase();
    console.log(`ciao sono ${nome1}`)
}
};

;


   


