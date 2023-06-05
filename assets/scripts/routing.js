// Получаем все элементы с классом "door-link"
const doorLinks = document.getElementsByClassName('door-link');

// Проходим по каждому элементу и добавляем обработчик события
for (let i = 0; i < doorLinks.length; i++) {
    const parentElement = doorLinks[i];
    const newLink = document.createElement('a'); // Создаем новый элемент "a"
    newLink.href = './assets/pages/metalevi-dveri.html'; // Устанавливаем ссылку на "metalevi-dveri.html"
    parentElement.parentNode.insertBefore(newLink, parentElement); // Вставляем новый элемент перед родительским
    newLink.appendChild(parentElement); // Добавляем родительский элемент внутрь нового элемента "a"
}

const gateLinks = document.getElementsByClassName('gate-link');

// Проходим по каждому элементу и добавляем обработчик события
for (let i = 0; i < gateLinks.length; i++) {
    const parentElement = gateLinks[i];
    const newLink = document.createElement('a'); // Создаем новый элемент "a"
    newLink.href = './assets/pages/vorota.html'; // Устанавливаем ссылку на "metalevi-dveri.html"
    parentElement.parentNode.insertBefore(newLink, parentElement); // Вставляем новый элемент перед родительским
    newLink.appendChild(parentElement); // Добавляем родительский элемент внутрь нового элемента "a"
}

const barsLinks = document.getElementsByClassName('bars-link');

// Проходим по каждому элементу и добавляем обработчик события
for (let i = 0; i < barsLinks.length; i++) {
    const parentElement = barsLinks[i];
    const newLink = document.createElement('a'); // Создаем новый элемент "a"
    newLink.href = './assets/pages/gratu-okna.html'; // Устанавливаем ссылку на "metalevi-dveri.html"
    parentElement.parentNode.insertBefore(newLink, parentElement); // Вставляем новый элемент перед родительским
    newLink.appendChild(parentElement); // Добавляем родительский элемент внутрь нового элемента "a"
}

const shuttersLinks = document.getElementsByClassName('shutters-link');

// Проходим по каждому элементу и добавляем обработчик события
for (let i = 0; i < shuttersLinks.length; i++) {
    const parentElement = shuttersLinks[i];
    const newLink = document.createElement('a'); // Создаем новый элемент "a"
    newLink.href = './assets/pages/blins.html'; // Устанавливаем ссылку на "metalevi-dveri.html"
    parentElement.parentNode.insertBefore(newLink, parentElement); // Вставляем новый элемент перед родительским
    newLink.appendChild(parentElement); // Добавляем родительский элемент внутрь нового элемента "a"
}

const visorsLinks = document.getElementsByClassName('visors-link');

// Проходим по каждому элементу и добавляем обработчик события
for (let i = 0; i < visorsLinks.length; i++) {
    const parentElement = visorsLinks[i];
    const newLink = document.createElement('a'); // Создаем новый элемент "a"
    newLink.href = './assets/pages/ferma.html'; // Устанавливаем ссылку на "metalevi-dveri.html"
    parentElement.parentNode.insertBefore(newLink, parentElement); // Вставляем новый элемент перед родительским
    newLink.appendChild(parentElement); // Добавляем родительский элемент внутрь нового элемента "a"
}

const forgedLinks = document.getElementsByClassName('forged-link');

// Проходим по каждому элементу и добавляем обработчик события
for (let i = 0; i < forgedLinks.length; i++) {
    const parentElement = forgedLinks[i];
    const newLink = document.createElement('a'); // Создаем новый элемент "a"
    newLink.href = './assets/pages/kovani.html'; // Устанавливаем ссылку на "metalevi-dveri.html"
    parentElement.parentNode.insertBefore(newLink, parentElement); // Вставляем новый элемент перед родительским
    newLink.appendChild(parentElement); // Добавляем родительский элемент внутрь нового элемента "a"
}

const mdfLinks = document.getElementsByClassName('mdf-link');

// Проходим по каждому элементу и добавляем обработчик события
for (let i = 0; i < mdfLinks.length; i++) {
    const parentElement = mdfLinks[i];
    const newLink = document.createElement('a'); // Создаем новый элемент "a"
    newLink.href = './assets/pages/mdf.html'; // Устанавливаем ссылку на "metalevi-dveri.html"
    parentElement.parentNode.insertBefore(newLink, parentElement); // Вставляем новый элемент перед родительским
    newLink.appendChild(parentElement); // Добавляем родительский элемент внутрь нового элемента "a"
}

const interiorLinks = document.getElementsByClassName('interior-link');

// Проходим по каждому элементу и добавляем обработчик события
for (let i = 0; i < interiorLinks.length; i++) {
    const parentElement = interiorLinks[i];
    const newLink = document.createElement('a'); // Создаем новый элемент "a"
    newLink.href = './assets/pages/dveri-mizhkomnatni.html'; // Устанавливаем ссылку на "metalevi-dveri.html"
    parentElement.parentNode.insertBefore(newLink, parentElement); // Вставляем новый элемент перед родительским
    newLink.appendChild(parentElement); // Добавляем родительский элемент внутрь нового элемента "a"
}

const windowLinks = document.getElementsByClassName('windows-link');

// Проходим по каждому элементу и добавляем обработчик события
for (let i = 0; i < windowLinks.length; i++) {
    const parentElement = windowLinks[i];
    const newLink = document.createElement('a'); // Создаем новый элемент "a"
    newLink.href = './assets/pages/metal-okna.html'; // Устанавливаем ссылку на "metalevi-dveri.html"
    parentElement.parentNode.insertBefore(newLink, parentElement); // Вставляем новый элемент перед родительским
    newLink.appendChild(parentElement); // Добавляем родительский элемент внутрь нового элемента "a"
}