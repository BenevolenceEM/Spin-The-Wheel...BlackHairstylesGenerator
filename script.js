const hairstyles = [
    {name: "Afro", length: "short", style: "nat", color: "black"},
    {name: "Bantu Knots", length: "short", style: "nat", color: "black"},
    {name: "Big Chop/Pixie Cut", length: "short", style: "nat", color: "black"},
    {name: "Blow Out/Silk Press", length: "med", style: "nat", color: "black"},
    {name: "Boho Braids", length: "short", style: "ext", color: "black"},
    {name: "Boho Twists", length: "short", style: "ext", color: "black"},
    {name: "Braid Out/Twist Out", length: "short", style: "nat", color: "black"},
    {name: "Braids with beads", length: "short", style: "ext", color: "black"},
    {name: "Cornrows", length: "short", style: "ext", color: "black"},
    {name: "Cornrows with beads", length: "short", style: "ext", color: "black"},
    {name: "Faux Locs", length: "short", style: "ext", color: "black"},
    {name: "French Curls", length: "short", style: "ext", color: "black"},
    {name: "Knotless Braids", length: "short", style: "ext", color: "black"},
    {name: "Leave Out/Sew Ins", length: "short", style: "ext", color: "black"},
    {name: "Natural Braids", length: "short", style: "nat", color: "black"},
    {name: "Natural Braids with beads", length: "short", style: "nat", color: "black"},
    {name: "Natural Cornrows", length: "short", style: "nat", color: "black"},
    {name: "Natural Cornrows with beads", length: "short", style: "nat", color: "black"},
    {name: "Natural Locs", length: "short", style: "nat", color: "black"},
    {name: "Natural Twists", length: "short", style: "nat", color: "black"},
    {name: "Wigs", length: "short", style: "ext", color: "black"},
    {name: "Twists", length: "short", style: "ext", color: "black"}
];

document.getElementbyId("spinBtn").addEventListener("click", () => {
    const selectedLength = document.getElementbyId("length").value;
    const selectedStyle = document.getElementbyId("style").value;
    const selectedColor = document.getElementbyId("color").value;
    
    const filtered = hairstyles.filter(h => h.length === selectedLength && h.style === selectedStyle && h.color === selectedColor);
    
    if (filtered.length === 0) {
        document.getElementbyId("result").textContent = "No matches found. Please try again...";
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * filtered.length);
    const chosenHairstyle = filtered[randomIndex];
    
    document.getElementById("result").textContent = 'Your next hairstyle is: ${chosenHairstyle.name}';
});