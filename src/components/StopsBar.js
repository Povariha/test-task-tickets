import { useContext, useState } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import './stopsBar.css'

const StopsBar = observer(() => {
    const { ticketStore } = useContext(Context)

    const [ allStops, setAll] = useState(true)
    const [ noStops, setNoStops] = useState(true)
    const [ oneStop, setOneStop] = useState(true)
    const [ twoStops, setTwoStops] = useState(true)
    const [ threeStops, setThreeStops] = useState(true)

    let arr = ticketStore.chosenStops

    function chosenAll() {
        if (allStops) {
            setAll(false)
            setNoStops(false)
            setOneStop(false)
            setTwoStops(false)
            setThreeStops(false)
            arr = []
            ticketStore.setChosenStops(arr)
        } else if (!allStops) {
            setAll(true)
            setNoStops(true)
            setOneStop(true)
            setTwoStops(true)
            setThreeStops(true)
            arr = [0, 1, 2, 3]
            ticketStore.setChosenStops(arr)
        }
        return
    }

    function chosenNone() {
        if (noStops) {
            arr.splice(arr.indexOf(0), 1)
            ticketStore.setChosenStops(arr)
            setNoStops(false)
        } else if (!noStops) {
            arr.push(0)
            ticketStore.setChosenStops(arr)
            setNoStops(true)
        }
        return
    }

    function chosenOne() {
        if (oneStop) {
            arr.splice(arr.indexOf(1), 1)
            ticketStore.setChosenStops(arr)
            setOneStop(false)
        } else if (!oneStop) {
            arr.push(1)
            ticketStore.setChosenStops(arr)
            setOneStop(true)
        }
        return
    }

    function chosenTwo() {
        if (twoStops) {
            arr.splice(arr.indexOf(2), 1)
            ticketStore.setChosenStops(arr)
            setTwoStops(false)
        } else if (!twoStops) {
            arr.push(2)
            ticketStore.setChosenStops(arr)
            setTwoStops(true)
        }
        return
    }

    function chosenThree() {
        if (threeStops) {
            arr.splice(arr.indexOf(3), 1)
            ticketStore.setChosenStops(arr)
            setThreeStops(false)
        } else if (!threeStops) {
            arr.push(3)
            ticketStore.setChosenStops(arr)
            setThreeStops(true)
        }
        return
    }

    return (
        <div className='stops-container'>
            <p className='stops-text'>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
            <label className='checkbox-text' ><input type='checkbox' className='stops-checkbox' checked={allStops} onChange={(() => chosenAll())}/><span className='custom-checkbox'/>Все</label>
            <label className='checkbox-text' ><input type='checkbox' className='stops-checkbox' checked={noStops} onChange={(() => chosenNone())}/><span className='custom-checkbox'/>Без пересадок</label>
            <label className='checkbox-text' ><input type='checkbox' className='stops-checkbox' checked={oneStop} onChange={(() => chosenOne())}/><span className='custom-checkbox'/>1 пересадка</label>
            <label className='checkbox-text' ><input type='checkbox' className='stops-checkbox' checked={twoStops} onChange={(() => chosenTwo())}/><span className='custom-checkbox'/>2 пересадки</label>
            <label className='checkbox-text-last' ><input type='checkbox' className='stops-checkbox' checked={threeStops} onChange={(() => chosenThree())}/><span className='custom-checkbox'/>3 пересадки</label>
        </div>
    );
})

export default StopsBar;