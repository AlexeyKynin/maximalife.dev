$(function () {
    $('.header-menu__item').click(function(element){
        var id = '#' + element.target.id;
        console.log(element);

        $('.header-menu__icon').removeClass('header-menu__icon_pink');  // удаляем класс с цветом у всех

        $(id).addClass('header-menu__icon_pink'); // добавляем нужному id
    });
})