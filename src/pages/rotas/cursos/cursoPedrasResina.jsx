const CursoPedrasResina = () => {
  return (
    <div className="flex flex-col bg-red-200 border border-black">
      <h1>Curso Pedras e Resina</h1>
      <div className="flex bg-white justify-between">
        <div className="border border-blak w-1/2 text-center">
          <div className="flex flex-col">
            <h2>bla bla bla</h2>
            <hr />
            <h3>bla bla bla</h3>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black "
            >
              {" "}
              aaa
            </a>
          </div>
        </div>
        <div className="border border-blak w-1/2 text-center bg-[#e5e3d8]">
          <img
            className="drop-shadow-lg"
            src="/images/cursoPedras2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CursoPedrasResina;
