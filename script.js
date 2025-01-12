// rack parts with unique ID
const rackCode = {
    1: "2C",
    2: "8",
    3: "17",
    4: "37",
}

const rackParts = {
    1: { code: "37", name: "BACK BOARD SINGLE RACK 6.5ft" },
    2: { code: "37", name: "BACK BOARD MIDDLE RACK" },
    3: { code: "37", name: "SIDE BOARD END RACK" },
    4: { code: "37", name: "FRAME SINGLE RACK" },
    5: { code: "37", name: "FRAME MIDDLE RACK" },
    6: { code: "37", name: "FRAME END RACK" },
    7: { code: "37", name: "FATHI TOP" },
    8: { code: "37", name: "FATHI BOTTOM" },
    9: { code: "37", name: "SHELF TOP" },
    10: { code: "37", name: "SHELF BOTTOM" },
    11: { code: "37", name: "SHELF CLIP" },
    12: { code: "37", name: "SHELF BAR LONG" },
    13: { code: "37", name: "SHELF BAR SHORT" },
    14: { code: "37", name: "SHELF TOP SHORT" },
    15: { code: "37", name: "SHELF BOTTOM SHORT" },
};

const rack = {
    1: { code: "37", name: "SINGLE RACK 6.5ft" },
    2: { code: "37", name: "MIDDLE RACK" },
    3: { code: "37", name: "END RACK" },
    4: { code: "37", name: "EXTRA SHELF" },
};

const colors = {
    1: "WHITE",
    2: "BLACK",
    3: "WOOD",
    4: "BLACK",
}

const rackCompositions = {
    1: {
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
    },
    2: {
        parts:
            [
                { partID: 2, quantity: 1, colorID: 3 },
                { partID: 5, quantity: 2, colorID: 2 },
                { partID: 7, quantity: 1, colorID: 2 },
                { partID: 8, quantity: 1, colorID: 2 },
                { partID: 9, quantity: 6, colorID: 3 },
                { partID: 10, quantity: 2, colorID: 3 },
                { partID: 11, quantity: 16, colorID: 2 },
                { partID: 12, quantity: 8, colorID: 2 },
            ],
    },
    3: {
        parts:
            [
                { partID: 3, quantity: 2, colorID: 3 },
                { partID: 6, quantity: 2, colorID: 2 },
                { partID: 11, quantity: 8, colorID: 2 },
                { partID: 13, quantity: 4, colorID: 2 },
                { partID: 14, quantity: 3, colorID: 2 },
                { partID: 15, quantity: 1, colorID: 2 },
            ],
    },
    4: {
        parts:
            [
                { partID: 9, quantity: 1, colorID: 3 },
                { partID: 11, quantity: 2, colorID: 2 },
                { partID: 12, quantity: 1, colorID: 2 },
            ],
    },

}

// DOM elements
const rackCodeSelect = document.getElementById("rack-code");
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

// Function to display all rack types in a table with quantity input fields
function displayRackTypesTable() {
    const dropdown = document.getElementById("rack-code");
    const selectedRackCode = dropdown.options[dropdown.selectedIndex].text;
    const availableRackTypes = Object.keys(rack).filter((id) => rack[id].code === selectedRackCode);

    // clear the table if no rack types are available
    if (availableRackTypes.length === 0) {
        const rackTypeTableContainer = document.getElementById("rack-type-table-container");
        rackTypeTableContainer.innerHTML = "";
        return;
    }

    const rackTypesTableHTML = `
        <table class="w-full border-collapse border border-gray-300 text-lg mt-4">
            <tbody>
                ${Object.keys(rack)
                    .map(
                        (id) => `
                        <tr>
                            <td class="border border-gray-300 px-4 py-1">${rack[id].name}</td>
                            <td class="border border-gray-300 px-4 py-1 text-center">
                                <input
                                    type="number"
                                    id="quantity-${id}"
                                    min="0"
                                    value="0"
                                    class="w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-1"
                                />
                            </td>
                        </tr>
                    `
                    )
                    .join("")}
            </tbody>
        </table>
    `;

    const rackTypeTableContainer = document.getElementById("rack-type-table-container");
    rackTypeTableContainer.innerHTML = rackTypesTableHTML;
}

// Function to generate a table with parts based on entered quantities
function generatePartsTable() {
    const rackTypeTableContainer = document.getElementById("rack-type-table-container");
    const rows = Array.from(rackTypeTableContainer.querySelectorAll("tr"));
    const tableData = [];

    rows.forEach((row) => {
        const rackID = parseInt(row.querySelector("input").id.replace("quantity-", ""), 10);
        const quantityInput = row.querySelector("input");
        const quantity = parseInt(quantityInput.value, 10);

        // Skip rows with invalid or zero quantities
        if (!rackID || isNaN(quantity) || quantity < 1) return;

        // Find the composition for the selected rack type
        const composition = rackCompositions[rackID];
        if (!composition) return;

        composition.parts.forEach((part) => {
            const partDetails = rackParts[part.partID];
            const color = colors[part.colorID];
            const existingPart = tableData.find((item) => item.name === partDetails.name && item.color === color);

            if (existingPart) {
                // If part already exists, update its quantity
                existingPart.quantity += part.quantity * quantity;
            } else {
                // Otherwise, add the part to the table data
                tableData.push({
                    name: partDetails.name,
                    color: color,
                    quantity: part.quantity * quantity,
                });
            }
        });
    });

    // Generate the table HTML
    if (tableData.length === 0) {
        return;
    }

    const tableHTML = `
        <table class="w-full border-collapse border border-gray-300 text-lg mt-4">
            <thead>
                <tr class="bg-gray-200">
                    <th class="border border-gray-300 px-4 py-1 text-left">Part Name</th>
                    <th class="border border-gray-300 px-4 py-1 text-center">Color</th>
                    <th class="border border-gray-300 px-4 py-1 text-center">PCS</th>
                    <th class="border border-gray-300 px-4 py-1 text-center">Staff</th>
                </tr>
            </thead>
            <tbody>
                ${tableData
                    .map(
                        (part) => `
                        <tr>
                            <td class="border border-gray-300 px-4 py-1">${part.name}</td>
                            <td class="border border-gray-300 px-4 py-1 text-center">${part.color}</td>
                            <td class="border border-gray-300 px-4 py-1 text-center">${part.quantity}</td>
                            <td class="border border-gray-300 px-4 py-1 text-center"></td>
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

rackCodeSelect.addEventListener("change", () => {
    if (rackCodeSelect.value) {
        displayRackTypesTable();
        generatePartsTable(); // Update parts table on rack code change
    }
});

// Add event listener to dynamically update the parts table whenever a quantity changes
document.addEventListener("input", (e) => {
    if (e.target.id.startsWith("quantity-")) {
        generatePartsTable();
    }
});

printBtn.addEventListener("click", () => {
    printBtn.style.display = "none";
    window.print();
    setTimeout(() => {
        printBtn.style.display = "";
    }, 100); // Restore button after printing
});
