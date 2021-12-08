'use strict'

const dogsSlider = document.querySelector('.ours-dogs__slider');
const allDogs = document.querySelector('.all-dogs__gallery')
let dogsDb;
let dogsBlock = ``;
dogsGet();
addDonates();
reviewsSlider();

function dogsGet() {
    const url = 'https://my-json-server.typicode.com/ChentsovD/json_for_ex.project/dogs'
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
        dogsDb = xhr.response;

        addDogs();
        return dogsDb
    };

    xhr.open('GET', url);
    xhr.responseType = 'json'
    xhr.send();
}

function addDogs() {
    dogsDb.forEach((element) => {
        const slideBlock = `<div class="ours-dogs__slide">
    <img src="./img/dog_${element.id}.jpg" alt="" class="ours-dogs__img">
    <div class="ours-dogs__info dog-info">
        <h4 class="dog-info__name">${element.name}</h4>
        <span class="dog-info__age">${element.age}</span>
        <a href="#" class="dog-info__more">Познайомитись</a>
    </div>
    </div>
    `

        if (dogsSlider) {
            dogsBlock = dogsBlock + slideBlock;
            dogsSlider.innerHTML = dogsBlock;

        } else if (allDogs) {
            dogsBlock = dogsBlock + slideBlock;
            allDogs.innerHTML = dogsBlock;
        }
    })
    Slider();
}

function addDonates() {
    let url = 'https://my-json-server.typicode.com/ChentsovD/json_for_ex.project/donates';


    if (document.querySelector('.last-donate')) {
        fetch(url)
            .then(response => response.json())
            .then(donates => {
                let lastDonates = ``;
                let lastDonateParent = document.querySelector('.last-donate');
                let lastThreeDonates = donates.reverse().slice([0], [3]);

                lastThreeDonates.forEach(element => {
                    const lastDonateBlock = `
            <div class="last-donate__block last-donator">
                            <div class="last-donator__first-row">
                                <h5 class="last-donator__name"> ${element.name}</h5>
                                <span class="last-donator__amount">${element.donate} грн</span>
                            </div>
                            <div class="last-donator__second-row">
                                <p class="last-donator__disc">${element.discription}</p>
                            </div>
                        </div>
            `
                    lastDonates = lastDonates + lastDonateBlock;

                })

                lastDonateParent.innerHTML = `<h4 class="last-donate__title">
                    Останні пожертвування
                    </h4>` + lastDonates;
            })
    }
}

function Slider() {
    $('.ours-dogs__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1360,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    arrows: false,
                    dots: true,

                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,
                }
            },


        ]
    });
}

function reviewsSlider(){
$('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true,

            }
        },



    ]
});
}
// Burger Menu//////////////////////

const navMenu = document.querySelector('.nav');
const navBurger = document.querySelector('.burger');

navBurger.addEventListener("click", function () {
    if (this.classList.contains('burger--open')) {
        navMenu.style.display = 'none';
        navBurger.classList.remove('burger--open');
    }
    else {
        navMenu.style.display = 'flex';
        navBurger.classList.add('burger--open');
    }

});



window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});

