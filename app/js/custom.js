$(function() {

				let headerHight = $("header").height();
                let windowHeight = $(window).height();

                ///Прижатие футера к низу
                $("body").css({padding:0,margin:0});
                var f = function() {
                    $("main").css({position:"relative"});
                    var h1 = $("body").height();
                    var h2 = $(window).height();
                    var d = h2 - h1;
                    var h =  $("main").height() + d;
                    var ruler = $("<div>").appendTo("main");
                    h = Math.max(ruler.position().top,h);
                    ruler.remove();
                    $("main").height(h);
                };
                setInterval(f,1000);
                $(window).resize(f);
                f();
                //Банер во весь экран
                let bannerHeight = ((windowHeight-headerHight)>200)?windowHeight-headerHight:200;
                $('#banner').height(bannerHeight);
                //Элемент-кнопка для скрола баннера
                let top = bannerHeight/1.2;
                $('#scroll_a').css("top", top+"px");

                //Скролинг от кнопки баннера
                $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
                    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
                    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
                        $('html, body').animate({ scrollTop: $(scroll_el).offset().top-headerHight }, 500); // анимируем скроолинг к элементу scroll_el
                    }
                    return false; // выключаем стандартное действие
                });
                //устанавливаем datepicker и mask 
                $( "#datepicker" ).datepicker({
                    changeMonth: true,
                    changeYear: true
                });
                $('#datepicker').mask('00/00/0000');
                $(window).scroll(function() {
                    if ($(this).scrollTop() > 1){
                        $('header').addClass("sticky");
                    }
                    else{
                        $('header').removeClass("sticky");
                    }
                });
                /// Работа на формой password, по нажатию на спан с айди #show мы меняем текст в спане и тип инпута для #password
                // на текстовый , повторное нажатие сделает все наоборот
                $("#show").click(function(el){
                    if(el.target.innerText=='SHOW'){
                        el.target.innerText='HIDE';
                        $('#password').prop('type', 'input');
                    }else{
                        el.target.innerText='SHOW';
                        $('#password').prop('type', 'password');
                    }
                });
                ///стили для селектов
                $('.selectpicker').styler();
                //Всплывающая панель языков у хедера
                $('#firstFlag').click(function(){
                    $('header .container-fluid').toggleClass('hid');
                });

            } );