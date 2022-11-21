export class Comunity {

        _id?: number;
        calle: string;
        coordenadas:string;
        cp: string;
        ng:number;
    constructor(calle:string, cp:string, ng:number, coordenadas:string){
        this.calle = calle;
        this.cp = cp;
        this.ng = ng;
        this.coordenadas = coordenadas;
    }
}