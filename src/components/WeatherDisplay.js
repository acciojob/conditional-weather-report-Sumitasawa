import React from 'react'

const WeatherDisplay = ({weather}) => {

    const {temperature,conditions}=weather;

    const tempstyle={
        color:temperature>20? "red" : "blue"

    };
  return (
    <div>
       <p>
        Temperature: <span style={tempstyle}>{temperature}°C</span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  )
}

export default WeatherDisplay
