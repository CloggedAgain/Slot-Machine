const images = [
    "https://64.media.tumblr.com/771855b6606b6de28456d6d8c4816770/f92787c854551c63-3f/s250x400/fbe6050d052cd102482063f668ef40ff75b71d29.pnj",
    "https://64.media.tumblr.com/f5a55127532ed297e7b052cbecc93fe3/c8df1a6f65c0d677-7e/s250x400/b944bf22c6baeba09662f9f0d0a1ea676402ea24.pnj",
    "https://64.media.tumblr.com/9461702d83a30a0c978bf49f6cbfa1fb/167c94231b3df3a1-e1/s250x400/4c3c4a47ddccc6f77e1ee29d8dd0bfdac3d4e7c7.pnj"
];

function generateBrainrotMessage() {
    const messages = [
        "🔥 L + RATIO + TOUCH GRASS 🔥", 
        "💀 ABSOLUTE FAILURE MOMENT 💀", 
        "🚨 YOU JUST GOT OHIO’D 🚨", 
        "🗿 EVEN NPCs DO BETTER THAN THIS 🗿", 
        "💯 MAYBE TRY AGAIN NEXT YEAR 💯", 
        "⚡ SIGMA GRINDSET? MORE LIKE BETA MINDSET ⚡",
        "👽 YOU JUST GOT ABDUCTED BY THE L ALIENS 👽",
        "🔥 WOMP WOMP 🤡 🤡 🤡 🔥"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}

function spinSlots() {
    let slots = [document.getElementById('slot1'), document.getElementById('slot2'), document.getElementById('slot3')];
    let results = [];
    let spinTimes = [3000, 3500, 4000]; // Different stop times for realistic effect
    let jackpotChance = Math.floor(Math.random() * 1000) === 0; // 1 in 1000 chance
    
    slots.forEach((slot, index) => {
        slot.innerHTML = '';
        let img = document.createElement('img');
        img.src = images[Math.floor(Math.random() * images.length)];
        slot.appendChild(img);
        
        let spinInterval = setInterval(() => {
            img.src = images[Math.floor(Math.random() * images.length)];
        }, 100);
        
        setTimeout(() => {
            clearInterval(spinInterval);
            
            if (jackpotChance) {
                results = [images[0], images[0], images[0]];
            } else {
                results.push(images[Math.floor(Math.random() * images.length)]);
                if (results.length === 3 && results[0] === results[1] && results[1] === results[2]) {
                    results[2] = images.find(img => img !== results[0]);
                }
            }
            slots[index].firstChild.src = results[index];
            
            if (results.length === 3) {
                document.getElementById('message').textContent = jackpotChance ? "🎉 JACKPOT! 🎉" : generateBrainrotMessage();
            }
        }, spinTimes[index]);
    });
}
