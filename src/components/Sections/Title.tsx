const Title = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <h1 className="text-[160px] md:text-[340px] font-extrabold text-[#00000031] tracking-widest leading-none select-none pointer-events-none">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
          alt=""
          className="absolute w-[120px] md:w-[340px] left-[900px] opacity-95"
        />
        Nike
      </h1>
    </div>
  );
};

export default Title;
