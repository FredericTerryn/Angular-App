export class Quotes {
    private _naam: string;
    private _dateAdded: Date = new Date();
    private _quotes =  new Array<string>();

    constructor(naam :string){
        this._naam = naam;
    }

    get inhoud() : string {
        return this._naam;
    }

    addQuote(inhoud: string, lector?: string, school?: string){
        this._quotes.push(`${lector || ""} ${school || ""} ${inhoud}`);
    }
}