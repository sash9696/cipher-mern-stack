
import './HomePage.css';
import githubIcon from  '../../assets/github.png';

function HomePage(){

    return (
        <div className='homepage_container'>
           
           <div className='homepage_left'>
                <p className='homepage_left_h1'>
                        <span className='red_color'>Hi,</span> my name is
                </p>

                <p className='homepage_left_h2'>
                    Sahil Chopra
                </p>

                <p className='homepage_left_h3'>
                    Developer at <span className='red_color'>ABC Pvt Ltd</span>
                </p>

                <p className='homepage_left_description'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia ullam delectus dolor. At dicta molestiae expedita alias architecto sapiente praesentium eius, ad eos fugiat consectetur, incidunt dolores nam quae tempore.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto culpa odio labore, earum ipsum, modi eos soluta assumenda maxime itaque quibusdam dolorum dolore non distinctio alias corporis amet accusamus quisquam?
                </p>

                <div>
                    <a href='#' target='_blank'>
                        <img 
                            src={githubIcon}
                            alt='githubIconImage'
                            className='homepage_logo'
                        />
                    </a>
                    <a href='#' target='_blank'>
                        <img 
                            src={githubIcon}
                            alt='githubIconImage'
                            className='homepage_logo'
                        />
                    </a>
                </div>

                <a href='mailto:abc@gmail.com'>
                    <buton className='homepage_left_button'>Get in Touch</buton>
                </a>
           </div>

           <div className='homepage_right'>
                <img src='https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif' alt='GIF' />
           </div>
        </div>
    )
}

export default HomePage;