// rack parts with unique ID

const rackCode = {
    1: "2C",
    2: "8",
    3: "17",
    4: "37",
}

const rackParts = {
    1: { code: 37, name: "BACK BOARD SINGLE RACK 6.5ft" },
    2: { code: 37, name: "BACK BOARD MIDDLE RACK" },
    3: { code: 37, name: "SIDE BOARD END RACK" },
    4: { code: 37, name: "FRAME SINGLE RACK" },
    5: { code: 37, name: "FRAME MIDDLE RACK" },
    6: { code: 37, name: "FRAME END RACK" },
    7: { code: 37, name: "FATHI TOP" },
    8: { code: 37, name: "FATHI BOTTOM" },
    9: { code: 37, name: "SHELF TOP" },
    10: { code: 37, name: "SHELF BOTTOM" },
    11: { code: 37, name: "SHELF CLIP" },
    12: { code: 37, name: "SHELF BAR LONG" },
    13: { code: 37, name: "SHELF BAR SHORT" },
}

const rackType = {
    1: { code: 37, name: "SINGLE RACK 6.5ft" },
    2: { code: 37, name: "MIDDLE RACK" },
    3: { code: 37, name: "END RACK" },
}

const colors = {
    1: "WHITE",
    2: "BLACK",
    3: "WOOD",
    4: "BLACK",
}

const rackCompositions = {
    1: {
        rackTypeID: 1,
        parts:
            [
                { partID: 1, quantity: 1, colorID: 3 },
                { partID: 4, quantity: 2, colorID: 2 },
                { partID: 7, quantity: 1, colorID: 2 },
                { partID: 8, quantity: 1, colorID: 2 },
                { partID: 9, quantity: 4, colorID: 3 },
                { partID: 10, quantity: 1, colorID: 3 },
                { partID: 11, quantity: 10, colorID: 2 },
                { partID: 12, quantity: 5, colorID: 2 },
            ],
    }

}

// DOM elements
const rackCodeSelect = document.getElementById("rack-code");
const rackTypeSelect = document.getElementById("rack-type");
const quantityInput = document.getElementById("quantity");
const tableContainer = document.getElementById("table-container");
const printBtn = document.getElementById("print-btn");

// Populate rack code options
function populateRackCodeOptions() {
    rackCodeSelect.innerHTML = '<option value="">Rack</option>';
    Object.keys(rackCode).forEach((id) => {
        const option = document.createElement("option");
        option.value = id;
        option.textContent = rackCode[id];
        rackCodeSelect.appendChild(option);
    });
}

// Populate Rack Type Options
function populateRackTypeOptions() {
    rackTypeSelect.innerHTML = '<option value="">Type</option>'; // Add default option
    Object.keys(rackType).forEach((id) => {
        const option = document.createElement("option");
        option.value = id; // Assign the ID as the value
        option.textContent = rackType[id].name; // Use the name property for display
        rackTypeSelect.appendChild(option);
    });

    // Enable dropdown after population
    rackTypeSelect.disabled = false;
}

// Generate table based on selected rack type and quantity
function generateTable() {
    const selectedRackTypeID = parseInt(rackTypeSelect.value, 10);
    const quantity = parseInt(quantityInput.value, 10);

    if (!selectedRackTypeID || quantity < 1) {
        tableContainer.innerHTML = "<p class='text-red-500'>Please select a rack type and enter a valid quantity.</p>";
        return;
    }

    // Find the composition for the selected rack
    const composition = rackCompositions[selectedRackTypeID];
    if (!composition) {
        tableContainer.innerHTML = "<p class='text-red-500'>No composition found for the selected rack type.</p>";
        return;
    }

    // Get the parts for the composition
    const parts = composition.parts.map((part) => {
        const partDetails = rackParts[part.partID];
        const color = colors[part.colorID];
        return {
            name: partDetails.name,
            color: color,
            quantity: part.quantity * quantity,
        };
    });

    // Generate the table
    const tableHTML = `
        <table class="w-full border-collapse border border-gray-300 text-sm mt-4">
            <thead>
                <tr class="bg-gray-200">
                    <th class="border border-gray-300 px-4 py-2 text-left">Part Name</th>
                    <th class="border border-gray-300 px-4 py-2 text-center">Color</th>
                    <th class="border border-gray-300 px-4 py-2 text-center">Quantity</th>
                </tr>
            </thead>
            <tbody>
                ${parts
                    .map(
                        (part) => `
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">${part.name}</td>
                            <td class="border border-gray-300 px-4 py-2 text-center">${part.color}</td>
                            <td class="border border-gray-300 px-4 py-2 text-center">${part.quantity}</td>
                        </tr>`
                    )
                    .join("")}
            </tbody>
        </table>
    `;

    tableContainer.innerHTML = tableHTML;
}

// Event Listeners
populateRackCodeOptions();
rackCodeSelect.addEventListener("change", populateRackTypeOptions);
rackTypeSelect.addEventListener("change", generateTable);
quantityInput.addEventListener("input", generateTable);

printBtn.addEventListener('click', () => {
  printBtn.style.display = 'none';
  window.print();
  setTimeout(() => {
    printBtn.style.display = '';
  }, 100); // Restore button after printing
});
