const select = document.getElementsByClassName('select__container')[0];
console.log(select);
select.addEventListener('click', () => select.classList.toggle('select__container_checked'));
