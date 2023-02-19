// Функция которая изменяет цвет исходя из атрибута value у option
function changeColor(event) {
  const color = event.target.value;
  if (color === "Default") {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = color;
  }
}
// Сюда пишите название события, которое должно произойти после смены option
const selectColorEvent = "change";
// Создаем события на тег select.
selectColor.addEventListener(selectColorEvent, changeColor);
// Напишите, почему событие делаем на тег select, а работаем с тегом option?
// Здесь писать.
// Потому что изменяем значение select, которое записано в option