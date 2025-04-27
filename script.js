// rack parts with unique ID
const rackCode = {
    1: "2C",
    2: "RD8A",
    3: "17",
    4: "37",
    5: "RD8",
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
    16: { code: "2C", name: "NET 2000mm" },
    17: { code: "2C", name: "NET 1800mm" },
    18: { code: "2C", name: "STAND 2000mm" },
    19: { code: "2C", name: "STAND 1800mm" },
    20: { code: "2C", name: "FATHI TOP" },
    21: { code: "2C", name: "FATHI BOTTOM" },
    22: { code: "2C", name: "SHELF TOP" },
    23: { code: "2C", name: "CLIP" },
    24: { code: "2C", name: "SHELF BOTTOM" },
    25: { code: "2C", name: "BRACKET FRONT" },
    26: { code: "2C", name: "BRACKET SIDE" },
    27: { code: "2C", name: "NET (END RACK)" },
    28: { code: "2C", name: "FATHI TOP (END RACK)" },
    29: { code: "2C", name: "FATHI BOTTOM (END RACK)" },
    30: { code: "2C", name: "SHELF TOP (END RACK)" },
    31: { code: "2C", name: "SHELF BOTTOM (END RACK)" },
    32: { code: "2C", name: "BRACKET FRONT (END RACK)" },
    33: { code: "37", name: "SHELF SCREW" },
    34: { code: "37", name: "SHELF BOLT" },
    35: { code: "17", name: "BACK BOARD" },
    37: { code: "17", name: "STAND SINGLE" },
    38: { code: "17", name: "STAND DOUBLE" },
    39: { code: "17", name: "FATHI TOP" },
    40: { code: "17", name: "FATHI BOTTOM" },
    41: { code: "17", name: "SHELF TOP" },
    42: { code: "17", name: "CLIP" },
    43: { code: "17", name: "SHELF BOTTOM" },
    44: { code: "17", name: "BRACKET FRONT" },
    45: { code: "2C", name: "NET 1500mm" },
    46: { code: "2C", name: "STAND 1500mm" },
    47: { code: "RD8A", name: "BACK PLATE SMALL (END RACK)" },
    48: { code: "RD8A", name: "BACK PLATE BIG (END RACK)" },
    49: { code: "RD8A", name: "STAND (END RACK)" },
    50: { code: "RD8A", name: "FATHI TOP (END RACK)" },
    51: { code: "RD8A", name: "FATHI BOTTOM (END RACK)" },
    52: { code: "RD8A", name: "SHELF TOP (END RACK)" },
    53: { code: "RD8A", name: "CLIP" },
    54: { code: "RD8A", name: "SHELF BOTTOM (END RACK)" },
    55: { code: "RD8A", name: "BRACKET FRONT (END RACK)" },
    56: { code: "RD8A", name: "BACK PLATE SMALL" },
    57: { code: "RD8A", name: "BACK PLATE BIG" },
    58: { code: "RD8A", name: "STAND SINGLE SIDE" },
    59: { code: "RD8A", name: "STAND DOUBLE SIDE" },
    60: { code: "RD8A", name: "FATHI TOP" },
    61: { code: "RD8A", name: "SHELF TOP" },
    62: { code: "RD8A", name: "SHELF BOTTOM" },
    63: { code: "RD8A", name: "BRACKET FRONT" },
    64: { code: "RD8", name: "BACK PLATE SMALL (END RACK)" },
    65: { code: "RD8", name: "BACK PLATE BIG (END RACK)" },
    66: { code: "RD8", name: "STAND (END RACK)" },
    67: { code: "RD8", name: "FATHI TOP (END RACK)" },
    68: { code: "RD8", name: "FATHI BOTTOM (END RACK)" },
    69: { code: "RD8", name: "SHELF TOP (END RACK)" },
    70: { code: "RD8", name: "CLIP" },
    71: { code: "RD8", name: "SHELF BOTTOM (END RACK)" },
    72: { code: "RD8", name: "BRACKET FRONT (END RACK)" },
    73: { code: "RD8", name: "BACK PLATE SMALL" },
    74: { code: "RD8", name: "BACK PLATE BIG" },
    75: { code: "RD8", name: "STAND SINGLE SIDE" },
    76: { code: "RD8", name: "STAND DOUBLE SIDE" },
    77: { code: "RD8", name: "FATHI TOP" },
    78: { code: "RD8", name: "SHELF TOP" },
    79: { code: "RD8", name: "SHELF BOTTOM" },
    80: { code: "RD8", name: "BRACKET FRONT" },
};

