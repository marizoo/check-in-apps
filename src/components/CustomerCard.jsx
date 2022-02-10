import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addFoodToCustomer } from '../features/customerSlice'
import styled from 'styled-components'
import {MdAddCircleOutline} from 'react-icons/md'

const ScCustomerCard = styled.div`
display: flex;
flex-direction: column;
align-items:center;
margin: 1rem 0;
padding: 1rem;
border: 1px solid rgb(0 0 0 / 30%);
width: 280px;
border-radius: 10px;

.custoCardTop{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  .custoCardTitle{
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 18px;
  }

  .addFoodForm{
    background: #eeeeee;
    border-radius: 5px;
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 0.6rem;


    .addFoodInput{
      flex: 11;
      border: 0;
      background:0;
      height: 30px;
      padding-left: 10px;
      font-size: 16px;

      &:focus{
        outline: none;
      }
    }

    .addFoodIcon{
      flex: 1;
      font-size: 22px;
      cursor: pointer;
    }
  }

  .customerFood{

    .foodBtn{
      padding: 1px 3px;
      margin: 4px;
      flex-wrap:wrap;
      font-size: 14px;
      cursor: pointer;
    }

    .lineStrike{
      text-decoration: line-through;
    }
  }
  
}
`

const CustomerCard = ({id, name, foods}) => {
  const [addFood, setAddFood] = useState();
  const dispatch = useDispatch();

  const clickAddFood = () => {
    handleAddFood();
  }

  const handleAddFood = (ev) => {
    ev.preventDefault();

    if(!addFood) return;
    dispatch(addFoodToCustomer({
      id,
      food: addFood,
    }));
    setAddFood("");
  }

  const handleClickBtn = (clickedIndex) => {
    console.log(foods[clickedIndex]);
  }



  return (
    <ScCustomerCard>
      <div className="custoCardTop">
      <h2 className='custoCardTitle'>{name}</h2>
        <form className="addFoodForm" onSubmit={handleAddFood}>
          <input placeholder='add food..' className='addFoodInput' type="text" value={addFood} onChange={(ev) => setAddFood(ev.target.value)}/>
          <span className='addFoodIcon' onClick={clickAddFood}><MdAddCircleOutline /></span>
        </form>
        <div className="customerFood">
          {foods.map((food, index)=> (
            <button key={index} onClick={()=>handleClickBtn(index)} className='foodBtn'>{food}</button>
          ))}
        </div>
      </div>
        
     
    </ScCustomerCard>
  )
}

export default CustomerCard