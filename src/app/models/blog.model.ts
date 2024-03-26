export interface Blog {
  identifiant: number;
  nom: string;
  idAuteur: number,
  idArticles: number[],
  droitAcces: number[]
}
