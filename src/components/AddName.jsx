import React from 'react'
import styled from 'styled-components'

const ScAddName = styled.div`
margin: 1rem 0;
h3{
        margin-bottom: 1rem;
    }

    form{
        padding: 0;
        margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.6;
        
    input{  
        height: 30px;
        font-size: 16px;
        padding-left: 1rem;
        width: inherit;
        &:focus{
            outline: none;
        }
    }

    button{
        margin: 1rem 0;
        height: 30px;
        width: 100%;
        cursor: pointer;
        font-size: 16px;

    }
    }

    
`

const AddName = ({addName, setAddName, handleAddName}) => {
  return (
    <ScAddName>
          <h3>Add Guests' name</h3>
          <form onSubmit={handleAddName}>
          <input type="text" placeholder="Not Karen..." value={addName} onChange={(ev)=>setAddName(ev.target.value)}/>
          <button type="submit">Add Name</button>
          </form>
    </ScAddName>
  )
}

export default AddName