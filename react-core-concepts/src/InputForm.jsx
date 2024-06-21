import React, { useState } from "react";

function InputForm() {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("typing");
  const [error, setError] = useState(null);


  if(status === 'success'){
    return <h1>Correct Answer</h1>
  }


  function handleTextAreaChange(e) {
    setAnswer(e.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');

    try {
        await submitForm(answer);
        setStatus('success');

        
    } catch (err) {
        setError(err);
        setStatus('typing');

    }

    //submit the network
    //imitiating
  }

  return (
    <div>
      <h1>Quiz</h1>
      <p>Which country won the last worldcup.</p>

      <form onSubmit={handleSubmit}>
        <textarea
            disabled={status === 'submitting'}
        value={answer} onChange={handleTextAreaChange} />
        <br />
        <button 
            disabled={
                answer.length === 0 || status === 'submitting'
            }
        >Submit</button>

        { error !== null && (
             <p className="error">{error.message}</p>

        )}
      </form>
    </div>
  );
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "india";

      if (shouldError) {
        reject(new Error("Wrong answer. Please try again"));
      } else {
        resolve();
      }
    }, 2000);
  });
}

export default InputForm;
