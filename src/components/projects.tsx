import medWeb from '../assets/med-full.webp';
import jbesWeb from '../assets/jbes-full.webp';

export function Projects() {
    return (
        <div className="mb-10">
            <h1 className="text-center font-Montserrat mb-10 font-bold text-4xl text-zinc-800 max-lg:text-3xl">
                Worked projects
            </h1>
            <div className="flex justify-center gap-32   max-lg:flex-col">
                <a
                    href="https://medcontadores.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                ><div className="w-full flex flex-col justify-center items-center px-5">
                        <div className="max-lg:max-w-lg">
                            <img src={medWeb} width={450} alt="Photo website Med Contadores" />
                        </div>
                        <p className="text-center text-zinc-800 font-Montserrat font-bold text-2xl">
                            Med Contadores
                        </p>
                    </div>
                </a>
                <a
                    href="https://jbes.com.br/br/home/"
                    target="_blank"
                    rel="noopener noreferrer"
                ><div className="w-full flex flex-col justify-center items-center px-5">
                        <div className="max-lg:max-w-lg">
                            <img src={jbesWeb} width={450} alt="Photo website Jbes" />
                        </div>
                        <p className="text-center text-zinc-800 font-Montserrat font-bold text-2xl max-lg:text-xl">
                            Jbes
                        </p>
                    </div>
                </a>
            </div>
        </div>

    )
}