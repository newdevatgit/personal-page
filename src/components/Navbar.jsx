function Navbar(){
    return (
        <nav>
        <div className='flex flex shadow-2xl text-white bg-zinc-900 gap-2 justify-around p-2 px-4 rounded-full items-center max-w-3xl mx-auto my-4'>
          <div className='text-xl font-bold'>
            <h1>Personal page</h1>
          </div>
          <div >
            <ul className='flex flex-row gap-6 m-2 text-lg '>
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">About</li>
              <li className="hover:underline cursor-pointer">coding</li>
              <li className="hover:underline cursor-pointer">blog</li>
            </ul>
          </div>
		  <button className="bg-white text-black px-4 py-1 rounded-full hover:bg-gray-200">Lets start</button>
        </div>
      </nav>
    );
}

export default Navbar;