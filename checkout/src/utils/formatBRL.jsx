const rgx = /(\d+)(\d{3})/;

function formatValues(value) {
  value = `${value.toFixed(2)}`;
  const x = value.split('.');
  let x1 = x[0];
  const x2 = x.length > 1 ? `,${x[1]}` : '';
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + '.' + '$2');
  }
  return x1 + x2;
}

export default formatValues;
