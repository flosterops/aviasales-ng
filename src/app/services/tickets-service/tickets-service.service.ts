import { Injectable } from '@angular/core';
import { CardModel } from '../../models/cardModel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TicketsServiceService {
    constructor() {
        const modifiedTickets = this.tickets.value.map((ticket) => ({ ...ticket, visible: true }));
        this.tickets.next(modifiedTickets);
    }

    public tickets: BehaviorSubject<Array<CardModel>> = new BehaviorSubject<Array<CardModel>>([
        {
            id: 'c2ae513c-b0ee-484a-94d6-96d6632bcdce',
            origin: 'VVO',
            origin_name: 'Владивосток',
            destination: 'TLV',
            destination_name: 'Тель-Авив',
            departure_date: '12.05.18',
            departure_time: '16:20',
            arrival_date: '12.05.18',
            arrival_time: '22:10',
            carrier: 'TK',
            stops: 3,
            price: 12400,
            visible: true,
            bucket: false,
        },
        {
            id: '927ec98b-2603-4d60-b54a-00e0f76f13e1',
            origin: 'VVO',
            origin_name: 'Владивосток',
            destination: 'TLV',
            destination_name: 'Тель-Авив',
            departure_date: '12.05.18',
            departure_time: '17:20',
            arrival_date: '12.05.18',
            arrival_time: '23:50',
            carrier: 'S7',
            stops: 1,
            price: 13100,
            visible: true,
            bucket: false,
        },
        {
            id: 'ecef80fd-663f-4818-82d3-8301742d75ac',
            origin: 'VVO',
            origin_name: 'Владивосток',
            destination: 'TLV',
            destination_name: 'Тель-Авив',
            departure_date: '12.05.18',
            departure_time: '12:10',
            arrival_date: '12.05.18',
            arrival_time: '18:10',
            carrier: 'SU',
            stops: 0,
            price: 15300,
            visible: true,
            bucket: false,
        },
        {
            id: 'f66e36d0-ddae-425a-bef8-da7bb47c1979',
            origin: 'VVO',
            origin_name: 'Владивосток',
            destination: 'TLV',
            destination_name: 'Тель-Авив',
            departure_date: '12.05.18',
            departure_time: '17:00',
            arrival_date: '12.05.18',
            arrival_time: '23:30',
            carrier: 'TK',
            stops: 2,
            price: 11000,
            visible: true,
            bucket: false,
        },
        {
            id: '2a28ecd9-372e-43d1-94c4-711f9cad2b3f',
            origin: 'VVO',
            origin_name: 'Владивосток',
            destination: 'TLV',
            destination_name: 'Тель-Авив',
            departure_date: '12.05.18',
            departure_time: '12:10',
            arrival_date: '12.05.18',
            arrival_time: '20:15',
            carrier: 'BA',
            stops: 3,
            price: 13400,
            visible: true,
            bucket: false,
        },
        {
            id: '83a4f50b-131c-47d3-84a8-1ce17e85cab2',
            origin: 'VVO',
            origin_name: 'Владивосток',
            destination: 'TLV',
            destination_name: 'Тель-Авив',
            departure_date: '12.05.18',
            departure_time: '9:40',
            arrival_date: '12.05.18',
            arrival_time: '19:25',
            carrier: 'SU',
            stops: 3,
            price: 12450,
            visible: true,
            bucket: false,
        },
        {
            id: 'd1730a9c-5670-45ef-8c2a-ea5efa605744',
            origin: 'VVO',
            origin_name: 'Владивосток',
            destination: 'TLV',
            destination_name: 'Тель-Авив',
            departure_date: '12.05.18',
            departure_time: '17:10',
            arrival_date: '12.05.18',
            arrival_time: '23:45',
            carrier: 'TK',
            stops: 1,
            price: 13600,
            visible: true,
            bucket: false,
        },
        {
            id: 'e4b59592-b547-4c50-b319-909f584e1ea8',
            origin: 'VVO',
            origin_name: 'Владивосток',
            destination: 'TLV',
            destination_name: 'Тель-Авив',
            departure_date: '12.05.18',
            departure_time: '6:10',
            arrival_date: '12.05.18',
            arrival_time: '15:25',
            carrier: 'TK',
            stops: 0,
            price: 14250,
            visible: true,
            bucket: false,
        },
        {
            id: 'a203406a-9edb-46a9-a762-43cff220f3d3',
            origin: 'VVO',
            origin_name: 'Владивосток',
            destination: 'TLV',
            destination_name: 'Тель-Авив',
            departure_date: '12.05.18',
            departure_time: '16:50',
            arrival_date: '12.05.18',
            arrival_time: '23:35',
            carrier: 'SU',
            stops: 1,
            price: 16700,
            visible: true,
            bucket: false,
        },
        {
            id: '1a112a51-dc78-4d88-a3a7-499ffc32db0d',
            origin: 'VVO',
            origin_name: 'Владивосток',
            destination: 'TLV',
            destination_name: 'Тель-Авив',
            departure_date: '12.05.18',
            departure_time: '6:10',
            arrival_date: '12.05.18',
            arrival_time: '16:15',
            carrier: 'S7',
            stops: 0,
            price: 17400,
            visible: true,
            bucket: false,
        },
    ]);

    public ticket: BehaviorSubject<CardModel> = new BehaviorSubject<CardModel>({} as CardModel);

    public applyFilters(filterValues: Set<number>) {
        const filteredTickets = this.tickets.value.map((ticket) => ({ ...ticket, visible: filterValues.has(ticket.stops) }));
        this.tickets.next(filteredTickets);
    }

    public addToBucket(id: string): void {
        const changedTickets = this.tickets.value.map((ticket) => {
            if (ticket.id === id) {
                return { ...ticket, bucket: true };
            } else {
                return ticket;
            }
        });
        this.tickets.next(changedTickets);
    }

    public removeFromBucket(id: string): void {
        const changedTickets = this.tickets.value.map((ticket) => {
            if (ticket.id === id) {
                return { ...ticket, bucket: false };
            } else {
                return ticket;
            }
        });
        this.tickets.next(changedTickets);
    }

    public findTicketById(id: string): void {
        const foundedTicket = this.tickets.value.find((ticket) => ticket.id === id);
        this.ticket.next(foundedTicket);
    }
}
