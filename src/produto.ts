import {fabricante} from "./fabricante";

export class produto{
    id: number;
    nome: string;
    preco: number;
    fabricante: fabricante;

    constructor(nome: string, preco: number, fabricante: fabricante, id: number){
        this.nome = nome;
        this.preco = preco;
        this.fabricante = fabricante;
        this.id = id;
    }
}