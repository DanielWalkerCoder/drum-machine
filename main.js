const NUM_OF_BEATS = 8
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3')
const hiHat = new Audio('sounds/hi-hat.mp3')
const kickDrum = new Audio('sounds/kick-drum.mp3')
const snareDrum = new Audio('sounds/snare-drum.mp3')
let counter = 0
let metronomeCount = document.querySelector('#metronomeCount')
let metronomeBox = document.querySelector('#metronome')
let kickDrumBox = document.querySelector('#kick-drum')
let snareDrumBox = document.querySelector('#snare-drum')
let hiHatBox = document.querySelector('#hi-hat')
let sounds = [kickDrum, snareDrum, hiHat]

for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= NUM_OF_BEATS; j++){
    let newCheck = document.createElement('input')
    newCheck.type = 'checkbox'
    newCheck.id = `inst${i}beat${j}`
    document.querySelector(`#inst${i}`).appendChild(newCheck)
    }
}


function update() {
    counter += 1
    let met = counter % NUM_OF_BEATS
    if(met === 0){
        metronomeCount.innerText = NUM_OF_BEATS
    } else{
        metronomeCount.innerText = `${met}`
    }
    if(metronomeBox.checked){   
        if(counter % 4 === 0){
            tock.play()
        } else{
            tick.play();
        }
    }
    if(kickDrumBox.checked){
        kickDrum.play()
    }
    if(snareDrumBox.checked){
        snareDrum.play()
    }
    if(hiHatBox.checked){
        hiHat.play()
    }
    for(let i = 1; i <= NUM_OF_BEATS; i++){
        for(let j = 1; j <= 3; j++){
            if(document.getElementById(`inst${j}beat${i}`).checked && metronomeCount.innerText === `${i}`){
                sounds[j - 1].play()
            }
        }
    }
}

function setupUpdate() {
    setInterval(update, 600);
}

setTimeout(setupUpdate, 300);
