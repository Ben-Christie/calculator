function setStyle(style) {
  let str = style;
  return str;
}

function getCorrectStyle(value) {
  if (value === '=') {
    return setStyle('bg-green-600 row-span-3');
  } else if (value === 'H') {
    return setStyle('bg-blue-600 h-[50px]');
  } else if (value === 'C') {
    return setStyle('bg-red-600 h-[50px]');
  } else {
    return setStyle('bg-gray-600 h-[50px]');
  }
}

function StandardButton(props) {
  //destructuring
  const { value } = props;

  const clickHandler = () => {
    if (value === '=') {
      console.log('equals');
    }
  };

  return (
    <div
      onClick={clickHandler}
      className={`w-[80px] flex justify-center items-center font-bold text-white text-2xl rounded-[8px] my-[10px] shadow-lg hover:brightness-110 active:translate-y-[1px] cursor-pointer ${getCorrectStyle(
        value
      )}`}
    >
      {value}
    </div>
  );
}

export default StandardButton;
