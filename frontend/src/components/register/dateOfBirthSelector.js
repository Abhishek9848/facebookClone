import React from 'react'

export default function DateOfBirthSelector({ bDay, bMonth, bYear, handleRegisterChange, days, months, years, dateError }) {
  return (
      <div className='reg_grid'>
          <select name="bDay" value={bDay} onChange={handleRegisterChange}>
              {days.map((d, i) => <option value={d} key={i}>{d}</option>)}
          </select>
          <select name="bMonth" value={bMonth} onChange={handleRegisterChange}>
              {months.map((d, i) => <option value={d} key={i}>{d}</option>)}
          </select>
          <select name="bYear" value={bYear} onChange={handleRegisterChange}>
              {years.map((d, i) => <option value={d} key={i}>{d}</option>)}
          </select>
        {dateError && (<div className='input_error'>{dateError}</div>) }
      </div>
      
  )
}
