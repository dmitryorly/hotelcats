const select = document.getElementsByClassName('select__container')[0];
let activeOption = document.getElementsByClassName('select__option_active')[0];
const options = document.getElementsByClassName('select__option');

// Drop-down
select.addEventListener('click', function () {
  select.classList.toggle('select__container_checked');
  select.after.style.transform = 'rotate(180deg)';
});

