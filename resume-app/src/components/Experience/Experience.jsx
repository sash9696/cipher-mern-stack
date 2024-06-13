
import './Experience.css';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import c from '../../assets/c.png';
import js from '../../assets/js.png';
import css from '../../assets/css.png';


export default function Experience(){

    const statements = [
        "1.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus provident, nemo nihil ut repellendus ipsa dignissimos perferendis fuga non vero neque nisi deserunt dolore, sunt asperiores voluptatibus delectus assumenda. Quibusdam? ",
        "2.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus provident, nemo nihil ut repellendus ipsa dignissimos perferendis fuga non vero neque nisi deserunt dolore, sunt asperiores voluptatibus delectus assumenda. Quibusdam? ",
        "3.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus provident, nemo nihil ut repellendus ipsa dignissimos perferendis fuga non vero neque nisi deserunt dolore, sunt asperiores voluptatibus delectus assumenda. Quibusdam? ",
        "4.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus provident, nemo nihil ut repellendus ipsa dignissimos perferendis fuga non vero neque nisi deserunt dolore, sunt asperiores voluptatibus delectus assumenda. Quibusdam? ",
        "5.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus provident, nemo nihil ut repellendus ipsa dignissimos perferendis fuga non vero neque nisi deserunt dolore, sunt asperiores voluptatibus delectus assumenda. Quibusdam? ",
    ];


    const iconImages = [js, c, css];

    return (
        <div className='experience_container'> 

            <p className='experience_title'>Experience</p>

            <div className='experience_cards_container'>

                <ExperienceCard
                    companyName = "ABC Pvt Ltd"
                    designation = 'SDE 2'
                    statements={statements}
                    iconImages={iconImages}
                
                />

                    <ExperienceCard
                    companyName = "XYZ Pvt Ltd"
                    designation = 'SDE 1'
                    statements={statements}
                    iconImages={iconImages}
                
                />
                   <ExperienceCard
                    companyName = "EFG Pvt Ltd"
                    designation = 'SDE 1'
                    statements={statements}
                    iconImages={iconImages}
                
                />
            </div>
        </div>
    )
}