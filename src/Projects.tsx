/* eslint-disable jsx-a11y/alt-text */
import React from "react"

const projects = [
    { name: 'BlogApp', img: '/blogapp.png', link:'blogapp-sabrinapoderis.herokuapp.com', description: 'Blog desenvolvido utilizando express, node e mongodb, possui gerenciamento de postagens, categorias e usuários. Foram incluídas algumas implementações a mais após o término do curso, como por exemplo: Melhorias no front-end, Upload de imagem, Utilização de funções assíncronas' },
    { name: 'HDC Events', img: '/hdc-events.png', link:'https://github.com/Sabrina-Poderis/HDC-Events', description: 'O HDC Events é um site de eventos, que possui uma área de exibição de eventos disponível ao usuário e também uma área administrativa para o gerenciamento de eventos, estabelecimentos e usuários.' },
    { name: 'Reddit API APP', img: '/reddit.png', link:'https://github.com/Sabrina-Poderis/Reddit-API-App', description: 'Programa que consulta a api do reddit uma vez por dia, salva num banco de dados SQL as postagens que estejam HOT do subredit artificial e consulta desses dados através de dois endpoints REST.' },
]

export default function Projects() {
    return (
        <div id="projects">
            <div className="flex flex-wrap justify-center -mx-4">
                <div className="w-full px-4">
                    <div className="text-center mx-auto mb-[60px] mt-[60px] lg:mb-20 max-w-[510px]">
                      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Projetos</span>
                      </h1>
                    </div>
                </div>
            </div>

            {projects.map((project) => (
                <div className="lg:py-12 lg:flex lg:justify-center">
                    <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                        <div className="lg:w-1/2">
                            <a href={project.link}>
                                <img className="h-64 bg-cover lg:rounded-lg lg:h-full" src={project.img}></img>
                            </a>
                        </div>
                        <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                            <h2 className="text-3xl text-gray-800 font-bold">{project.name}</h2>
                            <p className="mt-4 text-gray-600">{project.description}</p>
                        </div>
                    </div>
                </div> 
            ))}
        </div>
    )
  }