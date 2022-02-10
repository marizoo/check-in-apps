import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { removeReservation } from '../features/reservationSlice'
import {addCustomer} from '../features/customerSlice'
import {v4 as uuid} from "uuid"
import {BsArrowRightCircle, BsTrash} from 'react-icons/bs'

const ScReservationCard = styled.div`
margin: 1rem 0;
padding: 4px;
border: 1px solid black;
border-radius: 10px;
min-width: 200px;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 18px;

  .iconStyle {
    margin: 0 10px;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover{
      color: orange;
    }
  }
`


const ReservationCard = ({name, index}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeReservation(index));
  }

  const handleCustomer = () => {
    dispatch(removeReservation(index));
    dispatch(addCustomer({
      id: uuid(),
      name: name,
      food:[],
    }))
  }

  return (
    <ScReservationCard >
        <span className='iconStyle' onClick={handleRemove}>
            <BsTrash/>
        </span>
        <p>{name}</p>
        <span className='iconStyle' onClick={handleCustomer}>
            <BsArrowRightCircle />
        </span>
    </ScReservationCard>
  )
}

export default ReservationCard