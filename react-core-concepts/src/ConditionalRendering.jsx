import React from 'react'


function Item({itemName,isPacked}){

    // if(isPacked){
    //     return <li className='item'>{itemName} ✓ </li>
    // }

    if(isPacked){
        return null;
    }

    return  <li className='item'>{itemName} </li>

}

function ListItems(){

    return(
        <section>

            <h1>Items to be packed</h1>

            <ul>
                <Item itemName = 'Food' isPacked={true} />
                <Item itemName = 'photographs' isPacked={true} />
                <Item itemName = 'helmet'  isPacked={false}/>

            </ul>
        </section>
    )
}


function ConditionalRendering() {
  return (
    <div>
       <h1>Conditional Rendering</h1> 
        <ListItems/>
        </div>
  )
}

export default ConditionalRendering