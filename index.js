// Меню в мобильной версии шапки сайта

document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.querySelector('.header__burger-button');
    const closeBtn = document.querySelector('.menu__close-button');
    const menu = document.querySelector('.menu');

    function toggleMenu() {
        if (window.innerWidth > 509) {
            menu.style.display = 'none';
        }
    }

    burgerBtn.addEventListener('click', function () {
        menu.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        menu.style.display = 'none';
    });

    window.addEventListener('resize', toggleMenu);

    toggleMenu();
});

// Репродукции - слайдер с кнопками, изменение карточек, изменение паддингов и анимация

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.slider__button');

    const data = {
        france: [
            {
                img: './images/cards_france/card_img_1.png',
                author: 'Марсель Руссо',
                title: 'Охота Амура',
                description: 'Холст, масло (50х80)',
                price: '14 500 руб'
            },
            {
                img: './images/cards_france/card_img_2.png',
                author: 'Анри Селин',
                title: 'Дама с собачкой',
                description: 'Акрил, бумага (50х80)',
                price: '16 500 руб'
            },
            {
                img: './images/cards_france/card_img_3.png',
                author: 'Франсуа Дюпон',
                title: 'Процедура',
                description: 'Цветная литография (40х60)',
                price: '20 000 руб'
            },
            {
                img: './images/cards_france/card_img_4.png',
                author: 'Луи Детуш',
                title: 'Роза',
                description: 'Бумага, акрил (50х80)',
                price: '12 000 руб'
            },
            {
                img: './images/cards_france/card_img_5.png',
                author: 'Франсуа Дюпон',
                title: 'Птичья трапеза',
                description: 'Цветная литография (40х60)',
                price: '22 500 руб'
            },
            {
                img: './images/cards_france/card_img_6.png',
                author: 'Пьер Моранж',
                title: 'Пейзаж с рыбой',
                description: 'Цветная литография (40х60)',
                price: '20 000 руб'
            }
        ],
        germany: [
            {
                img: './images/cards_germany/card_img_1.png',
                author: 'Курт Вернер',
                title: 'Над городом',
                description: 'Цветная литография (40х60)',
                price: '16 000 руб'
            },
            {
                img: './images/cards_germany/card_img_2.png',
                author: 'Макс Рихтер',
                title: 'Птенцы',
                description: 'Холст, масло (50х80)',
                price: '14 500 руб'
            },
            {
                img: './images/cards_germany/card_img_3.png',
                author: 'Мартин Майер',
                title: 'Среди листьев',
                description: 'Цветная литография (40х60)',
                price: '20 000 руб'
            },
            {
                img: './images/cards_germany/card_img_4.png',
                author: 'Герман Беккер',
                title: 'Яркая птица',
                description: 'Цветная литография (40х60)',
                price: '13 000 руб'
            },
            {
                img: './images/cards_germany/card_img_5.png',
                author: 'Вульф Бауэр',
                title: 'Дятлы',
                description: 'Бумага, акрил (50х80)',
                price: '20 000 руб'
            },
            {
                img: './images/cards_germany/card_img_6.png',
                author: 'Вальтер Хартманн',
                title: 'Большие воды',
                description: 'Бумага, акрил (50х80)',
                price: '23 000 руб'
            }
        ],
        england: [
            {
                img: './images/cards_england/card_img_1.png',
                author: 'Пол Смит',
                title: 'Дикий зверь',
                description: 'Акварель, бумага (50х80)',
                price: '19 500 руб'
            },
            {
                img: './images/cards_england/card_img_2.png',
                author: 'Джон Уайт',
                title: 'Скалы',
                description: 'Цветная литография (40х60)',
                price: '17 500 руб'
            },
            {
                img: './images/cards_england/card_img_3.png',
                author: 'Джим Уотсон',
                title: 'Река и горы',
                description: 'Акварель, бумага (50х80)',
                price: '20 500 руб'
            },
            {
                img: './images/cards_england/card_img_4.png',
                author: 'Юджин Зиллион',
                title: 'Белый попугай',
                description: 'Цветная литография (40х60)',
                price: '15 500 руб'
            },
            {
                img: './images/cards_england/card_img_5.png',
                author: 'Эрик Гиллман',
                title: 'Ночная рыба',
                description: 'Бумага, акрил (50х80)',
                price: '12 500 руб'
            },
            {
                img: './images/cards_england/card_img_6.png',
                author: 'Альфред Барр',
                title: 'Рыжий кот',
                description: 'Цветная литография (40х60)',
                price: '21 000 руб'
            }
        ]
    };

    function updateMargins() {
        const cardDescriptions = document.querySelectorAll('.card__description');
        const screenWidth = window.innerWidth;

        if (screenWidth > 510 && screenWidth < 690) {
            cardDescriptions.forEach(description => {
                const textLength = description.textContent.trim().length;

                if (textLength <= 25) {
                    description.style.marginBottom = '30px';
                } else {
                    description.style.marginBottom = '11px';
                }
            });
        } else {
            cardDescriptions.forEach(description => {
                description.style.marginBottom = '';
            });
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('slider-button-active'));
            this.classList.add('slider-button-active');

            const country = this.getAttribute('data-country');
            const countryData = data[country];

            cards.forEach((card, index) => {
                const cardData = countryData[index];
                if (cardData) {
                    card.innerHTML = `
                        <div class="card__container">
                            <img class="card__img" src="${cardData.img}" alt="">
                            <p class="card__author">${cardData.author}</p>
                            <p class="card__title">${cardData.title}</p>
                            <p class="card__description">${cardData.description}</p>
                            <p class="card__price">${cardData.price}</p>
                            <button class="card__button button-green">В корзину</button>
                        </div>
                    `;
                } else {
                    card.innerHTML = '';
                }

                setTimeout(() => {
                    card.querySelector('.card__container').style.opacity = 1;
                }, 10);
            });

            updateMargins();
        });
    });

    buttons[0].click();

    window.addEventListener('resize', updateMargins);
});