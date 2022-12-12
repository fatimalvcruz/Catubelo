export class Comunity {
        _id?: number;
        calle: string;
        cp: string;
        ng:number;
    constructor(calle:string, cp:string, ng:number){
        this.calle = calle;
        this.cp = cp;
        this.ng = ng;
    }
}