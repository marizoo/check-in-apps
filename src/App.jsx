import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ScApp } from './app.styled';
import AddName from './components/AddName';
import CustomerCard from './components/CustomerCard';
import ReservationCard from './components/ReservationCard';
import { addReservation } from './features/reservationSlice';

const App = () => {
  const [addName, setAddName] = useState("");

  const reservations = useSelector(state => state.reservationStr.value);
  const customers = useSelector(state => state.customerStr.value);

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
       <AddName addName={addName} setAddName={setAddName} handleAddName={handleAddName}/>
        <div className="reservationContainer">
          <h3>Reservations</h3>
          {reservations.map((name, index) => (
              <ReservationCard key={index} name={name} index={index}/>
          ))}
        
        </div>
      </div>
      <div className="line"></div>
      <div className="right">
      <h3>Customers:</h3>
        {customers.map(customer => (
        <CustomerCard key={customer.id} id={customer.id} name={customer.name} foods={customer.food} />
        ))}
      </div>
    </ScApp>
  )
}

export default App