export interface TabsModel {
    id: CurrencyTypes;
    mark: CurrencyMarks;
    text: string;
    selected: boolean;
}

export enum CurrencyTypes {
    rub = 'rub',
    usd = 'usd',
    eur = 'eur',
}

export enum CurrencyMarks {
    rub = '₽',
    usd = '$',
    eur = '€',
}
