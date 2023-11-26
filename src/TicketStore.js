import { makeAutoObservable } from "mobx";

export default class TicketStore {
    constructor() {
        this._tickets = [{
            price: 12500,
            segments: [
                {
                    origin: 'MOW',
                    destination: 'VVO',
                    date: '10:50 - 52:40',
                    stops: ['NOV'],
                    duration: 720
                },
                {
                    origin: 'VVO',
                    destination: 'MOW',
                    date: '10:50 - 52:40',
                    stops: ['HKT', 'NVO'],
                    duration: 450
                }
            ]
        },
        {
            price: 13500,
            segments: [
                {
                    origin: 'MOW',
                    destination: 'MOW',
                    date: '10:50 - 52:40',
                    stops: ['MOW'],
                    duration: 225
                },
                {
                    origin: 'MOW',
                    destination: 'MOW',
                    date: '10:50 - 52:40',
                    stops: [],
                    duration: 125
                }
            ]
        },
        {
            price: 22500,
            segments: [
                {
                    origin: 'MOW',
                    destination: 'MOW',
                    date: '10:50 - 52:40',
                    stops: [],
                    duration: 765
                },
                {
                    origin: 'MOW',
                    destination: 'MOW',
                    date: '10:50 - 52:40',
                    stops: [],
                    duration: 555
                }
            ]
        },
        {
            price: 1200,
            segments: [
                {
                    origin: 'MOW',
                    destination: 'MOW',
                    date: '10:50 - 52:40',
                    stops: ['MOW'],
                    duration: 410
                },
                {
                    origin: 'MOW',
                    destination: 'MOW',
                    date: '10:50 - 52:40',
                    stops: ['MOW', 'MOW'],
                    duration: 890
                }
            ]
        },
        {
            price: 1500,
            segments: [
                {
                    origin: 'MOW',
                    destination: 'MOW',
                    date: '8:50 - 22:40',
                    stops: ['MOW'],
                    duration: 325
                },
                {
                    origin: 'MOW',
                    destination: 'MOW',
                    date: '14:00 - 15:40',
                    stops: ['MOW'],
                    duration: 225
                }
            ]
        }
        ]
        this._sortedTickets = this._tickets
        this._chosenStops = [1, 2, 3, 4, 5]
        makeAutoObservable(this)
    }

    setTickets(tickets) {
        this._tickets = tickets
    }

    setSortedTickets(sortedTickets) {
        this._sortedTickets = sortedTickets
    }

    setChosenStops(chosenStops) {
        this._chosenStops = chosenStops
    }
    
    get sortedTickets() {
        return this._sortedTickets
    }

    get tickets() {
        return this._tickets
    }

    get chosenStops() {
        return this._chosenStops
    }
}