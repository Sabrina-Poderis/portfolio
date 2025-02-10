import React from "react";

export default function MainHero() {
  return (
    <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg">
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Olá! Eu sou <span className="text-teal-500">Sabrina Poderis</span> e
                </p>
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Sou uma</span>{' '}
                    <span className="block text-teal-500 xl:inline">desenvolvedora web</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Desenvolvo soluções para CRM, BPO e outros tipos de aplicações. Busco evoluir minhas habilidades de gerenciamento de projeto e de desenvolvimento
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                    <a
                        href="/CurrículoPoderis.pdf"
                        target="_blank"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-400 hover:bg-amber-500 md:py-4 md:text-lg md:px-10"
                    >
                        Veja o meu currículo!
                    </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
        <img className="object-cover w-full h-full max-w-2xl "
                    src="/undraw_online_art_re_f1pk.svg" alt="undraw online art"></img>
        </div>
    </div>
        
  )
}