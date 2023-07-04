
import brFlag from '../assets/brazil.png';
import usaFlag from '../assets/united-states.png';
export function Information() {
  return (
    <div className="font-Montserrat">
      <div className="my-5">
        <h3 className="text-base text-white my-2 font-Montserrat font-bold mb-6 shadow-sm shadow-black px-3 py-1 bg-black/90 rounded-md max-md:text-base">
          Languages
        </h3>
        <div>
          <div className="flex items-center mb-2 gap-3">
            <img src={usaFlag} alt="USA Flag" />
            <span className="text-sm text-white font-normal">EN - Intermediate</span>
          </div>
          <div className="flex items-center gap-3">
            <img src={brFlag} alt="Brazil Flag" />
            <span className="text-sm text-white font-normal">PT-BR - Native Speaker</span>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h3 className="text-base text-white my-2 font-Montserrat font-bold mb-6 shadow-sm shadow-black px-3 py-1 bg-black/90 rounded-md max-md:text-base">
          Education
        </h3>
        <span className="font-Montserrat font-light text-base max-md:text-sm">
          Degree in Analysis and systems development.<br />University São Judas – Santos, Brazil
        </span>
      </div>
    </div>

  )
}