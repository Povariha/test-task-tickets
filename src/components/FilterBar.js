import './filterBar.css'
import { useContext, useState } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const FilterBar = () => {
    const { ticketStore } = useContext(Context)

    const [buttNum, setButtNum] = useState(0)

    function changeFilter(val) {
        setButtNum(val)
        switch (val) {
            case 1:
                ticketStore.setSortedTickets(ticketStore.tickets.slice().sort(function (t1, t2) {
                    return t1.price - t2.price;
                }));
                break;
            case 2:
                ticketStore.setSortedTickets(ticketStore.tickets.slice().sort(function (t1, t2) {
                    return (t1.segments[0].duration + t1.segments[1].duration) - (t2.segments[0].duration + t2.segments[1].duration);
                }));
                break;
            case 3:
                ticketStore.setSortedTickets(ticketStore.tickets.slice().sort(function (t1, t2) {
                    return (t1.price / (t1.segments[0].duration + t1.segments[1].duration)) - (t2.price / (t2.segments[0].duration + t2.segments[1].duration));
                }));
                break;
        }
    }

    return (
        <div className='filter-container'>
            <div className={buttNum === 1 ? 'filter-type-active' : 'filter-type'} onClick={() => changeFilter(1)}>САМЫЙ ДЕШЕВЫЙ</div>
            <div className={buttNum === 2 ? 'filter-type-active' : 'filter-type'} onClick={() => changeFilter(2)}>САМЫЙ БЫСТРЫЙ</div>
            <div className={buttNum === 3 ? 'filter-type-active' : 'filter-type'} onClick={() => changeFilter(3)}>ОПТИМАЛЬНЫЙ</div>
        </div>
    );
}

export default FilterBar;