const quoteConatainer = document.getElementById("quote-contianer")
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const twitterBtn = document.getElementById("twitter")
const newQuote= document.getElementById("new-quote")
const loader= document.getElementById("loader")


function loading(){
    loader.hidden = false
    quoteConatainer.hidden = true
}
// hide loading
function complete(){
    quoteConatainer.hidden = false
    loader.hidden = true
}

async function getQuote() {
    loading()
    const apiUrl = "https://type.fit/api/quotes";
    let apiQuote = []

    function newQuote(){
        loading()
   const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)]
if (!quote.author){
    authorText.textContent = "Unknown"
}else{
    authorText.textContent = quote.author
}
if(quote.text.length > 50){
    quoteText.classList.add("long-quote")
}else{
    quoteText.classList.remove("long-quote")
}
   quoteText.textContent = quote.text
   complete()
   }

    try{
    const response = await fetch(apiUrl)
    apiQuote = await response.json()
    newQuote()
    }catch(error){
    
    }
    }
    function twitterQuote(){
        const tweetUrl = `https://twitter.com/intent/tweet?text=${ quoteText.textContent} - ${authorText.textContent}`
        window.open(tweetUrl, "_blank")
    }
    // Show loading
    

    // getQuote()
    newQuote.addEventListener("click",getQuote)
    twitterBtn.addEventListener("click",twitterQuote)
    getQuote()