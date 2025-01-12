import { motion } from 'motion/react'
import Card from '../../../common/Card'
const Movie = ({ data }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.3 } }}>
      <div className=' bg-black w-full px-[90px] pt-[150px] h-full text-white'>
        <h1 className='text-3xl mb-4'>Movie</h1>
        <div className='grid grid-cols-5  gap-10 '>
          {
            data.map(item => <Card item={item} />
            )}
        </div>
      </div>
    </motion.div>
  )
}

export default Movie