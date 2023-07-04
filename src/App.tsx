
import './App.css';
import { Header } from './components/header';
import { Information } from './components/information';
import { SoftwareSkills } from './components/softwareSkills';
import { About } from './components/about';
import { Projects } from './components/projects';
import { Contact } from './components/contact';


export function App() {
  return (

    <div className="bg-gradient-to-b pt-5 from-red-400 to-blue-400 max-lg:h-full max-sm:overflow-x-scroll">
      <div className="mx-5 py-10 flex justify-around items-center max-lg:flex-col">
        <div className="max-w-3xl max-xl:max-w-xl max-lg:max-w-full max-md:max-w-2xl px-8 max-lg:px-0">
          <Header />
          <div>
            <About />
          </div>
        </div>
        <div className="max-lg:w-full max-md:max-w-2xl max-lg:flex max-lg:flex-col">
          <SoftwareSkills />
          <Information />
        </div>
      </div>
      <Projects />
      <Contact />
    </div>
  );
}
