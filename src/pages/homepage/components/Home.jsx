import top10 from "../../../assets/icons/top10.svg"
import { motion } from "motion/react"
const Home = ({ backgroundItem }) => {
  return (
    
      backgroundItem &&
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.3 } }}> <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${backgroundItem.backdrop_path})` }} className='bg-black w-full h-screen bg-cover flex items-center bg-black/50 bg-blend-overlay bg-no-repeat bg-center'>
        <div className='text-white w-[400px] ml-[90px]  '>
          <h2 className='text-7xl mb-[33px]'>{backgroundItem.title}</h2>
          <div className='flex items-center gap-2 mb-[33  px]'>
            <img className='size-[44px]' src={top10} alt="" />
            <h3 className='text-[33px] font-bold'>#1 in TV Shows Today</h3>
          </div>
          <p>{backgroundItem.overview.substring(0, 150)}...</p>
          <div className='flex items-center gap-5 mt-[33px] '>
            <button className='bg-white gap-1 px-[30px] flex items-center font-bold py-[10px] text-black border rounded-[5px] '>
              <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#000000" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" /></svg>
              Play</button>
            <button className='bg-[#515451] gap-1 px-[30px] flex font-bold py-[11px] text-white border-black rounded-[5px]'>
              <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
              More Info</button>
          </div>
        </div>
        <div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home