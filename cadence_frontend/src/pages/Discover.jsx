import React from 'react';
import { genres } from '../assets/constants';
import SongCard from '../Components/SongCard';

function Discover() {
    console.log(genres);
  return (
    <div className='flex flex-col'>
        <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
            <h2 className='font-bold text-3xl text-white text-left'>Discover</h2>
            <select className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'
                onChange={() => {}}
                value=" "
            >
                {genres.map((genre) => <option key={genre.value} value={genre.value}>
                    {genre.title}
                </option>)}
            </select>
        </div>

        <div className='flex flex-wrap sm:justify-start justofy-center gap-8'>
            {[1,2,3,4,5,6,7,8,9,10].map((song, id)=>(
                <SongCard key={song.key} song={song} id={id}/>
            ))}

        </div>
    </div>
  )
}

export default Discover
