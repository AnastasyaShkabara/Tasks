const showMultipleOfTree = (arr = []) => {
  let isConfirmed = confirm(`Есть массив: [${arr}]. Желаешь добавить еще элементы в этот массив?`);
  
  if (isConfirmed) {
  let numbers = prompt('Введите числа через запятую без пробела. Пример: 1,2,3');
  const arrayOfNumbers = numbers.split(',').map(item => +item);
  arr.push(...arrayOfNumbers);
  }
  
  const filteredArray = arr.filter((item) => {
  if (item % 3 === 0) {
  return item;
  }
  });
  
alert(`Результат: [${filteredArray}]`);
  }
  
  showMultipleOfTree([1,2,3,4,5,6,7,8,9]);