import TicketCard from './components/TicketCard';
import StopsBar from './components/StopsBar';
import FilterBar from './components/FilterBar';
import RefreshButton from './components/RefreshButton';
import { observer } from 'mobx-react-lite';
import { Context } from './index';

import topLogo from './pics/top Logo.svg'
import './App.css';
import './reset.css'
import { useContext } from 'react';

const App = observer(() => {
  const { ticketStore } = useContext(Context)

  return (
    <div className="main-container">
      <img src={topLogo} className='top-logo' />
      <div className='info-container'>
        <StopsBar />
        <div className='filter-ticket'>
          <FilterBar />
          { ticketStore.sortedTickets.map(ticketInfo => 
          <TicketCard price={ticketInfo.price} segment1info={ticketInfo.segments[0]} segment2info={ticketInfo.segments[1]}/>
          )}
          <RefreshButton />
        </div>
      </div>
    </div>
  );
})

export default App;
