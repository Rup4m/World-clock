const countryData = {
    "UTC": { flag: "https://flagcdn.com/w320/gb.png", color: "#2f4f4f" },
    "America/New_York": { flag: "https://flagcdn.com/w320/us.png", color: "#b22234" },
    "Europe/London": { flag: "https://flagcdn.com/w320/gb.png", color: "#00247d" },
    "Asia/Dhaka": { flag: "https://flagcdn.com/w320/bd.png", color: "#007a33" },
    "Asia/Tokyo": { flag: "https://flagcdn.com/w320/jp.png", color: "#bc002d" },
    "Australia/Sydney": { flag: "https://flagcdn.com/w320/au.png", color: "#ffcc29" },
    "Europe/Berlin": { flag: "https://flagcdn.com/w320/de.png", color: "#000000" },
    "Asia/Kolkata": { flag: "https://flagcdn.com/w320/in.png", color: "#ff9933" },
    "America/Los_Angeles": { flag: "https://flagcdn.com/w320/us.png", color: "#3c3b6e" },
    "France": { flag: "https://flagcdn.com/w320/fr.png", color: "#0055a4" },
    "Germany": { flag: "https://flagcdn.com/w320/de.png", color: "#000000" },
    "Japan": { flag: "https://flagcdn.com/w320/jp.png", color: "#bc002d" },
    "India": { flag: "https://flagcdn.com/w320/in.png", color: "#ff9933" },
    "Brazil": { flag: "https://flagcdn.com/w320/br.png", color: "#009739" },
    "Russia": { flag: "https://flagcdn.com/w320/ru.png", color: "#ffffff" },
    "Italy": { flag: "https://flagcdn.com/w320/it.png", color: "#008148" },
    "Canada": { flag: "https://flagcdn.com/w320/ca.png", color: "#ff0000" },
    "China": { flag: "https://flagcdn.com/w320/cn.png", color: "#ff0000" },
    "Australia": { flag: "https://flagcdn.com/w320/au.png", color: "#ffcc29" }
};

function updateTime() {
    const select = document.getElementById('country-select');
    const timeZone = select.value;
    const now = new Date().toLocaleString('en-US', { timeZone: timeZone });
    
    // Format the date
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(now));

    // Format the time with AM/PM
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    document.getElementById('clock').textContent = new Intl.DateTimeFormat('en-US', timeOptions).format(new Date(now));
    
    // Update country display
    const countryDisplay = document.getElementById('country-display');
    const selectedCountry = countryData[timeZone];

    countryDisplay.textContent = select.options[select.selectedIndex].text;
    countryDisplay.style.backgroundImage = `url(${selectedCountry.flag})`;
    countryDisplay.style.backgroundSize = '40px';
    countryDisplay.style.backgroundRepeat = 'no-repeat';
    countryDisplay.style.paddingLeft = '50px';
    countryDisplay.style.backgroundPosition = 'left center';
    
    // Change background color
    document.body.style.backgroundColor = selectedCountry.color;
}

// Update the time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call to set time immediately