const rack = {
    1: { code: "37", name: "SINGLE RACK 6.5ft" },
    2: { code: "37", name: "MIDDLE RACK" },
    3: { code: "37", name: "END RACK" },
    4: { code: "37", name: "EXTRA SHELF" },
    5: { code: "2C", name: "SINGLE SIDE 6.5ft WHITE" },
    6: { code: "2C", name: "DOUBLE SIDE 6ft WHITE" },
    7: { code: "2C", name: "END RACK 6ft WHITE" },
    8: { code: "2C", name: "EXTRA SHELF WHTIE" },
    9: { code: "2C", name: "SINGLE SIDE 6.5ft BLACK" },
    10: { code: "2C", name: "END RACK 5ft BLACK" },
    11: { code: "17", name: "SINGLE SIDE" },
    12: { code: "17", name: "DOUBLE SIDE" },
    13: { code: "2C", name: "DOUBLE SIDE 6.5ft WHITE" },
    14: { code: "2C", name: "DOUBLE SIDE 6.5ft BLACK" },
    15: { code: "2C", name: "EXTRA SHELF SMALL BLACK" },
    16: { code: "RD8A", name: "SINGLE SIDE 6ft" },
    17: { code: "RD8A", name: "DOUBLE SIDE 5ft" },
    18: { code: "RD8A", name: "END RACK 5ft" },
    19: { code: "2C", name: "DOUBLE SIDE 6ft BLACK" },
    20: { code: "RD8", name: "SINGLE SIDE 6ft" },
    21: { code: "RD8", name: "DOUBLE SIDE 5ft" },
};

const colors = {
    1: "WHITE",
    2: "BLACK",
    3: "WOOD",
}

