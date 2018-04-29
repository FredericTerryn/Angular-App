

export class Teachers{
    private _teachersFirstName: string;
    private _dateAdded: Date = new Date();
    private _quotes = new Array<string>(); 

    constructor(teachersFirstName: string){
        this._teachersFirstName= teachersFirstName;
    }

    get teachersFirstName(): string{
        return this.teachersFirstName;
    }

    addQuote(inhoud: string){
        this._quotes.push(inhoud);
    }

}