import React from 'react'

const GenresItem = ({ data }) => {
    return (
        <div className='flex'>
            {data.genres?.map(item => <div className='bg-zinc-700 text-white/60 rounded-md p-1 ml-0 m-5'>{item.name}</div>)}
        </div>
    )
}

export default GenresItem