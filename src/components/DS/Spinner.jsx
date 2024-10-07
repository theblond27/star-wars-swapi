const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="relative w-16 h-16 border-4 border-t-transparent border-yellow-500 rounded-full animate-spin">
        <div className="absolute inset-0 w-full h-full border-4 border-t-transparent border-yellow-500 rounded-full opacity-50 animate-[spin_1.5s_reverse_infinite]"></div>
      </div>
    </div>
  );
};

export default Spinner;