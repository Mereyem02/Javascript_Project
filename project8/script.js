let currentDate = new Date();

function renderCalendar() {
    const dates = document.getElementById("dates");
    const monthYear = document.getElementById("monthYear");
    dates.innerHTML = "";

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const today = new Date();

    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
                        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    monthYear.textContent = `${monthNames[month]} ${year}`;

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        dates.appendChild(emptyCell);
    }

    for (let i = 1; i <= lastDate; i++) {
        const dateCell = document.createElement("div");
        dateCell.textContent = i;

        if (i === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
            dateCell.classList.add("today");
        }

        dates.appendChild(dateCell);
    }
}

function changerMois(offset) {
    currentDate.setMonth(currentDate.getMonth() + offset);
    renderCalendar();
}

renderCalendar();
