
import './TechStackIconContainer.css';



export default function TechStackIconContainer(props){
console.log('props',props)
    return (
        <div className='techstack_icons'>
        <img src={props.image} alt={props.altProperty} />
        <p>{props.title}</p>
    </div>
    )
}


