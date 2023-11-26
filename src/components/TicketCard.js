import './ticketCard.css'
import s7Logo from '../pics/S7 Logo.svg'
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../index';


const TicketCard = observer(({ price, segment1info, segment2info }) => {

    const { ticketStore } = useContext(Context)

    if (ticketStore.chosenStops && !ticketStore.chosenStops.includes(segment1info.stops.length + segment2info.stops.length)) {
        return <></>
    }

    return (
        <div className='ticket-container'>
            <div className='ticket-header'>
                <h1 className='ticket-price'>{Math.ceil(price / 1000 - 1)} {(price % 1000)}</h1>
                <img src={s7Logo} className='ticket-img' />
            </div>
            <div className='ticket-info'>
                <div className='ticket-flight'>
                    <div className='flight-info'>
                        <p className='flight-top'>{segment1info.origin} - {segment1info.destination}</p>
                        <p className='flight-bottom'>{segment1info.date}</p>
                    </div>
                    <div className='flight-info'>
                        <p className='flight-top'>В ПУТИ</p>
                        <p className='flight-bottom'>{Math.ceil(segment1info.duration / 60)}ч {segment1info.duration % 60}м</p>
                    </div>
                    <div className='flight-info'>
                        <p className='flight-top'>{segment1info.stops.length === 0
                            ? "НЕТ ПЕРЕСАДОК"
                            : segment1info.stops.length === 1
                                ? "1 ПЕРЕСАДКА"
                                : segment1info.stops.length + "ПЕРЕСАДКИ"}</p>
                        <p className='flight-bottom'>{segment1info.stops.join(', ')}</p>
                    </div>
                </div>
                <div className='ticket-flight'>
                    <div className='flight-info'>
                        <p className='flight-top'>{segment2info.origin} - {segment2info.destination}</p>
                        <p className='flight-bottom'>{segment2info.date}</p>
                    </div>
                    <div className='flight-info'>
                        <p className='flight-top'>В ПУТИ</p>
                        <p className='flight-bottom'>{Math.ceil(segment2info.duration / 60)}ч {segment2info.duration % 60}м</p>
                    </div>
                    <div className='flight-info'>
                        <p className='flight-top'>{segment2info.stops.length === 0
                            ? "НЕТ ПЕРЕСАДОК"
                            : segment2info.stops.length === 1
                                ? "1 ПЕРЕСАДКА"
                                : segment2info.stops.length + "ПЕРЕСАДКИ"}</p>
                        <p className='flight-bottom'>{segment2info.stops.join(', ')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default TicketCard;