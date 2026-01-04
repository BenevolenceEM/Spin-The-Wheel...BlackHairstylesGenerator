//start of array
const hairstyles = [
    {   
        name: "Afro",
        length: ["short", "med"],
        style: "nat",
        color: ["black", "brown", "ginger", "burg", "blonde", "random"],
        image: "images/afro.jpg",
        link: "https://www.pinterest.com/search/pins/?q=afro%20hairstyles&rs=typed"
    },
    
    {
        name: "Bantu Knots",
        length: ["short", "med"],
        style: ["nat", "ext"],
        color: ["black", "brown", "ginger", "burg", "blonde", "random"],
        image: "images/bantu.jpg",
        link: "https://www.pinterest.com/search/pins/?q=bantu%20knots&rs=typed"
    },
    
    {
        name: "Big Chop/Pixie Cut",
        length: "short",
        style: ["nat", "ext"],
        color: ["black", "brown", "ginger", "burg", "blonde", "random"],
        image: "images/pixie.jpg",
        link: "https://www.pinterest.com/search/pins/?q=big%20chop%2Fpixie%20cut&rs=typed"
    },
    
    {
        name: "Blow Out/Silk Press",
        length: ["short", "med", "long"],
        style: "nat",
        color: ["black", "brown", "ginger", "burg", "blonde", "random"],
        image: "images/bosp.jpg",
        link: "https://www.pinterest.com/search/pins/?q=Blow%20Out%2FSilk%20Press&rs=typed"
    },
    
    {
        name: "Bob",
        length: "short",
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "random"],
        image: "images/bob.jpg",
        link: "https://www.pinterest.com/search/pins/?q=bob%20black%20women&rs=typed"
    },
    
    {
        name: "Bob Braids",
        length: "short",
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "mixed", "multiple", "random"],
        image: "images/bobb.jpg",
        link: "https://www.pinterest.com/search/pins/?q=bob%20braids&rs=typed"
    },
    
    {
        name: "Boho Braids",
        length: ["short", "med", "long"],
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "mixed", "multiple", "random"],
        image: "images/bohob.jpg",
        link: "https://www.pinterest.com/search/pins/?q=Boho%20braids&rs=typed"
    },
    
    {
        name: "Boho Twists",
        length: ["short", "med", "long"],
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "mixed", "multiple", "random"],
        image: "images/bohot.jpg",
        link: "https://www.pinterest.com/search/pins/?q=Boho%20Twists&rs=typed"
    },
    
    {
        name: "Braid Out/Twist Out",
        length: ["short", "med", "long"],
        style: "nat",
        color: ["black", "brown", "ginger", "burg", "blonde", "random"],
        image: "images/boto.jpg",
        link: "https://www.pinterest.com/search/pins/?q=Braids%20with%20beads&rs=typed"
    },
    
    {
        name: "Braids with beads",
        length: ["short", "med", "long"],
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "mixed", "multiple", "random"],
        image: "images/braidswb.jpg",
        link: "https://www.pinterest.com/search/pins/?q=Braids%20with%20beads&rs=typed"
    },
    
    {
        name: "Cornrows",
        length: ["short", "med", "long"],
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "mixed", "multiple", "random"],
        image: "images/cornrows.jpg",
        link: "https://www.pinterest.com/search/pins/?q=cornrows&rs=typed"
    },
   
    {
        name: "Cornrows with beads",
        length: ["short", "med", "long"],
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "mixed", "multiple", "random"],
        image: "images/cornrowswb.jpg",
        link: "https://www.pinterest.com/search/pins/?q=cornrows%20with%20beads&rs=typed"
    },
    
    {
        name: "Faux Locs",
        length: ["short", "med", "long"],
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "mixed", "multiple", "random"],
        image: "images/flocs.jpg",
        link: "https://www.pinterest.com/search/pins/?q=Faux%20Locs&rs=typed"
    },
    
    {
        name: "French Curls",
        length: ["short", "med", "long"],
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "mixed", "multiple", "random"],
        image: "images/french.jpg",
        link: "https://www.pinterest.com/search/pins/?q=french%20curls&rs=typed"
    },
    
    {
        name: "Flexi/Perm Rods",
        length: ["short", "med", "long"],
        style: "nat",
        color: ["black", "brown", "ginger", "burg", "blonde", "random"],
        image: "images/frpr.jpg",
        link: "https://www.pinterest.com/search/pins/?q=flexi%20rods%2Fperm%20rods%20black%20women&rs=typed"
    },
    
    {
        name: "Fulani Braids",
        length: ["short", "med", "long"],
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "mixed", "multiple", "random"],
        image: "images/fulanib.jpg",
        link: "https://www.pinterest.com/search/pins/?q=fulani%20braids&rs=typed"
    },
    
    {
        name: "Fulani French Curls",
        length: ["short", "med", "long"],
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "mixed", "multiple", "random"],
        image: "images/fulanifc.jpg",
        link: "https://www.pinterest.com/search/pins/?q=fulani%20french%20curls%20hairstyles&rs=typed"
    },
    
    {
        name: "Fulani Twists",
        length: ["short", "med", "long"],
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "mixed", "multiple", "random"],
        image: "images/fulanit.jpg",
        link: "https://www.pinterest.com/search/pins/?q=Fulani%20Twists&rs=typed"
    },
    
    {
        name: "Invisible Locs",
        length: ["short", "med", "long"],
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "mixed", "multiple", "random"],
        image: "images/ilocs.jpg",
        link: "https://www.pinterest.com/search/pins/?q=invisible%20locs&rs=typed"
    },
    
    {
        name: "Knotless Braids",
        length: ["short", "med", "long"],
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "mixed", "multiple", "random"],
        image: "images/knotless.jpg",
        link: "https://www.pinterest.com/search/pins/?q=Knotless%20Braids&rs=typed"
    },
    
    {
        name: "Koroba Braids",
        length: ["short", "med", "long"],
        style: "ext",
        color: ["black", "brown", "ginger", "random"],
        image: "images/koroba.jpg",
        link: "https://www.pinterest.com/search/pins/?q=koroba%20braids&rs=typed"
    },
    
    {
        name: "Leave Out/Sew In",
        length: ["med", "long"],
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "mixed", "random"],
        image: "images/losi.jpg",
        link: "https://www.pinterest.com/search/pins/?q=leave%20out%2Fsew%20in&rs=typed"
    },
    
    {
        name: "Low Buns",
        length: ["med", "long"],
        style: ["nat", "ext"],
        color: ["black", "brown", "ginger", "burg", "blonde", "random"],
        image: "images/lowbun.jpg",
        link: "https://www.pinterest.com/search/pins/?q=low%20bun%20hairstyles%20black%20women&rs=typed"
    },
    
    {
        name: "Micro Braids",
        length: ["short", "med", "long"],
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "mixed", "multiple", "random"],
        image: "images/micro.jpg",
        link: "https://www.pinterest.com/search/pins/?q=micro%20braids&rs=typed"
    },
    
    {
        name: "Natural Braids",
        length: ["short", "med", "long"],
        style: "nat",
        color: ["black", "brown", "ginger", "burg", "blonde", "random"],
        image: "images/natbraids.jpg",
        link: "https://www.pinterest.com/search/pins/?q=braids%20on%20natural%20hair&rs=typed"
    },
    
    {
        name: "Natural Braids with beads",
        length: ["short", "med", "long"],
        style: "nat",
        color: ["black", "brown", "ginger", "burg", "blonde", "random"],
        image: "images/natbb.jpg",
        link: "https://www.pinterest.com/search/pins/?q=Natural%20braids%20with%20beads&rs=typed"
    },
    
    {
        name: "Natural Cornrows",
        length: ["short", "med", "long"],
        style: "nat",
        color: ["black", "brown", "ginger", "burg", "blonde", "random"],
        image: "images/natc.jpg",
        link: "https://www.pinterest.com/search/pins/?q=Natural%20Cornrows&rs=typed"
    },
    
    {
        name: "Natural Cornrows with beads",
        length: ["short", "med", "long"],
        style: "nat",
        color: ["black", "brown", "ginger", "burg", "blonde", "random"],
        image: "images/natcb.jpg",
        link: "https://www.pinterest.com/search/pins/?q=Natural%20Cornrows%20with%20beads&rs=typed"
    },
    
    {
        name: "Natural Fulani Braids",
        length: ["short", "med", "long"],
        style: "nat",
        color: ["black", "brown", "ginger", "burg", "blonde", "random"],
        image: "images/natfb.jpg",
        link: "https://www.pinterest.com/search/pins/?q=fulani%20braids%20on%20natural%20hair&rs=typed"
    },
    
    {
        name: "Natural Fulani Twists",
        length: ["short", "med", "long"],
        style: "nat",
        color: ["black", "brown", "ginger", "burg", "blonde", "random"],
        image: "images/natft.jpg",
        link: "https://www.pinterest.com/search/pins/?q=fulani%20twists%20on%20natural%20hair&rs=typed"
    },
    
    {
        name: "Natural Locs",
        length: ["short", "med", "long"],
        style: "nat",
        color: ["black", "brown", "ginger", "burg", "blonde", "random"],
        image: "images/natlocs.jpg",
        link: "https://www.pinterest.com/search/pins/?q=locs%20on%20natural%20hair&rs=typed"
    },
    
    {
        name: "Natural Ponytail",
        length: ["short", "med", "long"],
        style: "nat",
        color: ["black", "brown", "ginger", "burg", "blonde", "random"],
        image: "images/natpony.jpg",
        link: "https://www.pinterest.com/search/pins/?q=natural%20ponytail%20black%20women&rs=typed"
    },
    
    {
        name: "Natural Twists",
        length: ["short", "med", "long"],
        style: "nat",
        color: ["black", "brown", "ginger", "burg", "blonde", "random"],
        image: "images/nattwists.jpg",
        link: "https://www.pinterest.com/search/pins/?q=twists%20on%20natural%20hair&rs=typed"
    },
    
    {
        name: "Ponytail",
        length: ["short", "med", "long"],
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "random"],
        image: "images/pony.jpg",
        link: "https://www.pinterest.com/search/pins/?q=Ponytail%20black%20women&rs=typed"
    },
    
    {
        name: "Puffs",
        length: ["short", "med", "long"],
        style: "nat",
        color: ["black", "brown", "ginger", "burg", "blonde", "random"],
        image: "images/puffs.jpg",
        link: "https://www.pinterest.com/search/pins/?q=natural%20puffs&rs=typed"
    },
    
    {
        name: "Short French Curls",
        length: "short",
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "mixed", "multiple", "random"],
        image: "images/shortfc.jpg",
        link: "https://www.pinterest.com/search/pins/?q=short%20french%20curls&rs=typed"
    },
    
    {
        name: "'Tems hairstyle'",
        length: ["short", "med", "long"],
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "mixed", "multiple", "random"],
        image: "images/tems.jpg",
        link: "https://www.pinterest.com/search/pins/?q=tems%20hairstyle&rs=typed"
    },
    
    {
        name: "Twists",
        length: ["short", "med", "long"],
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "mixed", "multiple", "random"],
        image: "images/twists.jpg",
        link: "https://www.pinterest.com/search/pins/?q=twists&rs=typed"
    },
    
    {
        name: "'Tyla hairstyle'",
        length: ["short", "med"],
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "mixed", "random"],
        image: "images/tyla.jpg",
        link: "https://www.pinterest.com/search/pins/?q=tyla%20hairstyle&rs=typed"
    },
    
    {
        name: "Wigs",
        length: ["short", "med", "long"],
        style: "ext",
        color: ["black", "brown", "ginger", "burg", "blonde", "mixed", "multiple", "random"],
        image: "images/wig.jpg",
        link: "https://www.pinterest.com/search/pins/?q=wigs%20for%20black%20women&rs=typed"
    }
    
];
//end of array

