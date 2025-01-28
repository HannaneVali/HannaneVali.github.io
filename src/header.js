
const ResponsiveHeader = () => {
  return (
    <header className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex-1">
            <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-6">
              Art meets<br/>strategic design
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-8">
              Professional graphic designer and illustrator with a decade of experience crafting compelling visual narratives. Specializing in brand identity, digital design, and artistic illustration.
            </p>
            <a
              href="#contact"
              className="inline-block bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition"
            >
              Let's collaborate
            </a>
          </div>
          <div className="absolute top-4 right-4 md:relative md:top-0 md:right-0 md:ml-8">
            <img
              src="public/images/brand.png"
              alt="Header Image"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ResponsiveHeader;