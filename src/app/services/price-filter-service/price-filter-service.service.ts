import { Injectable } from '@angular/core';
import { CurrencyMarks, CurrencyTypes, TabsModel } from '../../models/tabsModel';

@Injectable({
    providedIn: 'root',
})
export class PriceFilterServiceService {
    private usdToRub = 1 / 69.22;
    private eurToRub = 1 / 77.53;
    private tabsConfig: Array<TabsModel> = [
        {
            id: CurrencyTypes.rub,
            mark: CurrencyMarks.rub,
            text: 'РУБ',
            selected: true,
        },
        {
            id: CurrencyTypes.usd,
            mark: CurrencyMarks.usd,
            text: 'USD',
            selected: false,
        },
        {
            id: CurrencyTypes.eur,
            mark: CurrencyMarks.eur,
            text: 'EUR',
            selected: false,
        },
    ];

    constructor() {}

    public onConvertChange(id: string) {

    }
}
