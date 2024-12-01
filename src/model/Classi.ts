export interface Pesce {
  id?: number;
  prezzo?: number;
  specie? : Specie;
  eta? : number;
  sesso? : "Maschio" | "Femmina";
  dimensioni?: string;
  immagine ?: string;
}

export class Cliente {
  id?: number = 0;
  nome?: String;
  cognome?: String;
  email?: String;
  indirizzoSpedizione?: String;
  numeroCivico?: String;
  Cap?: number;
}

export class Specie {
  nomeScientifico?: string;
  nomeComune?: string;
  habitat?: string;
  dimensioneMedia?: string;
  dieta?: string;
  durataVita?: string;
}

export class Ordine {
  id?: number = 0;
  prezzoTot?: number = 0;
  pesci?: Pesce[];
}
