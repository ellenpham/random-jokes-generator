const API_BASE_URL = "https://official-joke-api.appspot.com/jokes/"

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
    console.log(data[0].setup)
    console.log(data[0].punchline)

    let setupDiv = document.getElementById("setup")
    let punchlineDiv = document.getElementById("punchline")
    let hintDiv = document.getElementById("hint")

    punchlineDiv.style.display = "none";
    hintDiv.style.display = "none";
    setupDiv.style.display = "block";
    setupDiv.innerText = data[0].setup;
    setupDiv.style.fontSize = "20px";
    setupDiv.style.marginBottom = "40px";

    setTimeout ( () => {
        hintDiv.style.display = "none"
        punchlineDiv.style.display = "block"
        punchlineDiv.innerText = data[0].punchline
        punchlineDiv.style.color = "darkred"
        punchlineDiv.style.fontSize = "20px";
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


async function getRandomJokes(jokeType) {
    console.log("Here is the joke")

    await fetch(API_BASE_URL + jokeType + "/random")
    .then(response => response.json())
    .then(data => showJokes(data))
    .catch(error => console.log(error))

    //console.log("oneliner name: " + oneLinerData)
}

// different style of buttons display
//let getGeneralJokesButton = document.getElementById("general");
//getGeneralJokesButton.addEventListener("click", () => {getRandomJokes("general")})
//let getProgrammingJokesButton = document.getElementById("programming");
//getProgrammingJokesButton.addEventListener("click", () => {getRandomJokes("programming")})

function selectJokesType() {
    jokesType = document.getElementById("selectType").value
    getRandomJokes(jokesType)

}

let getJokesButton = document.getElementById("getJokes");
getJokesButton.addEventListener("click", selectJokesType)




