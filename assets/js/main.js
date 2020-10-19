// console.log("let's go!");

// Burger Navi
const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = nav.querySelectorAll('a');
const logo = document.querySelector('#logo');

burger.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
        logo.classList.toggle('logo-top');
        burger.classList.toggle('toggle');
});

links.forEach((link) => {
        link.addEventListener('click', () => {
                nav.classList.toggle('nav-open');
                logo.classList.toggle('logo-top');
                burger.classList.toggle('toggle');
        });
});

// items

const products = [
        {
                id: 1,
                title: 'Kanken Art Laptop 15" Special Edition Backpack',
                brand: 'Fjallraven',
                price: '$119.00',
                img: 'assets/images/1.png',
                link: 'https://amzn.to/32MmHgL',
                spalten: 1,
        },
        {
                id: 2,
                title: 'Swing Arm Wood Desk Lamp',
                brand: 'Tomons',
                price: '$36.00',
                img: 'assets/images/d2.png',
                link: 'https://amzn.to/2WX7vtD',
                spalten: 3,
        },
        {
                id: 3,
                title: 'Hajo Backpack',
                brand: 'Ucon Acrobatics',
                price: '$60.00',
                img: 'assets/images/u6.png',
                link: 'https://amzn.to/2I3WvXM',
                spalten: 3,
        },
        {
                id: 4,
                title: 'Zed Bamboo Longboard',
                brand: 'Retrospec',
                price: '$60.00',
                img: 'assets/images/u10.png',
                link: 'https://amzn.to/2YX3043',
                spalten: 3,
        },
        {
                id: 5,
                title: 'Electric Pour-Over Kettle',
                brand: 'Fellow',
                price: '$149.00',
                img: 'assets/images/u9.png',
                link: 'https://amzn.to/2FYB3zT',
                spalten: 3,
        },
        {
                id: 6,
                title: 'Woodie Vintage Car',
                brand: 'Candylab Toys',
                price: '$35.00',
                img: 'assets/images/h17.png',
                link: 'https://amzn.to/2FYB3zT',
                spalten: 3,
        },
        {
                id: 7,
                title: 'Logo Modernism',
                brand: 'Taschen',
                price: '$60.00',
                img: 'assets/images/c3.png',
                link:
                        'https://www.bookdepository.com/Logo-Modernism-Jens-Muller-R-Roger-Remington/9783836545303/?a_aid=1991',
                spalten: 3,
        },
        {
                id: 8,
                title: 'Dieter Rams: As Little Design as Possible',
                brand: 'Sophie Lovell',
                price: '$150.00',
                img: 'assets/images/d7.png',
                link: 'https://amzn.to/2YQLnCV',
                spalten: 1,
        },
        {
                id: 9,
                title: 'The Eye',
                brand: 'Nathan Williams',
                price: '$28.00',
                img: 'assets/images/c6.png',
                link: 'https://amzn.to/2I3lbQ7',
                spalten: 3,
        },
        {
                id: 10,
                title: 'Gather Desk Organizer',
                brand: 'Ugmonk',
                price: '$149.00',
                img: 'assets/images/h13.png',
                link: 'https://amzn.to/2IifSvA',
                spalten: 3,
        },
        {
                id: 11,
                title: 'Dipped Canteen',
                brand: 'Corkcicle',
                price: '$28.00',
                img: 'assets/images/h8.png',
                link: 'https://amzn.to/2G84CiT',
                spalten: 3,
        },
        {
                id: 12,
                title: 'Sayl Office Chair White',
                brand: 'Herman Miller',
                price: '$599.00',
                img: 'assets/images/h2.png',
                link: 'https://amzn.to/2YWPz3N',
                spalten: 3,
        },
        {
                id: 13,
                title: 'Three Cherry Wood Notebook',
                brand: 'Field Notes',
                price: '$13.00',
                img: 'assets/images/d5.png',
                link: 'https://amzn.to/2KhwTsz',
                spalten: 3,
        },
        {
                id: 14,
                title: 'From Japan',
                brand: 'Counter Print',
                price: '$16.00',
                img: 'assets/images/c5.png',
                link: 'https://www.bookdepository.com/From-Japan/9780957081659?a_aid=1991',
                spalten: 3,
        },
        {
                id: 15,
                title: 'Arigato Desk Lamp',
                brand: 'Grupa',
                price: '$380.00',
                img: 'assets/images/h6.png',
                link: 'http://www.grupaproducts.com/arigato/',
                spalten: 1,
        },
        {
                id: 16,
                title: 'Winston Regal Watch',
                brand: 'Komono',
                price: '$58.00',
                img: 'assets/images/u7.png',
                link: 'https://amzn.to/2CZiPxO',
                spalten: 3,
        },
        {
                id: 17,
                title: 'Letter H Poster',
                brand: 'Hey Studio',
                price: '$45.00',
                img: 'assets/images/d4.png',
                link: 'https://heyshop.es/collections/home/products/h-hey',
                spalten: 3,
        },
        {
                id: 18,
                title: 'Coffee Can',
                brand: 'Blue Bottle Company',
                price: '$11.00',
                img: 'assets/images/u11.png',
                link: 'https://amzn.to/2UGLHEQ',
                spalten: 3,
        },
        {
                id: 19,
                title: 'Beoplay H4',
                brand: 'Bang & Olufsen',
                price: '$160.00',
                img: 'assets/images/h9.png',
                link: 'https://amzn.to/2UFjEWp',
                spalten: 3,
        },
        {
                id: 20,
                title: 'Make It Now',
                brand: 'Anthony Burrill',
                price: '$22.00',
                img: 'assets/images/p2.png',
                link: 'https://amzn.to/2OTHEQg',
                spalten: 3,
        },
        {
                id: 21,
                title: 'Black Side Chair',
                brand: 'Eames Style',
                price: '$54.00',
                img: 'assets/images/h4.png',
                link: 'https://amzn.to/2UFHfGt',
                spalten: 3,
        },
        {
                id: 22,
                title: 'Min: The New Simplicity in Graphic Design',
                brand: 'Thames & Hudson',
                price: '$28.00',
                img: 'assets/images/c22.png',
                link: 'https://amzn.to/2Ij1IKA',
                spalten: 1,
        },
        {
                id: 23,
                title: 'Grid systems in graphic design',
                brand: 'Josef Müller-Brockmann',
                price: '$42.00',
                img: 'assets/images/c1.png',
                link: 'https://amzn.to/2UxtLww',
                spalten: 3,
        },
        {
                id: 24,
                title: 'Card Wallet',
                brand: 'Herschel',
                price: '$15.00',
                img: 'assets/images/u12.png',
                link: 'https://amzn.to/2I5vxiq',
                spalten: 3,
        },
        {
                id: 25,
                title: 'Classic Advice Print Black',
                brand: 'Good Fucking Design Advice',
                price: '$30.00',
                img: 'assets/images/p3.png',
                link: 'https://goodfuckingdesignadvice.com/products/classic-advice-print',
                spalten: 3,
        },
        {
                id: 26,
                title: 'Magic Mouse 2',
                brand: 'Apple',
                price: '$92.00',
                img: 'assets/images/life-15.png',
                link: 'https://amzn.to/2D3yZWX',
                spalten: 3,
        },
        {
                id: 27,
                title: 'Travel Tumbler',
                brand: 'Kinto',
                price: '$34.00',
                img: 'assets/images/life-17.png',
                link: 'https://amzn.to/2WTbsPL',
                spalten: 3,
        },
        {
                id: 28,
                title: 'Magic Keyboard',
                brand: 'Apple',
                price: '$139.00',
                img: 'assets/images/life-16.png',
                link: 'https://amzn.to/2GbCf4A',
                spalten: 3,
        },
        {
                id: 29,
                title: 'Bottle Grinder',
                brand: 'Menu',
                price: '$75.00',
                img: 'assets/images/u8.png',
                link: 'https://amzn.to/2WMJbdy',
                spalten: 1,
        },
        {
                id: 30,
                title: 'Geo Thermos',
                brand: 'Normann Copenhagen',
                price: '$62.00',
                img: 'assets/images/home-8.png',
                link: 'https://amzn.to/2JLtxvk',
                spalten: 3,
        },
        {
                id: 31,
                title: 'Womb Chair & Ottoman',
                brand: 'Kardiel',
                price: '$799.00',
                img: 'assets/images/home-10.png',
                link: 'https://amzn.to/2YdSBPy',
                spalten: 3,
        },
        {
                id: 32,
                title: 'Water Filter Glass Carafe',
                brand: 'Soma',
                price: '$30.00',
                img: 'assets/images/home-9.png',
                link: 'https://amzn.to/2LCEfGP',
                spalten: 3,
        },
];

const sectionCenter = document.querySelector('.section-center');

function displayProductItems(productItems) {
        let displayProduct = productItems.map(function (item) {
                // console.log(item);
                let box = 'dreiSpalter';
                if (item.spalten === 1) {
                        // console.log(`einer: ${item.spalten}`);
                        box = 'einSpalter';
                }

                return `
        <article class="product-item ${box}">
          <a href=${item.link} target="_blank">
            <img src=${item.img} alt="${item.title}" />
          </a>
          <div class="item-info">
            <header>
              <h1 class="product-name">${item.title}</h1>
              <h2 class="product-brand">${item.brand}</h2>
            </header>
            <h3 class="product-price">${item.price}</h3>
          </div>
        </article>`;
        });

        displayProduct = displayProduct.join('');
        // console.log(displayProduct);
        sectionCenter.innerHTML = displayProduct;
}

window.addEventListener('DOMContentLoaded', function () {
        displayProductItems(products);
});
