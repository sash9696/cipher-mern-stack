
import './TechStackIconContainer.css';
import { motion } from 'framer-motion';


const iconVariants = (duration) => ({
    initial: {y:-10},
    animate:{
      y:[10,-10],
      transition:{
        duration:duration,
        ease:'linear',
        repeat:Infinity,
        repeatType:"reverse"
      }
    }
  })

export default function TechStackIconContainer(props){
console.log('props',props)
    return (
        <motion.div 

        variants={iconVariants(props.duration)}
        initial='initial'
        animate='animate'
        
        className='techstack_icons'>
        <img src={props.image} alt={props.altProperty} />
        <p>{props.title}</p>
    </motion.div>
    )
}


