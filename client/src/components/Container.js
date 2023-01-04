import Screen from './Screen';
import ButtonGrid from './ButtonGrid';

function Container() {
  return (
    <div className="h-3/5 w-1/4 bg-slate-200 rounded-[12px] shadow-lg flex justify-center items-center p-5">
      <div className="h-full w-full flex-col">
        <Screen />
        <ButtonGrid />
      </div>
    </div>
  );
}

export default Container;
