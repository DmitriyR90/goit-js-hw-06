const categorysAmount = document.querySelectorAll('.item');

console.log(`Number of categories: ${categorysAmount.length}`);

for (const item of categorysAmount) {
  const categorysList = item.firstElementChild;
  console.log(`Category: ${categorysList.textContent}`);

  const categorysLast = item.querySelectorAll('.item > ul>li');
  console.log(`Elements: ${categorysLast.length}`);
}
