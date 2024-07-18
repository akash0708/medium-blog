const Quote = () => {
  return (
    <div className="w-full h-screen bg-slate-200 flex flex-col justify-center items-center font-inter">
      <div className="w-[70%] flex flex-col gap-4">
        <div className="font-bold text-2xl w-full text-left">
          &quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Similique reprehenderit optio totam soluta ratione odit&quot;
        </div>
        <div>
          <p className="font-bold">Jules Winnfield</p>
          <p className="font-medium text-slate-500 text-sm">CEO, Acme Inc</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
