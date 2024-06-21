import React, { useState } from 'react'

// function Counter(){

//     const [number , setNumber] = useState(0);

//     console.log(`Counter rendered`)
//     return (
//         <>
//             <h1>Number:{number} </h1>

//             <button onClick={() => {
//                 // setNumber(number + 1);
//                 // setNumber(number + 1);
//                 // setNumber(number + 1);

//                 // setNumber((prevNumber) => prevNumber + 1);
//                 // setNumber((prevNumber) => prevNumber + 1);
//                 // setNumber((prevNumber) => prevNumber + 1);
//                 //take the updated value of the state and then procedd
//                 //it will get the updated state and then move forward


//                 // setNumber(number + 5);
//                 // setNumber((n) => n + 1);


//                 // //queue fifo basis
//                 // //[number + 5,  (n) => n + 1]

//                 setNumber(number + 5);
//                 setNumber((n) => n + 1);
//                 setNumber(50);


//                 //queue fifo basis
//                 //[number + 5,  (n) => n + 1, 50]

//             }}  >
//                 Add 3
//             </button>
//         </>
//     )
// }


//Assignment

function delay(ms){
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
};

function PendingCounter(){


    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);


    //older not working properly
    // async function handleClick(){

    //     setPending(pending + 1);
    //     //order is in the pending stage
    //     await delay(4000);
    //     setPending(pending - 1);
    //     //pending minus 1
    //     setCompleted(completed + 1);
    //     //completed plus 1

    // }


    async function handleClick(){

        setPending((pending) => pending + 1);
        //order is in the pending stage
        await delay(4000);
        setPending((pending) => pending - 1);
        //pending minus 1
        setCompleted((completed) => completed + 1);
        //completed plus 1

    }

    return (
        <>
                <h1>Pending: {pending}</h1>
                <h1>Completed: {completed}</h1>
                <button onClick={handleClick} >Order</button>
        </>
    )
}

function State() {
  return (
    <div>
        {/* <Counter/> */}
        <PendingCounter/>
    </div>
  )
}

export default State