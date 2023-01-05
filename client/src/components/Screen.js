function Screen(props) {
  const { screen } = props;
  return (
    <div className="h-1/5 w-full bg-white rounded-[12px] flex items-center justify-end p-3 font-bold text-5xl shadow-lg overflow-x-auto">
      {String(screen)}
    </div>
  );
}

export default Screen;
