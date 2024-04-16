import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-800">
      <div className="bg-white w-screen text-black flex justify-around align-baseline py-5">
        <span className="text-5xl">Gerardo Sandoval</span>
        <img className="" src="./public/nextjs-icon.png"></img>
        <span className="text-3xl">Matrícula A01721732</span>
      </div>
      <div className="text-justify">
        <div className="text-2xl">
          Más acerca de Gerardo Sandoval:
        </div>
        <ul>
          <li>
            - Estudia en el Tecnológico de Monterrey
          </li>
          <li>
            - Su carrera es ingeniería en tecnologías computacionales
          </li>
          <li>
            - Le gusta tocar el piano
          </li>
        </ul>
      </div>
      <div className="bg-black w-screen text-white flex justify-around">
        <ul className="py-10 flex space-x-10">
          <li>
            <a className="hover:text-gray-600" href="https://github.com/a01721732" target="_blank">Github</a>
          </li>
          <li>
          <a className="hover:text-gray-600" href="https://linkedin.com/in/gerardo-sandoval-coding/" target="_blank">LinkedIn</a>
          </li>
        </ul>
      </div>
    </main>
  );
}
