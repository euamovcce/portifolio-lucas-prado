import reactIcon from '../assets/react.png';
import typeIcon from '../assets/typeScript.png';
import wpIcon from '../assets/wordpress.png';
import jsIcon from '../assets/javaScript.png';
import psIcon from '../assets/photoshop.png';
import phpIcon from '../assets/php.png';



export function SoftwareSkills() {
    return (
        <div>
            <h3 className="text-base text-white my-2 font-Montserrat font-bold mb-6 shadow-sm shadow-black px-3 py-1 bg-black/90 rounded-md max-md:text-base">
                Skills
            </h3>

            <div className="px-5 grid grid-cols-4 gap-6">
                <div>
                    <img src={reactIcon} alt="React" />
                </div>
                <div>
                    <img src={typeIcon} alt="TypeScript" />
                </div>
                <div>
                    <img src={wpIcon} alt="WordPress" />
                </div>
                <div>
                    <img src={jsIcon} alt="JavaScript" />
                </div>
                <div>
                    <img src={phpIcon} alt="PHP" />
                </div>
                <div>
                    <img src={psIcon} alt="Photoshop" />
                </div>
            </div>
        </div>

    )
}