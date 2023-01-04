// function recuperaDatiDaForm() {
//   let nome = document.getElementById("nome").value;
//   let cognome = document.getElementById("cognome").value;
//   let eta = document.getElementById("eta").value;
//   let genere = document.getElementById("genere").value;
//   let interessi = document.getElementById("interessi").value;
//   return nome,cognome,eta,genere,interessi;
// }


let lista= [];

let lista_persone = {
  nome,
  cognome,
  eta,
  genere,
  interessi,
};

function pulisci() {
  let nome = (document.getElementById("nome").value = "");
  let cognome = (document.getElementById("cognome").value = "");
  let eta = (document.getElementById("eta").value = "");
  let genere = (document.getElementById("genere").value = "");
  let interessi = (document.getElementById("interessi").value = "");
}

class Uomo {
  constructor(nome, cognome, eta, genere, interessi) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.genere = genere;
    this.interessi = interessi;
  }
  bio = () => {
    console.log(
      `Ciao, mi chiamo ${this.nome} , ho ${this.eta}e per il momento mi femro`
    );
    body.inerthtml(
      `Ciao, mi chiamo ${this.nome} , ho ${this.eta}e per il momento mi femro`
    );
  };
  get() {
    return this.nome;
  }
  set(nomescelto) {
    return (this.nome = nomescelto);
  }
}

function newPersona() {
  // recuperaDatiDaForm()
  let nome = document.getElementById("nome").value;
  let cognome = document.getElementById("cognome").value;
  let eta = document.getElementById("eta").value;
  let genere = document.getElementById("genere").value;
  let interessi = document.getElementById("interessi").value;
  let nuovo_utente = new Uomo(nome, cognome, eta, genere, interessi);
  lista.push(nuovo_utente);
  pulisci();
}

function mostra_utenti() {
  let divLista = document.getElementById("lista");
  divLista.innerHTML = "";
  lista.forEach((element) => {
    let newpar = document.createElement("p");
    divLista.appendChild(newpar);
    newpar.insertAdjacentHTML("afterend", element);
    console.log(element);
  });

  // for (const key in lista) {
  //   let element = lista[key];
  //   console.log(element);
  // }
}

function genera_tabella() {
  let table = document.createElement("table");
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  let th = document.createElement("th");
}
