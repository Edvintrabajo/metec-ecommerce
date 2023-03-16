const Navbar = () => {
    return(
    <nav className='w-full h-1/6  flex justify-between items-center text-white p-4 text-4xl'>
        <a href="/" className='ml-4'>
            <h1>METEC</h1>
        </a>
        <label htmlFor="burger" className="burger">
            <input id="burger" type="checkbox"/>
            <span></span>
            <span></span>
            <span></span>
        </label>
        <div id="menu" className='hidden'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar