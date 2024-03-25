import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 text-green-900 shadow-md border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="w-64 h-32 flex justify-start">
          <img src="genix logo.png" alt="logo" className="max-w-full max-h-full"/>
        </div>

        {/* Links for all screen sizes */}
        <div className="flex space-x-4 items-center">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/gadgets" className="hover:underline">
            Gadgets
          </Link>
          <Link href="/softwares" className="hover:underline">
            Softwares
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </div>
      </div>

      {/* <div className="md:hidden flex flex-col items-left mt-4">
        <Link href="/" className="mb-2">
          Home
        </Link>
        <Link href="/gadgets" className="mb-2 hover:underline">
          Gadgets
        </Link>
        <Link href="/softwares" className="mb-2 hover:underline">
          Softwares
        </Link>
        <Link href="/about" className="mb-2 hover:underline">
          About
        </Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
