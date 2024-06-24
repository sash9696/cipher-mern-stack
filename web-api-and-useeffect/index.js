// var msg = new SpeechSynthesisUtterance();

// console.log(msg)
// // msg.text = "Text To Speech is when we give the computer some words and the computer will say this words out loud in some robotic/human voice";


// // msg.volume = 0.2;
// msg.rate = 1; // From 0.1 to 10
// msg.pitch = 2; // From 0 to 2
// // msg.text = "Como estas Joel";
// // msg.lang = 'es';

// const voices = speechSynthesis.getVoices();

// console.log('voices',voices)


// window.speechSynthesis.speak(msg);

// console.log(window.speechSynthesis);


/* global Peer */


function getLocalStream() {
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        window.localStream = stream;
        window.localAudio.srcObject = stream;
        window.localAudio.autoplay = true;
      })
      .catch((err) => {
        console.error(`you got an error: ${err}`);
      });
  }
  
  getLocalStream();
  