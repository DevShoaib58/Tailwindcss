const Nav = () => {
    return (
        <section className="mx-auto p-4 bg-amber-500">
            <div className="container mx-auto flex items-center justify-between">
                <a className="focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm lg:absolute lg:left-1/2 lg:translate-y-1/2 lg:top-2 z-50" href="/"><img width="200" className=" w-48 md:w-64 lg:w-72 hover:opacity-70" src="src\assets\logo.svg" /></a>
            <button className=" lg:hidden text-neutral-600 hover:text-neutral-900" id="menu"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</button>
<div className="flex flex-col lg:flex lg:static lg:shadow-none lg:w-full justify-between lg:flex-row items-center gap-4 absolute top-16 bg-amber-500 right-0 left-0 p-6 text-center shadow-lg text-lg">
    <a href="/" className="py-1 px-6 transition-colors dark:text-neutral-900">Home</a>
    <a href="/" className="py-1 px-6 transition-colors dark:text-neutral-900">Servies</a>
    <a href="/" className="py-1 px-6 transition-colors dark:text-neutral-900 mr-auto">About</a>
    <a href="/" className="py-1 px-6 transition-colors dark:text-neutral-900">Contact</a>
    <a href="/" className="py-1 px-6 bg-teal-900 rounded  dark:text-neutral-200 shadow-xl hover:shadow-none transition-shadow">Sign up</a>
</div>
            </div>
        </section>
    );
};

export default Nav;