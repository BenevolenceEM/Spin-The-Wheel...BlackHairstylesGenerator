const hairstyles = [
    {name: "Afro", length: "short", style: "nat", color: "black"}
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