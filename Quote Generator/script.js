const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const categoryText = document.getElementById('category');
const btn = document.getElementById('generatebtn');
const copyBtn = document.getElementById('copy-btn');

async function getQuote() {
    btn.innerText = "Loading...";
    btn.disabled = true;
    
    try {
        const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
            headers: {
                "X-Api-Key": "xRSVUz1pvwhLP7KuHVB4sqeVfbBTMDB3NNuSBDSo"
            }
        });
        
        if (!response.ok) throw new Error("API Error");

        const data = await response.json();
        const item = data[0];

 
        quoteText.innerText = item.quote;
        authorText.innerText = item.author;
        categoryText.innerText = item.category || "General";
        
    } catch (error) {
        quoteText.innerText = "Oops! Something went wrong.";
        authorText.innerText = "";
        categoryText.innerText = "";
        console.error(error);
    } finally {
        btn.innerText = "New Quote";
        btn.disabled = false;
    }
}


async function copyQuote() {
    const textToCopy = `"${quoteText.innerText}" — ${authorText.innerText}`;
    
    try {
        await navigator.clipboard.writeText(textToCopy);
        
    
        const originalText = copyBtn.innerText;
        copyBtn.innerText = "Copied!";
        setTimeout(() => {
            copyBtn.innerText = originalText;
        }, 2000);
    } catch (err) {
        console.error("Failed to copy!", err);
    }
}


btn.addEventListener('click', getQuote);
copyBtn.addEventListener('click', copyQuote);


getQuote();