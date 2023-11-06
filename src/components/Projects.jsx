import { Icon360View, IconBrandDiscordFilled, IconDatabaseDollar, IconStereoGlasses } from "@tabler/icons-react"

const Projects = () => {


    return (
        <>
            <main id="Projects">
                <div className="flex place-content-center gap-5 rounded-xl bg-black/20 p-4 
                flex-wrap max-md:justify-center max-md:gap-4 max-md:mt-8 max-md:p-4 md:grid md:grid-cols-4">

                    <div className="p-4 rounded-xl bg-black/25 animate-slide overflow-hidden delay-700">
                        <a href="https://cruderror.vercel.app/">
                            <IconStereoGlasses src="" className="mx-auto" size={30}/>
                            <p className="p-2">Encuentra un CRUD donde agregas una pelicula y la duracion. Faltan mejoras!!</p>
                            <br />
                                Click Here!!
                        </a>
                    </div>
                    <div className="p-4 rounded-xl bg-black/25 animate-slide overflow-hidden delay-700">
                        <a href="https://crud-user-phi.vercel.app/">
                            <Icon360View className="mx-auto" size={30}/>
                            <p className="p-2">Encuentra un CRUD donde agregas usuarios con un link de una imagen. Faltan mejoras!!</p>
                            <br />
                                Click Here!!
                        </a>
                    </div>
                    <div className="p-4 rounded-xl bg-black/25 animate-slide overflow-hidden delay-700 font-serif">
                        <a href="https://rickand-morty-eta.vercel.app/">
                            <IconBrandDiscordFilled className="mx-auto" size={30}/>
                            <p className="p-2">Si haz visto Rick and Morty y te gusta, esta es la pagina que estabas buscando.
                            Te recomiendo buscar la dimension 3.
                            Colocar el numero 3 en la caja de texto y dale en Search.
                            </p>
                                <br />
                                Click Here!!
                        </a>
                    </div>
                    <div className="p-4 rounded-xl bg-black/25 animate-slide overflow-hidden delay-700">
                        <a href="https://pokemon-two-sigma.vercel.app/">
                            <IconDatabaseDollar className="mx-auto" size={30}/>
                            <p className="p-2"> Busca a tu pokemon favorito con esta pagina.
                            Donde encontraras mas de 2000 pokemones.</p>
                                <br />
                                Click Here!!
                        </a>
                    </div>
                    
                </div>
            </main>
        </>
    )
}
export {
    Projects
}