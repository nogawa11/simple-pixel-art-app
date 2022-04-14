import React from 'react'
import paintData from './paintData.js'

export default function Colors() {
  const [color, setColor] = React.useState();
  const [squares, setSquares] = React.useState(paintData)

  const squareElements = squares.map(square => (
    <div className={"box " + square.backgroundColor} key={square.id} id={square.id} onClick={() => paintBox(square.id)}>
    </div>
  ))

  function handleClick(event) {
    event.preventDefault();
    setColor(event.target.className);
  }

  function paintBox(id) {
    console.log(color);
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? {...square, backgroundColor: color} : square;
      })
    })
  }

  return (
    <div>
      <div className="paint--color">
        <h5>Current Color:</h5>
        <button className={color ? color : 'paint--white'}></button>
      </div>
      <div className="paints">
        <button className="paint--red" onClick={handleClick}></button>
        <button className="paint--red-orange" onClick={handleClick}></button>
        <button className="paint--orange" onClick={handleClick}></button>
        <button className="paint--yellow-orange" onClick={handleClick}></button>
        <button className="paint--yellow" onClick={handleClick}></button>
        <button className="paint--yellow-green" onClick={handleClick}></button>
        <button className="paint--green" onClick={handleClick}></button>
        <button className="paint--green-blue" onClick={handleClick}></button>
        <button className="paint--blue" onClick={handleClick}></button>
        <button className="paint--blue-purple" onClick={handleClick}></button>
        <button className="paint--purple-pink" onClick={handleClick}></button>
        <button className="paint--pink" onClick={handleClick}></button>
        <button className="paint--pink-red" onClick={handleClick}></button>
        <button className="paint--tan" onClick={handleClick}></button>
        <button className="paint--brown" onClick={handleClick}></button>
        <button className="paint--white" onClick={handleClick}></button>
        <button className="paint--gray" onClick={handleClick}></button>
        <button className="paint--black" onClick={handleClick}></button>
      </div>
      <div className="boxes">
        {squareElements}
      </div>
    </div>
  )
}
