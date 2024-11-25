class Pesci {
  id?: number = 0;
  prezzo?: number = 0.0;
  specie? : Specie;
  eta? : number;
  sesso? : "Maschio" | "Femmina";
  dimensioni? : number = 0.0;
}

class Cliente {
  id? : number = 0;
  nome? : String
  cognome? : String
  email? : String
  indirizzoSpedizione? : String
  numeroCivico?: String
  Cap? : number
}

class Specie {
  nomeScientifico?: string;
  nomeComune?: string;
  habitat?: string;
  dimensioneMedia?: number;
  dieta?: string;
  durataVita?: number;
}

class Ordine {
  id?: number = 0;
  prezzoTot?: number = 0;
  pesci?: Pesci[];
}
