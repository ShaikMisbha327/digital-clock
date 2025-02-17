function updateClock() {
    const timeElement = document.getElementById('time');
    const ampmElement = document.getElementById('ampm');
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    
    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    
    const isAM = hours < 12;
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    
    const ampmText = isAM ? 'AM' : 'PM';
    const currentDayIndex = currentTime.getDay();
    
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    ampmElement.textContent = ampmText;
    
    // Remove highlight from all days
    days.forEach(day => {
        document.getElementById(day).classList.remove('highlight');
    });
    
    // Highlight the current day
    document.getElementById(days[currentDayIndex]).classList.add('highlight');
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize clock on page load
updateClock();
s