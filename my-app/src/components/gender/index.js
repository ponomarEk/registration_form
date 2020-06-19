import React from 'react';
import './style.css'

const genders = [
    {
      id: 1,
      name: "Male"
    },
    {
      id: 2,
      name: "Female"
    }
  ];

function Gender(){

    const options = genders.map( curr => <option key = {curr.id}  > { curr.name } </option> )

    return(
        <div className = 'gender'>
          <label>
            Gender
            <select className = 'select'>
                { options }
            </select>
          </label>
        </div>
    )
}

export default Gender;