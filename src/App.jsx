import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ScApp } from './app.styled';
import CustomerCard from './components/CustomerCard';
import ReservationCard from './components/ReservationCard';
import { addReservation } from './features/reservationSlice';

const App = () => {
  const [addName, setAddName] = useState("");

  const reservations = useSelector(state => state.reservationStr.value);
  // const customers = useSelector(state => state.customerStr.value);

  const dispatch = useDispatch();

  const handleAddName = (ev) => {
  ev.preventDefault();

  if(!addName) return;
  dispatch(addReservation(addName));
  setAddName("");
  }

  return (
    <ScApp>
      
      <div className="left">
        <div className="inputContainer">
          <h3>Add Guests' name</h3>
          <form onSubmit={handleAddName}>
          <input type="text" placeholder="Guest Name..." value={addName} onChange={(ev)=>setAddName(ev.target.value)}/>
          <button type="submit">Add Name</button>
          </form>
        </div>
        <div className="reservationContainer">
          <h3>Reservations</h3>
          {reservations.map((name, index) => (
              <ReservationCard key={index} name={name} index={index}/>
          ))}
        
        </div>
      </div>
      <div className="right">
        <CustomerCard />
      </div>
    </ScApp>
  )
}

export default App