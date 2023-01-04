import StandardButton from './StandardButton';

let array = [
  '+',
  '-',
  '×',
  '÷',
  7,
  8,
  9,
  'H',
  4,
  5,
  6,
  '=',
  1,
  2,
  3,
  '.',
  0,
  'C',
];

function ButtonGrid() {
  return (
    <div className="grid grid-cols-4">
      {array.map((item) => {
        return <StandardButton key={item} value={item} />;
      })}
    </div>
  );
}

export default ButtonGrid;
