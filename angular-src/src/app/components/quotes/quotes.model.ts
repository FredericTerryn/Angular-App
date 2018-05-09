export class Quotes {
    private id: string;
    private inhoud: string; 
    private leerKrachtnaam: string;
    private school: string;
    private __v: number;

    constructor(inhoud :string, leerkracht :string, school:string){
        this.inhoud = inhoud;
        this.leerKrachtnaam = leerkracht;
        this.school = school;
    }

    get deInhoud() : string {
        return this.inhoud;
    }

}