// KeyBy FUNCTION
const arr = [
  {
    firstName: 'John',
    lastName: 'Secmen',
    age: 36,
    job: 'Teacher',
  },
  { firstName: 'Leo', lastName: 'Missi', age: 24, job: 'Coder' },
  { firstName: 'Hai', lastName: 'Kerry', age: 28, job: 'Doctor' },
];
// const ft_Name = _.keyBy(arr, 'firstName');

function KeyBy(array, val) {
  return array.reduce((location, next) => {
    location[next[val]] = next;
    return location;
  }, {});
}

console.log(KeyBy(arr, 'lastName'));
