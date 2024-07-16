import { motion } from "framer-motion"
import { boxesData } from './data/boxes'
import './style/App.css'

function App() {

  return (
    <div className='w-lvw h-lvh flex justify-center items-center bg-blue-300'>
      <div className='grid grid-cols-3 gap-2'>
        {
          boxesData.map(({ title, description }, index) => {
            return (
              <motion.div
                initial={{
                  opacity: 0,
                  translateX: index % 2 === 0 ? 150 : -150,
                  translateY: -150
                }}
                animate={{
                  opacity: 1,
                  translateX: 0,
                  translateY: 0
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.2
                }}
                key={index}
                className='bg-blue-700 rounded-md p-2 text-white'>
                <p className='text-lg font-bold'>
                  {title}
                </p>
                <p className='text-xs'>
                  {description}
                </p>
              </motion.div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
