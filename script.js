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

document.getElementById("spinBtn").addEventListener("click", () => {
    const selectedLength = document.getElementById("length").value;
    const selectedStyle = document.getElementById("style").value;
    const selectedColor = document.getElementById("color").value;
    
    const filtered = hairstyles.filter(h => 
        h.length.includes(selectedLength) &&
        h.style === selectedStyle &&
        h.color.includes(selectedColor)
    );
    
    if (filtered.length === 0) {
        document.getElementById("result").textContent = "No matches found. Please try again...";
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * filtered.length);
    const chosenHairstyle = filtered[randomIndex];
    
    document.getElementById("boxTitle").textContent = chosenHairstyle.name;
    document.getElementById("boxImg").src = chosenHairstyle.image;
    document.getElementById("boxLink").href = chosenHairstyle.link;
    
    document.getElementById("resultBox").style.display = "flex";
 });
 
document.getElementById("closeBox").addEventListener("click", () => {
    document.getElementById("resultBox").style.display = "none";
});