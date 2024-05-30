import SearchBar from "../SearchBar";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-8  h-20 w-full">
        <h2 className="font-bold flex text-[#797D8B] text-3xl">
          flixi
          <p className="text-[#00d1a7]">Verse</p>
        </h2>
        <SearchBar />
      </nav>
    </>
  );
}

export default Navbar;