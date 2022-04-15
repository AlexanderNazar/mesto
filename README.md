# Проект: Сервис Mesto

### Обзор
* Интро
* Новые изученные технологии
* Обратная связь

## Интро

Сервис Mesto - сайт для обмена фотографиями из путешествий.
* Здесь можно выкладывать фото через свой профиль.
* Профиль можно редактировать.
* Под фотографиями указываются места, где сделаны эти кадры.
* Можно лайкнуть изображение.
* Есть возможность добавить новое "Место".
* Рассмотреть фото на весь экран.
* А также удалить его.
Ну практически социальная сеть.

А вот ссылка [на проект.](https://alexandernazar.github.io/mesto/)

## Новые изученные технологии

**Валидация форм**
В этой проектной работе мы научились:
1. Валидировать формы на стороне браузера, т.е. направлять клиента на ввод правильных данных до отправки на сервер.
2. Настраивать закрытие модальных окон по клику на Оверлей или клавиши Escape.
## Обратная связь

Проект выполнен не по всем требованиям задания. Данные любого поля ввода не проверяются одной унифицированной функцией. Функция enableValidation, которая включает валидацию, не принимает на вход объект параметров, а затем
передаёт параметры вложенным функциям.
Это сделано осознано. В этой работе я использовал решение с вэбинара Елены Шостак, а не из тренажера, т.к. оно показалось мне более лаконичным. Валидация включается через объект Event на выделенных полях ввода, а не на всех полях, через сбор всех полей в массив и проход по нему методом forEach. Знаний у меня не много, чтобы отстаивать решение у более опытных коллег, но хочется проверить его на прочность через ревью. При категорическом требовании делать по заданию, переделать на стандартное решение не составит труда. Время еще есть.

