function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-400 bg-gray-100 text-gray-500 font-OpenSans">
      <div className="px-8 py-3">
        <p>Rafdo Search</p>
      </div>

      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex link justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 font-Ubuntu">{" "}
          <a href="https://www.rafdo.rf.gd">
            {" "}
            www.Rafdo.rf.gd{" "}
          </a>
        </div>

        <div className="flex justify-center text-sm space-x-5 whitespace-nowrap md:justify-self-start">
          <a href="https://www.rafdo.rf.gd">
            <p className="link">Home</p>
          </a>
          <a href="https://www.rafdo.rf.gd/products">
            <p className="link">Products</p>
          </a>
          <a href="https://gamesfromrafdo.weebly.com">
            <p className="link">Games</p>
          </a>
        </div>
        <div className="flex justify-center text-sm space-x-5 md:ml-auto">
          <a href="https://www.rafdo.rf.gd/privacy">
            <p className="link">Privacy</p>
          </a>
          <a href="https://www.rafdo.rf.gd/terms">
            <p className="link">TOS</p>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
