// Random Number Logic

const randomNumberGenerator = () => {
  return randomNumber = Math.floor(Math.random() * 100)
}

const numberToPercentString = (num) => {
  return `${num}%`
}

const vibeConditions = (num) => {
  if (num < 10) return "Ew wtf horrible vibes"
  if (num < 20) return "Sorry you don't vibe"
  if (num < 30) return "You ain't quite it chief"
  if (num < 40) return "Not really vibing "
  if (num < 50) return "ok you almost vibe"
  if (num < 60) return "You got a lil vibe, ngl"
  if (num < 70) return "Solid vibes"
  if (num < 80) return "K you're a mood"
  if (num < 90) return "Wow you good vibes"
  if (num >= 90) return "Yes. You a vibe."
}

const vibeCheck = (num) => {
  const data = {
    percent: numberToPercentString(num),
    statement: vibeConditions(num)
  }
  
  return data
}

// Interacting with the document

const btn = document.getElementById("vibe-check");

const loader = document.getElementById("loader")

const loaderContainer = document.getElementById("loader-container")

let clickCounter = 0;

const animate = (percent) => {
  // Sets the width to the inputted value
  const targetWidth = {
    width: percent
  }

  requestAnimationFrame(()=> {
    Object.assign(loader.style, targetWidth)
  })
}

const maxClicks = () => {

}

btn.addEventListener("click", ()=>{

  if (clickCounter === 0) {
    // This only needs to happen once
    loaderContainer.style.backgroundColor = 'black'
  }
  
  if (clickCounter === 3) {
    loaderContainer.style.backgroundColor = 'red'
    btn.value = "NOT A VIBE"
    clickCounter++;
    return;
  }
  if (clickCounter === 4) {
    btn.value = "ASKING FOR UR VIBE?"
    clickCounter++;
    return;
  }
  if (clickCounter === 5) {
    btn.value = "ON THE INTERNET?"
    clickCounter++;
    return;
  }
  if (clickCounter === 6) {
    btn.value = "NOT A VIBE"
    clickCounter++;
    return;
  }
  if (clickCounter === 7) {
    btn.value = "Bye."
    clickCounter++;
    return;
  }
  if (clickCounter === 8) {
    // btn.style.display = "none"
    loaderContainer.style.display = "none"
    return;
  }
  
  const vibe = vibeCheck(randomNumberGenerator());
  
  btn.value = vibe.statement;
  

  animate(vibe.percent)

  clickCounter++;

  console.log(clickCounter)
   
})