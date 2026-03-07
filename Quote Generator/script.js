const generatebtnEl = document.getElementById('generatebtn');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const categoryEl = document.getElementById('category');

generatebtnEl.addEventListener('click',()=>{
    quoteEl.innerHTML = "Generating Quote........"
    GenerateQuote();
    authorEl.innerHTML = "";
    categoryEl.innerHTML = "";

});

async function GenerateQuote() {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes?X-Api-Key=xRSVUz1pvwhLP7KuHVB4sqeVfbBTMDB3NNuSBDSo");

    if(!response.ok){
        throw new Error("Response Error :", response.status)
    }
    const data = await response.json();
        quoteEl.innerHTML = data[0].quote;
        authorEl.innerHTML = `Author: ${data[0].author}`;
        categoryEl.innerHTML = `Category: ${data[0].category}`;
}