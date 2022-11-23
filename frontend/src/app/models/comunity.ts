export class Comunity {

        _id?: number;
        calle: string;
        coordenadas:string;
        cp: string;
        ng:string;
    constructor(calle:string, cp:string, ng:string, coordenadas:string){
        this.calle = calle;
        this.cp = cp;
        this.ng = ng;
        this.coordenadas = coordenadas;
    }
}