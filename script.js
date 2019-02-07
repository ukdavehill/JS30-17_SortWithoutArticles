const bands = ['The Plot in You', 'We Came as Romans','The Devil Wears Prada', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'Counterparts', 'A Skylit Drive', 'Anywhere But Here', 'Pierce the Veil', 'Oh, Sleeper', 'An Old Dog'];

function removeArticle(band) {
    return band.replace(/^(a |an |the |of )/i, '').trim();
}


const sortedBands = bands.sort((a, b) => removeArticle(a) > removeArticle(b) ? 1 : -1);

const bandDisplay = document.getElementById('bands');

bandDisplay.innerHTML = sortedBands.map(band => {
    return `
        <li>${band}</li>
    `
}).join('');



