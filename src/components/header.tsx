import { Typewriter } from 'react-simple-typewriter'
import linkedinIcon from '../assets/linkedin.png';
import emailIcon from '../assets/email-icon.png';
import githubIcon from '../assets/github.png';

export function Header() {
    return (
        <div className="max-w-7xl my-0 mx-auto">
            <div className="flex items-center gap-3">
                <h2 className="text-xl font-Montserrat font-semibold">HI, I AM LUCAS</h2>
                <a href="https://www.linkedin.com/in/lucas-praado/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn Icon" />
                </a>
                <a href="https://github.com/euamovcce" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub Icon" />
                </a>
                <a href="mailto:vinicius.praado@hotmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={emailIcon} alt="Email Icon" />
                </a>
            </div>
            <h1 className="text-7xl font-Montserrat font-black max-xl:text-7xl max-md:text-6xl max-sm:text-4xl">
                FRONT-END
            </h1>
            <h1 className="text-8xl font-Montserrat font-black max-xl:text-7xl max-md:text-6xl max-sm:text-4xl">
                D
                <Typewriter
                    words={['EVELOPER']}
                    typeSpeed={300}
                    deleteSpeed={100}
                    delaySpeed={100}
                    loop={true}
                />
            </h1>
        </div>

    )
}