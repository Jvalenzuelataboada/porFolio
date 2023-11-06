

const Home = () => {


return(
    <> 
        <main id="Home">
            <div className="flex justify-center items-center text-3xl mt-4 max-md:flex-wrap">
                <div className="">
                    <img className='w-[80%] max-md:flex max-md:items-center max-md:justify-center' src='/robot1.png' alt="" />
                </div>
                <div className="">
                    <h2 className="text-xl"><span className="text-2xl">Hi!</span> Soy a Front End Developer.</h2>
                    <h3 className="text-xl">My name is <span className="text-2xl">Juan Carlos Valenzuela</span></h3>
                    <h6>Lorem ipsum dolor, sit amet consectetur</h6>
                </div>
            </div>
        </main>
    </>
) 
}
export {
    Home
}