const rackCompositions = {
    1: {
        parts:
            [
                { partID: 1, quantity: 1, colorID: 3 },
                { partID: 4, quantity: 2, colorID: 2 },
                { partID: 7, quantity: 1, colorID: 2 },
                { partID: 8, quantity: 1, colorID: 2 },
                { partID: 9, quantity: 6, colorID: 3 },
                { partID: 10, quantity: 2, colorID: 3 },
                { partID: 11, quantity: 16, colorID: 2 },
                { partID: 12, quantity: 8, colorID: 2 },
                { partID: 33, quantity: 16, colorID: 2 },
                { partID: 34, quantity: 16, colorID: 2 },
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
                { partID: 33, quantity: 8, colorID: 2 },
                { partID: 34, quantity: 8, colorID: 2 },
            ],
    },
    4: {
        parts:
            [
                { partID: 9, quantity: 1, colorID: 3 },
                { partID: 11, quantity: 2, colorID: 2 },
                { partID: 12, quantity: 1, colorID: 2 },
                { partID: 33, quantity: 3, colorID: 2 },
                { partID: 34, quantity: 3, colorID: 2 },
            ],
    },
    5: {
        parts:
            [
                { partID: 16, quantity: 1, colorID: 1 },
                { partID: 18, quantity: 2, colorID: 1 },
                { partID: 20, quantity: 1, colorID: 1 },
                { partID: 21, quantity: 1, colorID: 1 },
                { partID: 22, quantity: 5, colorID: 1 },
                { partID: 23, quantity: 10, colorID: 1 },
                { partID: 24, quantity: 1, colorID: 1 },
                { partID: 25, quantity: 1, colorID: 1 },
                { partID: 26, quantity: 2, colorID: 1 },
            ],
    },
    6: {
        parts:
            [
                { partID: 17, quantity: 1, colorID: 1 },
                { partID: 19, quantity: 2, colorID: 1 },
                { partID: 20, quantity: 1, colorID: 1 },
                { partID: 21, quantity: 1, colorID: 1 },
                { partID: 22, quantity: 8, colorID: 1 },
                { partID: 23, quantity: 16, colorID: 1 },
                { partID: 24, quantity: 2, colorID: 1 },
                { partID: 25, quantity: 2, colorID: 1 },
                { partID: 26, quantity: 4, colorID: 1 },
            ],
    },
    7: {
        parts:
            [
                { partID: 27, quantity: 1, colorID: 1 },
                { partID: 19, quantity: 2, colorID: 1 },
                { partID: 28, quantity: 1, colorID: 1 },
                { partID: 29, quantity: 1, colorID: 1 },
                { partID: 30, quantity: 4, colorID: 1 },
                { partID: 23, quantity: 8, colorID: 1 },
                { partID: 31, quantity: 1, colorID: 1 },
                { partID: 32, quantity: 1, colorID: 1 },
                { partID: 26, quantity: 2, colorID: 1 },
            ],
    },
    8: {
        parts:
            [
                { partID: 22, quantity: 1, colorID: 1 },
                { partID: 23, quantity: 2, colorID: 1 },
            ],
    },
    9: {
        parts:
            [
                { partID: 16, quantity: 1, colorID: 2 },
                { partID: 18, quantity: 2, colorID: 2 },
                { partID: 20, quantity: 1, colorID: 2 },
                { partID: 21, quantity: 1, colorID: 2 },
                { partID: 22, quantity: 5, colorID: 2 },
                { partID: 23, quantity: 10, colorID: 2 },
                { partID: 24, quantity: 1, colorID: 2 },
                { partID: 25, quantity: 1, colorID: 2 },
                { partID: 26, quantity: 2, colorID: 2 },
            ],
    },
    10: {
        parts:
            [
                { partID: 45, quantity: 1, colorID: 2 },
                { partID: 46, quantity: 2, colorID: 2 },
                { partID: 28, quantity: 1, colorID: 2 },
                { partID: 29, quantity: 1, colorID: 2 },
                { partID: 30, quantity: 4, colorID: 2 },
                { partID: 23, quantity: 8, colorID: 2 },
                { partID: 31, quantity: 1, colorID: 2 },
                { partID: 32, quantity: 1, colorID: 2 },
                { partID: 26, quantity: 2, colorID: 2 },
            ],
    },
    11: {
        parts:
            [
                { partID: 35, quantity: 6, colorID: 1 },
                { partID: 37, quantity: 1, colorID: 1 },
                { partID: 41, quantity: 5, colorID: 1 },
                { partID: 42, quantity: 10, colorID: 1 },
                { partID: 43, quantity: 1, colorID: 1 },
                { partID: 44, quantity: 1, colorID: 1 },
            ],
    },
    12: {
        parts:
            [
                { partID: 35, quantity: 6, colorID: 1 },
                { partID: 38, quantity: 1, colorID: 1 },
                { partID: 41, quantity: 8, colorID: 1 },
                { partID: 42, quantity: 16, colorID: 1 },
                { partID: 43, quantity: 2, colorID: 1 },
                { partID: 44, quantity: 2, colorID: 1 },
            ],
    },
    13: {
        parts:
            [
                { partID: 16, quantity: 1, colorID: 1 },
                { partID: 18, quantity: 2, colorID: 1 },
                { partID: 20, quantity: 1, colorID: 1 },
                { partID: 21, quantity: 1, colorID: 1 },
                { partID: 22, quantity: 10, colorID: 1 },
                { partID: 23, quantity: 20, colorID: 1 },
                { partID: 24, quantity: 2, colorID: 1 },
                { partID: 25, quantity: 2, colorID: 1 },
                { partID: 26, quantity: 4, colorID: 1 },
            ],
    },
    14: {
        parts:
            [
                { partID: 16, quantity: 1, colorID: 2 },
                { partID: 18, quantity: 2, colorID: 2 },
                { partID: 20, quantity: 1, colorID: 2 },
                { partID: 21, quantity: 1, colorID: 2 },
                { partID: 22, quantity: 10, colorID: 2 },
                { partID: 23, quantity: 20, colorID: 2 },
                { partID: 24, quantity: 2, colorID: 2 },
                { partID: 25, quantity: 2, colorID: 2 },
                { partID: 26, quantity: 4, colorID: 2 },
            ],
    },
    15: {
        parts:
            [
                { partID: 30, quantity: 1, colorID: 2 },
                { partID: 23, quantity: 2, colorID: 2 },
            ],
    },
    16: {
        parts:
            [
                { partID: 57, quantity: 6, colorID: 2 },
                { partID: 58, quantity: 1, colorID: 2 },
                { partID: 60, quantity: 1, colorID: 2 },
                { partID: 61, quantity: 4, colorID: 2 },
                { partID: 53, quantity: 8, colorID: 2 },
                { partID: 62, quantity: 1, colorID: 2 },
                { partID: 63, quantity: 1, colorID: 2 },
            ],
    },
    17: {
        parts:
            [
                { partID: 56, quantity: 1, colorID: 2 },
                { partID: 57, quantity: 4, colorID: 2 },
                { partID: 59, quantity: 1, colorID: 2 },
                { partID: 60, quantity: 1, colorID: 2 },
                { partID: 61, quantity: 6, colorID: 2 },
                { partID: 53, quantity: 12, colorID: 2 },
                { partID: 62, quantity: 2, colorID: 2 },
                { partID: 63, quantity: 2, colorID: 2 },
            ],
    },
    18: {
        parts:
            [
                { partID: 47, quantity: 1, colorID: 2 },
                { partID: 48, quantity: 4, colorID: 2 },
                { partID: 49, quantity: 2, colorID: 2 },
                { partID: 50, quantity: 1, colorID: 2 },
                { partID: 52, quantity: 4, colorID: 2 },
                { partID: 53, quantity: 8, colorID: 2 },
                { partID: 54, quantity: 1, colorID: 2 },
                { partID: 55, quantity: 1, colorID: 2 },
            ],
    },
    19: {
        parts:
            [
                { partID: 17, quantity: 1, colorID: 2 },
                { partID: 19, quantity: 2, colorID: 2 },
                { partID: 20, quantity: 1, colorID: 2 },
                { partID: 21, quantity: 1, colorID: 2 },
                { partID: 22, quantity: 8, colorID: 2 },
                { partID: 23, quantity: 16, colorID: 2 },
                { partID: 24, quantity: 2, colorID: 2 },
                { partID: 25, quantity: 2, colorID: 2 },
                { partID: 26, quantity: 4, colorID: 2 },
            ],
    },
    20: {
        parts: [
            { partID: 74, quantity: 6, colorID: 1 },
            { partID: 75, quantity: 1, colorID: 1 },
            { partID: 77, quantity: 1, colorID: 1 },
            { partID: 78, quantity: 4, colorID: 1 },
            { partID: 70, quantity: 8, colorID: 1 },
            { partID: 79, quantity: 1, colorID: 1 },
            { partID: 80, quantity: 1, colorID: 1 },
        ],
    },
    21: {
        parts: [
            { partID: 73, quantity: 1, colorID: 1 },
            { partID: 74, quantity: 4, colorID: 1 },
            { partID: 76, quantity: 1, colorID: 1 },
            { partID: 77, quantity: 1, colorID: 1 },
            { partID: 78, quantity: 6, colorID: 1 },
            { partID: 70, quantity: 12, colorID: 1 },
            { partID: 79, quantity: 2, colorID: 1 },
            { partID: 80, quantity: 2, colorID: 1 },
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
    const selectedRackCode = rackCodeSelect.options[rackCodeSelect.selectedIndex].text;
    const availableRackTypes = Object.keys(rack).filter((id) => rack[id].code === selectedRackCode).map(Number);

    // clear the table if no rack types are available
    if (availableRackTypes.length === 0) {
        const rackTypeTableContainer = document.getElementById("rack-type-table-container");
        rackTypeTableContainer.innerHTML = "";
        return;
    }

    const rackTypesTableHTML = `
        <table class="w-full border-collapse border border-gray-300 text-lg mt-4">
            <tbody>
            ${availableRackTypes
            .map((id) => `
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

// Function to handle printing with row removal
function handlePrint() {
    const rows = Array.from(document.querySelectorAll("input"));

    rows.forEach((input) => {
        const quantity = parseInt(input.value, 10);
        if (quantity === 0) {
            const row = input.closest("tr");
            if (row) row.style.display = "none"; // Hide rows with quantity 0
        }
    });

    window.print();

    // Restore all rows after printing
    rows.forEach((input) => {
        const row = input.closest("tr");
        if (row) row.style.display = "";
    });
}

printBtn.addEventListener("click", handlePrint);
