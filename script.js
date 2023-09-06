const API_BASE_URL = "https://official-joke-api.appspot.com/random_joke";

let data = null;

function smileyFacesConfetti() {
    
    const confettiContainer = document.querySelector('#confetti-container');
    const showConfetti = () => {
        const confetti = document.createElement('div');
        confetti.textContent = '😆';
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * innerWidth + 'px';
        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    };

    interval = setInterval(() => {
    showConfetti();
    }, 100);

    setTimeout ( () => {
        clearInterval(interval);
    }, 3000);
}


function showJokes(data){
    console.log(data.setup)
    console.log(data.punchline)

    let setupDiv = document.getElementById("setup")
    let punchlineDiv = document.getElementById("punchline")
    let hintDiv = document.getElementById("hint")

    punchlineDiv.style.display = "none";
    hintDiv.style.display = "none";
    setupDiv.style.display = "block";
    setupDiv.innerText = data.setup;
    setupDiv.style.marginBottom = "40px";

    setTimeout ( () => {
        hintDiv.style.display = "none"
        punchlineDiv.style.display = "block"
        punchlineDiv.innerText = data.punchline
        punchlineDiv.style.color = "darkred"
        punchlineDiv.style.fontWeight = "bold"
        punchlineDiv.style.marginTop = "-15px"
        smileyFacesConfetti()
    }, 5000)


    setTimeout ( () => {
        hintDiv.style.display = "block"
        hintDiv.innerText = "Can you guess? Here's the anwer..."
        hintDiv.style.color = "grey"
        hintDiv.style.marginTop = "-15px"
    }, 2000)

}

// function chooseTopic() {
//     let programmingButton = document.getElementById("progamming")

//     typeArray = ['general', 'programming']

//     let jokeType = data.type;

//     for (let type in typeArray) {

//     }

// }

    
async function getRandomJokes() {
    console.log("Here is the joke")

    let oneLinerData = await fetch(API_BASE_URL)
    .then(response => response.json())
    .then(data => showJokes(data))
    .catch(error => console.log(error))

    //console.log("oneliner name: " + oneLinerData)
}


let getJokesButton = document.getElementById("getJokes");
getJokesButton.addEventListener("click", getRandomJokes)

