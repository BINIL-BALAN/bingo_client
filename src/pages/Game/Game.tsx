import React from 'react'
import GameCard from './components/GameCard'
import PlayersList from './components/PlayersList'

function Game() {
  return (
    <div className="grid grid-cols-3 w-full h-full bg-slate-50">
      <div className='col-span-2 flex justify-center items-center p-5'>
       <GameCard />
      </div>
      <div className='flex justify-center items-center p-5'>
         <PlayersList />
      </div>
    </div>
  )
}

export default Game
