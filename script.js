'use strict'
// const volumeUp = document.getElementById('volume-up');
// const volumeRange = document.querySelector('.vol');



// volumeUp.addEventListener('click', () => {

// })


// const item = document.querySelector('.scroll-wrap ');

// window.addEventListener('wheel', function (e) {

//     if (e.deltaY > 0) item.scrollLeft += 100;
//     else item.scrollLeft -= 100;
// });

const db = [
    {
        model: 'HP surface',
        picture: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWBrzy?ver=85d4&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true',
        procesor: 'I3 the good one',
        ram: '3 GB ddr4',
        hdd: 'SSD 10 GB',
        display: '12 inches',
        graphics: 'embedded',
        os: 'not indlcuded',
        weight: '200 KG',
        battery: '2 Hours',
        price: '$200'


    },
    {
        model: 'Azuz Zenbook',
        picture: 'https://www.lg.com/us/images/laptops/md07521458/gallery/D-001.jpg',
        procesor: 'Intel Core i7 8th Gen',
        ram: '32 GB RAM',
        hdd: '512 GB',
        display: '14 inches',
        graphics: '3090 GTI',
        os: 'Win 11',
        weight: '3.2 KG',
        battery: '24 hr',
        price: '$5000'


    },
    {
        model: 'Leneovo Thinkpad',
        picture: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWBrzy?ver=85d4&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true',
        procesor: 'ADM Ryzen 5 3rd Gen',
        ram: '2 GB',
        hdd: '120 GB',
        display: '16 inches',
        graphics: 'embedded',
        os: 'Ununtu 22.4',
        weight: '1.2 KG',
        battery: '16 hr',
        price: '$600'


    },
    { model: "Wikivu", picture: 'https://media.cnn.com/api/v1/images/stellar/prod/210628154025-dell-xps-13-product-card.jpg?q=w_2000,h_1125,x_0,y_0,c_fill', procesor: "Crimson", ram: "8.30", "hdd": "2.3", "display": "Reed's Didymodon Moss", "graphics": "eb658968c35356ebf3609907c784a634", "os": "73-201", "weight": "KAXX", "battery": null, "price": "$4415.87" },
    { model: "Meemm", picture: "https://img.freepik.com/premium-photo/laptop-notebook-computer-front-view-3d-icon-isolated-white-background_334903-219.jpg?w=2000", procesor: "Pink", ram: "0.4.3", "hdd": "3.1.5", "display": "Oregon Checkerbloom", "graphics": "8b9bece14165cd620c41474bd3acdef6", "os": null, "weight": "KSQL", "battery": null, "price": "$1467.36" },
    { model: "Zoomlounge", picture: "https://www.lg.com/us/images/laptops/md07521458/gallery/D-001.jpg", procesor: "Maroon", ram: "0.3.5", "hdd": "2.3.6", "display": "Lanai Hala Pepe", "graphics": "063342989c47f012b378e77d9da4e764", "os": "739 30", "weight": "AYEO", "battery": null, "price": "$622.36" },
    { model: "Yamia", picture: "https://media.cnn.com/api/v1/images/stellar/prod/210628154025-dell-xps-13-product-card.jpg?q=w_2000,h_1125,x_0,y_0,c_fill", procesor: "Fuscia", ram: "0.58", "hdd": "0.7.6", "display": "Violet Milkvetch", "graphics": "69147d185b933d5be125ea9b7240df7e", "os": "93504 CEDEX", "weight": "PADG", "battery": null, "price": "$1736.09" },
    { model: "Chatterpoint", picture: "https://techgage.com/wp-content/uploads/2015/03/ASUS-ROG-G751JY-Gaming-Notebook-Front-View-680x468.jpg", procesor: "Pink", ram: "0.4.3", "hdd": "3.1.5", "display": "Oregon Checkerbloom", "graphics": "8b9bece14165cd620c41474bd3acdef6", "os": null, "weight": "KSQL", "battery": null, "price": "$1467.36" },
    { model: "Quimba", picture: "https://media.cnn.com/api/v1/images/stellar/prod/210628154025-dell-xps-13-product-card.jpg?q=w_2000,h_1125,x_0,y_0,c_fill", procesor: "Khaki", ram: "9.8", "hdd": "5.7.5", "display": "Skyblue Aster", "graphics": "e8f4e303cf4cf8119e00a71923fa721c", "os": "1209", "weight": "MRNC", "battery": null, "price": "$3907.39" },
    { model: "DabZ", picture: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWBrzy?ver=85d4&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true", procesor: "Orange", ram: "0.61", "hdd": "2.09", "display": "Southern Barbara's Buttons", "graphics": "903273849fbf2c6dc4d19f55bb9c278d", "os": "2750-015", "weight": "LCGK", "battery": null, "price": "$990.56" },
    { model: "Plambee", picture: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ces/gaming-laptops/geforce-rtx-30-series-laptops-shop-600-p@2x.png", procesor: "Purple", ram: "5.9.0", "hdd": "9.1", "display": "Chamisso Arnica", "graphics": "beec31fa133b11b2b1fb9d7ebbc81f55", "os": null, "weight": "GOSM", "battery": null, "price": "$966.16" },
    { model: "Bluezoom", picture: "https://img.freepik.com/premium-photo/laptop-notebook-computer-front-view-3d-icon-isolated-white-background_334903-219.jpg?w=2000", procesor: "Goldenrod", ram: "0.5.3", "hdd": "8.19", "display": "Late Purple Aster", "graphics": "24b30289c525fbf9ee769758ee30ae86", "os": "M14", "weight": "ZSJN", "battery": null, "price": "$3569.15" },
    { model: "DabZ", picture: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWBrzy?ver=85d4&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true", procesor: "Orange", ram: "0.61", "hdd": "2.09", "display": "Southern Barbara's Buttons", "graphics": "903273849fbf2c6dc4d19f55bb9c278d", "os": "2750-015", "weight": "LCGK", "battery": null, "price": "$990.56" },
    { model: "DabZ", picture: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWBrzy?ver=85d4&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true", procesor: "Orange", ram: "0.61", "hdd": "2.09", "display": "Southern Barbara's Buttons", "graphics": "903273849fbf2c6dc4d19f55bb9c278d", "os": "2750-015", "weight": "LCGK", "battery": null, "price": "$990.56" },
    { model: "Zooxo", picture: "https://media.cnn.com/api/v1/images/stellar/prod/210628154025-dell-xps-13-product-card.jpg?q=w_2000,h_1125,x_0,y_0,c_fill", procesor: "Maroon", ram: "0.3.5", "hdd": "2.3.6", "display": "Lanai Hala Pepe", "graphics": "063342989c47f012b378e77d9da4e764", "os": "739 30", "weight": "AYEO", "battery": null, "price": "$622.36" },

]

const target = document.getElementById('target');
let rowId = 0;
db.forEach(element => {
    rowId++;
    const newRow = document.createElement('div');
    newRow.setAttribute('id', 'one');
    newRow.setAttribute('class', 'row');
    const model = document.createElement('div');
    model.setAttribute('class', `model model-row${rowId} td`);
    model.textContent = element.model;
    const picture = document.createElement('div');
    picture.setAttribute('class', `picture picture-row${rowId} td`);
    picture.setAttribute('style', `background-image:url('${element.picture}');background-size: contain;background-repeat: no-repeat; background-position: center; width:20rem;`);
    const processsor = document.createElement('div');
    processsor.setAttribute('class', `processsor processsor-row${rowId} td`);
    processsor.textContent = element.procesor;
    const ram = document.createElement('div');
    ram.setAttribute('class', `ram ram-row${rowId} td`);
    ram.textContent = element.ram;
    const hdd = document.createElement('div');
    hdd.setAttribute('class', `hdd hdd-row${rowId} td`);
    hdd.textContent = element.hdd;
    const display = document.createElement('div');
    display.setAttribute('class', `display display-row${rowId} td`);
    display.textContent = element.display;
    const graphics = document.createElement('div');
    graphics.setAttribute('class', `graphics graphics-row${rowId} td`);
    graphics.textContent = element.graphics;
    const os = document.createElement('div');
    os.setAttribute('class', `os os-row${rowId} td`);
    os.textContent = element.os;
    const weight = document.createElement('div');
    weight.setAttribute('class', `weight weight-row${rowId} td`);
    weight.textContent = element.weight;
    const battery = document.createElement('div');
    battery.setAttribute('class', `battery battery-row${rowId} td`);
    battery.textContent = element.battery;
    const price = document.createElement('div');
    price.setAttribute('class', `price price-row${rowId} td`);
    price.textContent = element.price;
    const buttonCont = document.createElement('div');
    buttonCont.setAttribute('class', `buttonCont buttonCont-row${rowId} td`);

    const button = document.createElement('button');
    button.setAttribute('class', `button button-row${rowId} `);
    button.textContent = 'Buy now!';
    buttonCont.append(button);
    target.appendChild(newRow);
    newRow.append(model, picture, processsor, ram, hdd, display, graphics, os, weight, battery, price, buttonCont,);












});




const scrollContainer = document.querySelector("scrollWrap");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});