let wheel;

function createWheel(hairstyleList) {
    const segments = hairstyleList.map(h => ({
        fillStyle: getRandomColor(),
        text: h.name
    }));

    wheel = new Winwheel({
        canvasId: 'wheelCanvas',
        numSegments: segments.length,
        segments: segments,
        textFontSize: 14,
        textMargin: 25,
        textAlignment: 'outer',
        animation: {
            type: 'spinToStop',
            duration: 5,
            spins: 8,
            callbackFinished: spinWheelFinished
        }
    });
}

function getRandomColor() {
    const colors = ['#ff9999', '#99ccff', '#ffcc99', '#cc99ff', '#99ff99', '#ff99cc', '#ffff99', '#99ffff'];
    return colors[Math.floor(Math.random() * colors.length)];
}

//filter hairstyles based on selection
document.getElementById("spinBtn").addEventListener("click", () => {
    //clear previous search results
    document.getElementById("result").textContent = "";
    
    const selectedLength = document.getElementById("length").value;
    const selectedStyle = document.getElementById("style").value;
    const selectedColor = document.getElementById("color").value;
    
    const filtered = hairstyles.filter(h => {
        const lengths = Array.isArray(h.length) ? h.length : [h.length];
        const styles = Array.isArray(h.style) ? h.style : [h.style];
        const colors = Array.isArray(h.color) ? h.color : [h.color];
                
        return (lengths.includes(selectedLength) &&
                styles.includes(selectedStyle) && 
                colors.includes(selectedColor)
                );
    });
    
    if (filtered.length === 0) {
        document.getElementById("result").textContent = "No matches found. Please try again...";
        return;
    }
    createWheel(filtered); //rebuild wheel with filtered styles
    wheel.startAnimation(); //spin the wheel
});

//display result when animation is finished
//show popup
function spinWheelFinished(indicatedSegment) {
    const chosenName = indicatedSegment.text;
    const chosenHairstyle = hairstyles.find(h => h.name === chosenName);
        
    if (!chosenHairstyle) {
        document.getElementById("result").textContent = "Something went wrong. Try again...";
        return;
    }
        
    document.getElementById("boxTitle").textContent = chosenHairstyle.name;
    document.getElementById("boxImg").src = chosenHairstyle.image;
    document.getElementById("boxLink").href = chosenHairstyle.link;
    document.getElementById("resultBox").style.display = "flex";
}
//exit popup
document.getElementById("closeBox").addEventListener("click", () => {
    document.getElementById("resultBox").style.display = "none";
});