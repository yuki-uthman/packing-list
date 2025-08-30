// rack parts with unique ID
const rackCode = {
    1: "2C",
    2: "RD8A",
    3: "RD8",
    4: "17",
    5: "37",
}

const rackParts = {
    // 2C parts (IDs 1-15)
    1: { code: "2C", name: "NET 2000mm" },
    2: { code: "2C", name: "NET 1800mm" },
    3: { code: "2C", name: "STAND 2000mm" },
    4: { code: "2C", name: "STAND 1800mm" },
    5: { code: "2C", name: "FATHI TOP" },
    6: { code: "2C", name: "FATHI BOTTOM" },
    7: { code: "2C", name: "SHELF TOP" },
    8: { code: "2C", name: "CLIP" },
    9: { code: "2C", name: "SHELF BOTTOM" },
    10: { code: "2C", name: "BRACKET FRONT" },
    11: { code: "2C", name: "BRACKET SIDE" },
    12: { code: "2C", name: "NET (END RACK)" },
    13: { code: "2C", name: "FATHI TOP (END RACK)" },
    14: { code: "2C", name: "FATHI BOTTOM (END RACK)" },
    15: { code: "2C", name: "SHELF TOP (END RACK)" },
    16: { code: "2C", name: "SHELF BOTTOM (END RACK)" },
    17: { code: "2C", name: "BRACKET FRONT (END RACK)" },
    18: { code: "2C", name: "NET 1500mm" },
    19: { code: "2C", name: "STAND 1500mm" },
    
    // RD8 parts (IDs 20-31)
    20: { code: "RD8", name: "BACK PLATE SMALL (END RACK)" },
    21: { code: "RD8", name: "BACK PLATE BIG (END RACK)" },
    22: { code: "RD8", name: "STAND (END RACK)" },
    23: { code: "RD8", name: "FATHI TOP (END RACK)" },
    24: { code: "RD8", name: "FATHI BOTTOM (END RACK)" },
    25: { code: "RD8", name: "SHELF TOP (END RACK)" },
    26: { code: "RD8", name: "CLIP" },
    27: { code: "RD8", name: "SHELF BOTTOM (END RACK)" },
    28: { code: "RD8", name: "BRACKET FRONT (END RACK)" },
    29: { code: "RD8", name: "BACK PLATE SMALL" },
    30: { code: "RD8", name: "BACK PLATE BIG" },
    31: { code: "RD8", name: "STAND SINGLE SIDE" },
    32: { code: "RD8", name: "STAND DOUBLE SIDE" },
    33: { code: "RD8", name: "FATHI TOP" },
    34: { code: "RD8", name: "SHELF TOP" },
    35: { code: "RD8", name: "SHELF BOTTOM" },
    36: { code: "RD8", name: "BRACKET FRONT" },
    
    // RD8A parts (IDs 37-50)
    37: { code: "RD8A", name: "BACK PLATE SMALL (END RACK)" },
    38: { code: "RD8A", name: "BACK PLATE BIG (END RACK)" },
    39: { code: "RD8A", name: "STAND (END RACK)" },
    40: { code: "RD8A", name: "FATHI TOP (END RACK)" },
    41: { code: "RD8A", name: "FATHI BOTTOM (END RACK)" },
    42: { code: "RD8A", name: "SHELF TOP (END RACK)" },
    43: { code: "RD8A", name: "CLIP" },
    44: { code: "RD8A", name: "SHELF BOTTOM (END RACK)" },
    45: { code: "RD8A", name: "BRACKET FRONT (END RACK)" },
    46: { code: "RD8A", name: "BACK PLATE SMALL" },
    47: { code: "RD8A", name: "BACK PLATE BIG" },
    48: { code: "RD8A", name: "STAND SINGLE SIDE" },
    49: { code: "RD8A", name: "STAND DOUBLE SIDE" },
    50: { code: "RD8A", name: "FATHI TOP" },
    51: { code: "RD8A", name: "SHELF TOP" },
    52: { code: "RD8A", name: "SHELF BOTTOM" },
    53: { code: "RD8A", name: "BRACKET FRONT" },
    
    // 37 parts (IDs 54-75)
    54: { code: "37", name: "BACK BOARD SINGLE RACK 6.5ft" },
    55: { code: "37", name: "BACK BOARD MIDDLE RACK" },
    56: { code: "37", name: "SIDE BOARD END RACK" },
    57: { code: "37", name: "FRAME SINGLE RACK" },
    58: { code: "37", name: "FRAME MIDDLE RACK" },
    59: { code: "37", name: "FRAME END RACK" },
    60: { code: "37", name: "FATHI TOP" },
    61: { code: "37", name: "FATHI BOTTOM" },
    62: { code: "37", name: "SHELF TOP" },
    63: { code: "37", name: "SHELF BOTTOM" },
    64: { code: "37", name: "SHELF CLIP" },
    65: { code: "37", name: "SHELF BAR LONG" },
    66: { code: "37", name: "SHELF BAR SHORT" },
    67: { code: "37", name: "SHELF TOP SHORT" },
    68: { code: "37", name: "SHELF BOTTOM SHORT" },
    69: { code: "37", name: "SHELF SCREW" },
    70: { code: "37", name: "SHELF BOLT" },
    71: { code: "37", name: "BACK BOARD SINGLE RACK 7.5ft" },
    72: { code: "37", name: "FRAME SINGLE RACK 7.5ft" },
    
    // 17 parts (IDs 73-80)
    73: { code: "17", name: "BACK BOARD" },
    74: { code: "17", name: "STAND SINGLE" },
    75: { code: "17", name: "STAND DOUBLE" },
    76: { code: "17", name: "FATHI TOP" },
    77: { code: "17", name: "FATHI BOTTOM" },
    78: { code: "17", name: "SHELF TOP" },
    79: { code: "17", name: "CLIP" },
    80: { code: "17", name: "SHELF BOTTOM" },
    81: { code: "17", name: "BRACKET FRONT" },
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
    22: { code: "37", name: "SINGLE RACK 7.5ft" },
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
                { partID: 54, quantity: 1, colorID: 3 },
                { partID: 57, quantity: 2, colorID: 2 },
                { partID: 60, quantity: 1, colorID: 2 },
                { partID: 61, quantity: 1, colorID: 2 },
                { partID: 62, quantity: 4, colorID: 3 },
                { partID: 63, quantity: 1, colorID: 3 },
                { partID: 64, quantity: 10, colorID: 2 },
                { partID: 65, quantity: 5, colorID: 2 },
                { partID: 69, quantity: 15, colorID: 2 },
                { partID: 70, quantity: 15, colorID: 2 },
            ],
    },
    2: {
        parts:
            [
                { partID: 55, quantity: 1, colorID: 3 },
                { partID: 58, quantity: 2, colorID: 2 },
                { partID: 60, quantity: 1, colorID: 2 },
                { partID: 61, quantity: 1, colorID: 2 },
                { partID: 62, quantity: 6, colorID: 3 },
                { partID: 63, quantity: 2, colorID: 3 },
                { partID: 64, quantity: 16, colorID: 2 },
                { partID: 65, quantity: 10, colorID: 2 },
                { partID: 69, quantity: 24, colorID: 2 },
                { partID: 70, quantity: 24, colorID: 2 },
            ],
    },
    3: {
        parts:
            [
                { partID: 56, quantity: 2, colorID: 3 },
                { partID: 59, quantity: 2, colorID: 2 },
                { partID: 64, quantity: 8, colorID: 2 },
                { partID: 66, quantity: 4, colorID: 2 },
                { partID: 67, quantity: 3, colorID: 2 },
                { partID: 68, quantity: 1, colorID: 2 },
                { partID: 69, quantity: 8, colorID: 2 },
                { partID: 70, quantity: 8, colorID: 2 },
            ],
    },
    4: {
        parts:
            [
                { partID: 62, quantity: 1, colorID: 3 },
                { partID: 64, quantity: 2, colorID: 2 },
                { partID: 65, quantity: 1, colorID: 2 },
                { partID: 69, quantity: 3, colorID: 2 },
                { partID: 70, quantity: 3, colorID: 2 },
            ],
    },
    5: {
        parts:
            [
                { partID: 1, quantity: 1, colorID: 1 },
                { partID: 3, quantity: 2, colorID: 1 },
                { partID: 5, quantity: 1, colorID: 1 },
                { partID: 6, quantity: 1, colorID: 1 },
                { partID: 7, quantity: 5, colorID: 1 },
                { partID: 8, quantity: 10, colorID: 1 },
                { partID: 9, quantity: 1, colorID: 1 },
                { partID: 10, quantity: 1, colorID: 1 },
                { partID: 11, quantity: 2, colorID: 1 },
            ],
    },
    6: {
        parts:
            [
                { partID: 2, quantity: 1, colorID: 1 },
                { partID: 4, quantity: 2, colorID: 1 },
                { partID: 5, quantity: 1, colorID: 1 },
                { partID: 6, quantity: 1, colorID: 1 },
                { partID: 7, quantity: 8, colorID: 1 },
                { partID: 8, quantity: 16, colorID: 1 },
                { partID: 9, quantity: 2, colorID: 1 },
                { partID: 10, quantity: 2, colorID: 1 },
                { partID: 11, quantity: 4, colorID: 1 },
            ],
    },
    7: {
        parts:
            [
                { partID: 12, quantity: 1, colorID: 1 },
                { partID: 4, quantity: 2, colorID: 1 },
                { partID: 13, quantity: 1, colorID: 1 },
                { partID: 14, quantity: 1, colorID: 1 },
                { partID: 15, quantity: 4, colorID: 1 },
                { partID: 8, quantity: 8, colorID: 1 },
                { partID: 16, quantity: 1, colorID: 1 },
                { partID: 17, quantity: 1, colorID: 1 },
                { partID: 11, quantity: 2, colorID: 1 },
            ],
    },
    8: {
        parts:
            [
                { partID: 7, quantity: 1, colorID: 1 },
                { partID: 8, quantity: 2, colorID: 1 },
            ],
    },
    9: {
        parts:
            [
                { partID: 1, quantity: 1, colorID: 2 },
                { partID: 3, quantity: 2, colorID: 2 },
                { partID: 5, quantity: 1, colorID: 2 },
                { partID: 6, quantity: 1, colorID: 2 },
                { partID: 7, quantity: 5, colorID: 2 },
                { partID: 8, quantity: 10, colorID: 2 },
                { partID: 9, quantity: 1, colorID: 2 },
                { partID: 10, quantity: 1, colorID: 2 },
                { partID: 11, quantity: 2, colorID: 2 },
            ],
    },
    10: {
        parts:
            [
                { partID: 18, quantity: 1, colorID: 2 },
                { partID: 19, quantity: 2, colorID: 2 },
                { partID: 13, quantity: 1, colorID: 2 },
                { partID: 14, quantity: 1, colorID: 2 },
                { partID: 15, quantity: 4, colorID: 2 },
                { partID: 8, quantity: 8, colorID: 2 },
                { partID: 16, quantity: 1, colorID: 2 },
                { partID: 17, quantity: 1, colorID: 2 },
                { partID: 11, quantity: 2, colorID: 2 },
            ],
    },
    11: {
        parts:
            [
                { partID: 73, quantity: 6, colorID: 1 },
                { partID: 74, quantity: 1, colorID: 1 },
                { partID: 76, quantity: 5, colorID: 1 },
                { partID: 78, quantity: 10, colorID: 1 },
                { partID: 79, quantity: 1, colorID: 1 },
                { partID: 80, quantity: 1, colorID: 1 },
            ],
    },
    12: {
        parts:
            [
                { partID: 73, quantity: 6, colorID: 1 },
                { partID: 75, quantity: 1, colorID: 1 },
                { partID: 76, quantity: 8, colorID: 1 },
                { partID: 78, quantity: 16, colorID: 1 },
                { partID: 79, quantity: 2, colorID: 1 },
                { partID: 80, quantity: 2, colorID: 1 },
            ],
    },
    13: {
        parts:
            [
                { partID: 1, quantity: 1, colorID: 1 },
                { partID: 3, quantity: 2, colorID: 1 },
                { partID: 5, quantity: 1, colorID: 1 },
                { partID: 6, quantity: 1, colorID: 1 },
                { partID: 7, quantity: 10, colorID: 1 },
                { partID: 8, quantity: 20, colorID: 1 },
                { partID: 9, quantity: 2, colorID: 1 },
                { partID: 10, quantity: 2, colorID: 1 },
                { partID: 11, quantity: 4, colorID: 1 },
            ],
    },
    14: {
        parts:
            [
                { partID: 1, quantity: 1, colorID: 2 },
                { partID: 3, quantity: 2, colorID: 2 },
                { partID: 5, quantity: 1, colorID: 2 },
                { partID: 6, quantity: 1, colorID: 2 },
                { partID: 7, quantity: 10, colorID: 2 },
                { partID: 8, quantity: 20, colorID: 2 },
                { partID: 9, quantity: 2, colorID: 2 },
                { partID: 10, quantity: 2, colorID: 2 },
                { partID: 11, quantity: 4, colorID: 2 },
            ],
    },
    15: {
        parts:
            [
                { partID: 15, quantity: 1, colorID: 2 },
                { partID: 8, quantity: 2, colorID: 2 },
            ],
    },
    16: {
        parts:
            [
                { partID: 47, quantity: 6, colorID: 2 },
                { partID: 48, quantity: 1, colorID: 2 },
                { partID: 50, quantity: 1, colorID: 2 },
                { partID: 51, quantity: 4, colorID: 2 },
                { partID: 43, quantity: 8, colorID: 2 },
                { partID: 52, quantity: 1, colorID: 2 },
                { partID: 53, quantity: 1, colorID: 2 },
            ],
    },
    17: {
        parts:
            [
                { partID: 46, quantity: 1, colorID: 2 },
                { partID: 47, quantity: 4, colorID: 2 },
                { partID: 49, quantity: 1, colorID: 2 },
                { partID: 50, quantity: 1, colorID: 2 },
                { partID: 51, quantity: 6, colorID: 2 },
                { partID: 43, quantity: 12, colorID: 2 },
                { partID: 52, quantity: 2, colorID: 2 },
                { partID: 53, quantity: 2, colorID: 2 },
            ],
    },
    18: {
        parts:
            [
                { partID: 37, quantity: 1, colorID: 2 },
                { partID: 38, quantity: 4, colorID: 2 },
                { partID: 39, quantity: 2, colorID: 2 },
                { partID: 40, quantity: 1, colorID: 2 },
                { partID: 42, quantity: 4, colorID: 2 },
                { partID: 43, quantity: 8, colorID: 2 },
                { partID: 44, quantity: 1, colorID: 2 },
                { partID: 45, quantity: 1, colorID: 2 },
            ],
    },
    19: {
        parts:
            [
                { partID: 2, quantity: 1, colorID: 2 },
                { partID: 4, quantity: 2, colorID: 2 },
                { partID: 5, quantity: 1, colorID: 2 },
                { partID: 6, quantity: 1, colorID: 2 },
                { partID: 7, quantity: 8, colorID: 2 },
                { partID: 8, quantity: 16, colorID: 2 },
                { partID: 9, quantity: 2, colorID: 2 },
                { partID: 10, quantity: 2, colorID: 2 },
                { partID: 11, quantity: 4, colorID: 2 },
            ],
    },
    20: {
        parts: [
            { partID: 30, quantity: 6, colorID: 1 },
            { partID: 31, quantity: 2, colorID: 1 },
            { partID: 33, quantity: 1, colorID: 1 },
            { partID: 34, quantity: 4, colorID: 1 },
            { partID: 26, quantity: 8, colorID: 1 },
            { partID: 35, quantity: 1, colorID: 1 },
            { partID: 36, quantity: 1, colorID: 1 },
        ],
    },
    21: {
        parts: [
            { partID: 29, quantity: 1, colorID: 1 },
            { partID: 30, quantity: 4, colorID: 1 },
            { partID: 32, quantity: 2, colorID: 1 },
            { partID: 33, quantity: 1, colorID: 1 },
            { partID: 34, quantity: 6, colorID: 1 },
            { partID: 26, quantity: 12, colorID: 1 },
            { partID: 35, quantity: 2, colorID: 1 },
            { partID: 36, quantity: 2, colorID: 1 },
        ],
    },
    22: {
        parts:
            [
                { partID: 71, quantity: 1, colorID: 3 },
                { partID: 72, quantity: 2, colorID: 2 },
                { partID: 60, quantity: 1, colorID: 2 },
                { partID: 61, quantity: 1, colorID: 2 },
                { partID: 62, quantity: 4, colorID: 3 },
                { partID: 63, quantity: 1, colorID: 3 },
                { partID: 64, quantity: 10, colorID: 2 },
                { partID: 65, quantity: 5, colorID: 2 },
                { partID: 69, quantity: 15, colorID: 2 },
                { partID: 70, quantity: 15, colorID: 2 },
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
