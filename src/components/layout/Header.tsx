const Header = () => {
  return (
    <header className="border-b shadow-md flex items-center gap-3 py-6 px-4">
      <div className="text-4xl">HEADER</div>

      <nav className="flex items-center gap-3">
        <a>Menu1</a>
        <a>Menu2</a>
      </nav>
    </header>
  );
};

export default Header;
