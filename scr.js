const bands = ['The Plot in You', 'We Came as Romans','The Devil Wears Prada', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'Counterparts', 'A Skylit Drive', 'Anywhere But Here', 'Pierce the Veil', 'Oh, Sleeper', 'An Old Dog'];

const articles = ['Of', 'The', 'A', 'An'];

// Create new array with each array element an object with the true title and the title without the articles at the front
const bandObjectArray = bands.map(band => {
    const obj = {};
    obj.trueName = band;
    obj.amendedName = band;
    
    // Check if article at front as separate word and if so remove it on the amendedName string
    articles.forEach(article => {
        if(band.indexOf(article) === 0 && band[article.length] === ' '){
            obj.amendedName = band.substring(article.length + 1);
        }
    })
    return obj;     
});


function sortObjArr(arr) {
    arr.sort((a,b) => {
        if( a.amendedName < b.amendedName){
            return -1;
        };
        if( a.amendedName > b.amendedName){
            return 1;
        };
        return 0;
    })   
}

function displaySortedList(arrObj){
    sortObjArr(arr);


}

const sortObjArr(bandObjectArray);

// bandObjectArray.sort((a,b) => {
//     if( a.amendedName < b.amendedName){
//         return -1;
//     };
//     if( a.amendedName > b.amendedName){
//         return 1;
//     };
//     return 0;
// })


const bandList = document.getElementById('bands');


const html = bandObjectArray.map(band => {
    return `
    <li>${band.trueName}</li>
    `
}).join('');



bandList.innerHTML = html;



