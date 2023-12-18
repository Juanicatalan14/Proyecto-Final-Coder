function updateAreas() {
    var sitio = document.getElementById("Sites").value;
    var areaSelect = document.getElementById("Area");
    areaSelect.innerHTML = "";

    // Add predetermined areas based on selected sitio
    if (sitio === "Planta 1") {
        addOption(areaSelect, "Deschalado");
        addOption(areaSelect, "Almacen");
        addOption(areaSelect, "Secadora");
    } else if (sitio === "Planta 2") {
        // Add areas for Planta 2
    } else if (sitio === "Planta 3") {
        // Add areas for Planta 3
    }

    // Call updateTasks to update tasks based on the selected area
    updateTasks();
}

function updateTasks() {
    var area = document.getElementById("Area").value;
    var taskSelect = document.getElementById("Activity");
    taskSelect.innerHTML = "";

    // Add predetermined tasks based on selected area
    if (area === "Deschalado") {
        addOption(taskSelect, "Deschalado Manual");
        addOption(taskSelect, "Deschalado con Máquina");
        addOption(taskSelect, "Limpieza");
        // Add more tasks as needed
    } else if (area === "Secadora") {
        addOption(taskSelect, "Secado de maíz");
        addOption(taskSelect, "Descarte de marlo");
        // Add more tasks as needed for Secadora
    }

    // You can add more conditions based on areas to update tasks
}

function addOption(selectElement, optionText) {
    var option = document.createElement("option");
    option.text = optionText;
    selectElement.add(option);
}
function updateHazards() {
    var task = document.getElementById("Activity").value;
    var hazardSelect = document.getElementById("Hazard");
    hazardSelect.innerHTML = "";

    // Add predetermined hazards based on selected task
    if (task === "Deschalado Manual") {
        addOption(hazardSelect, "Tropiezos, resbalones y caídas");
        addOption(hazardSelect, "Estrés térmico");
        addOption(hazardSelect, "Golpe por o con objeto");
        // Add more hazards as needed for Deschalado Manual
    } else if (task === "Deschalado con Máquina") {
        // Add hazards for Deschalado con Máquina
    } else if (task === "Limpieza") {
        // Add hazards for Limpieza
    } else if (task === "Secado de maíz") {
        addOption(hazardSelect, "Quemaduras");
        addOption(hazardSelect, "Incendio");
        addOption(hazardSelect, "Fuego");
        addOption(hazardSelect, "Tropiezos, resbalones y caídas");
        addOption(hazardSelect, "Golpes por o con objeto");
        // Add more hazards as needed for Secado de maíz
    } else if (task === "Descarte de marlo") {
        // Add hazards for Descarte de marlo
    }

    // You can add more conditions based on tasks to update hazards
}
