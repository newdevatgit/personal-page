function Navbar(){
    return (
        <nav>
        <div className='flex bg-gray-300 flex-col gap-2 justify-between items-center p-6'>
          <div className='text-2xl font-bold border-b-2 border-black b-2'>
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
        </div>
      </nav>
    );
}

export default Navbar;