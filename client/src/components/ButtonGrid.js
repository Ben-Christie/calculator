import StandardButton from './StandardButton';

let array = ['+', '-', '×', '÷', 7, 8, 9, '=', 4, 5, 6, 1, 2, 3, '.', 0, 'C'];

function ButtonGrid(props) {
  const { onButtonClick } = props;

  return (
    <div className="grid grid-cols-4">
      {array.map((item) => {
        return (
          <StandardButton
            key={item}
            value={item}
            clickHandler={onButtonClick}
          />
        );
      })}
    </div>
  );
}

export default ButtonGrid;
