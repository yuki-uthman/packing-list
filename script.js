// rack parts with unique ID
const rackCode = {
    1: "2C",
    2: "RD8A",
    3: "RD8",
    4: "17",
    5: "37",
    5: "RD8F",
};

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
    20: { code: "RD8", name: "BACKPLATE 700x340x220mm" },
    21: { code: "RD8", name: "BACKPLATE 700x340x320mm" },
    22: { code: "RD8", name: "STAND (END RACK) 1950mm" },
    23: { code: "RD8", name: "FATHI TOP (END RACK)" },
    24: { code: "RD8", name: "FATHI BOTTOM (END RACK)" },
    25: { code: "RD8", name: "SHELF TOP (END RACK)" },
    26: { code: "RD8", name: "CLIP" },
    27: { code: "RD8", name: "SHELF BOTTOM (END RACK)" },
    28: { code: "RD8", name: "BRACKET FRONT (END RACK)" },
    29: { code: "RD8", name: "BACKPLATE 900x340x220mm" },
    30: { code: "RD8", name: "BACKPLATE 900x340x320mm" },
    31: { code: "RD8", name: "STAND SINGLE SIDE 1950mm" },
    32: { code: "RD8", name: "STAND DOUBLE SIDE 1950mm" },
    33: { code: "RD8", name: "FATHI TOP" },
    34: { code: "RD8", name: "SHELF TOP" },
    35: { code: "RD8", name: "SHELF BOTTOM" },
    36: { code: "RD8", name: "BRACKET FRONT" },

    // RD8A parts (IDs 37-50)
    37: { code: "RD8A", name: "BACKPLATE 700x340x220mm" },
    38: { code: "RD8A", name: "BACKPLATE 700x340x320mm" },
    39: { code: "RD8A", name: "STAND SINGLE SIDE 1550mm" },
    40: { code: "RD8A", name: "FATHI TOP (END RACK)" },
    41: { code: "RD8A", name: "FATHI BOTTOM (END RACK)" },
    42: { code: "RD8A", name: "SHELF TOP (END RACK)" },
    43: { code: "RD8A", name: "CLIP" },
    44: { code: "RD8A", name: "SHELF BOTTOM (END RACK)" },
    45: { code: "RD8A", name: "BRACKET FRONT (END RACK)" },
    46: { code: "RD8A", name: "BACKPLATE 900x340x220mm" },
    47: { code: "RD8A", name: "BACKPLATE 900x340x320mm" },
    48: { code: "RD8A", name: "STAND SINGLE SIDE 1950mm" },
    49: { code: "RD8A", name: "STAND DOUBLE SIDE 1950mm" },
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

    82: { code: "RD8A", name: "STAND DOUBLE SIDE 1550mm" },

    // Flat Backplates
    83: { code: "RD8F", name: "STAND SINGLE SIDE 1950mm" },
    84: { code: "RD8F", name: "STAND DOUBLE SIDE 1950mm" },
    85: { code: "RD8F", name: "STAND SINGLE SIDE 1550mm" },
    86: { code: "RD8F", name: "STAND DOUBLE SIDE 1550mm" },
    87: { code: "RD8F", name: "BACKPLATE 900x340x220mm" },
    88: { code: "RD8F", name: "BACKPLATE 900x340x320mm" },
    89: { code: "RD8F", name: "FATHI TOP 900mm" },
    90: { code: "RD8F", name: "SHELF TOP 900mm" },
    91: { code: "RD8F", name: "SHELF BOTTOM 900mm" },
    92: { code: "RD8F", name: "BRACKET FRONT 900mm" },
    93: { code: "RD8F", name: "CLIP" },
    94: { code: "RD8F", name: "BACKPLATE 700x340x220mm" },
    95: { code: "RD8F", name: "BACKPLATE 700x340x320mm" },
    96: { code: "RD8F", name: "FATHI TOP 700mm" },
    97: { code: "RD8F", name: "FATHI BOTTOM 700mm" },
    98: { code: "RD8F", name: "SHELF TOP 700mm" },
    99: { code: "RD8F", name: "SHELF BOTTOM 700mm" },
    100: { code: "RD8F", name: "BRACKET FRONT 700mm" },
};

const rack = {
    1: { code: "37", name: "SINGLE RACK 6.5ft" },
    2: { code: "37", name: "MIDDLE RACK" },
    3: { code: "37", name: "END RACK" },
    4: { code: "37", name: "EXTRA SHELF" },
    5: { code: "2C", name: "SINGLE SIDE 6.5ft WHITE" },
    6: { code: "2C", name: "DOUBLE SIDE 6ft WHITE" },
    7: { code: "2C", name: "END RACK 6ft WHITE" },
    9: { code: "2C", name: "SINGLE SIDE 6.5ft BLACK" },
    10: { code: "2C", name: "END RACK 5ft BLACK" },
    11: { code: "17", name: "SINGLE SIDE" },
    12: { code: "17", name: "DOUBLE SIDE" },
    13: { code: "2C", name: "DOUBLE SIDE 6.5ft WHITE" },
    14: { code: "2C", name: "DOUBLE SIDE 6.5ft BLACK" },
    16: { code: "RD8A", name: "SINGLE SIDE 6.5ft" },
    17: { code: "RD8A", name: "DOUBLE SIDE 6.5ft" },
    18: { code: "RD8A", name: "END RACK 5ft" },
    19: { code: "2C", name: "DOUBLE SIDE 6ft BLACK" },
    20: { code: "RD8", name: "SINGLE SIDE 6.5ft" },
    21: { code: "RD8", name: "DOUBLE SIDE 6.5ft" },
    22: { code: "37", name: "SINGLE RACK 7.5ft" },
    23: { code: "RD8A", name: "DOUBLE SIDE 5ft" },
    24: { code: "RD8F", name: "SINGLE 6.5ft (Flat Board)" },
    25: { code: "RD8F", name: "DOUBLE 6.5ft (Flat Board)" },
    26: { code: "RD8F", name: "END RACK 6.5ft (Flat Board)" },
    27: { code: "RD8F", name: "DOUBLE 5ft (Flat Board)" },
    28: { code: "RD8F", name: "END RACK 5ft (Flat Board)" },
};

const colors = {
    1: "WHITE",
    2: "BLACK",
    3: "WOOD",
    4: "GRAY",
};

const rackCompositions = {
    1: {
        parts: [
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
        parts: [
            { partID: 55, quantity: 1, colorID: 3 },
            { partID: 58, quantity: 2, colorID: 2 },
            { partID: 60, quantity: 1, colorID: 2 },
            { partID: 61, quantity: 1, colorID: 2 },
            { partID: 62, quantity: 6, colorID: 3 },
            { partID: 63, quantity: 2, colorID: 3 },
            { partID: 64, quantity: 16, colorID: 2 },
            { partID: 65, quantity: 8, colorID: 2 },
            { partID: 69, quantity: 24, colorID: 2 },
            { partID: 70, quantity: 24, colorID: 2 },
        ],
    },
    3: {
        parts: [
            { partID: 56, quantity: 2, colorID: 3 },
            { partID: 59, quantity: 2, colorID: 2 },
            { partID: 64, quantity: 8, colorID: 2 },
            { partID: 66, quantity: 4, colorID: 2 },
            { partID: 67, quantity: 3, colorID: 2 },
            { partID: 68, quantity: 1, colorID: 2 },
            { partID: 69, quantity: 12, colorID: 2 },
            { partID: 70, quantity: 12, colorID: 2 },
        ],
    },
    4: {
        parts: [
            { partID: 62, quantity: 1, colorID: 3 },
            { partID: 64, quantity: 2, colorID: 2 },
            { partID: 65, quantity: 1, colorID: 2 },
            { partID: 69, quantity: 3, colorID: 2 },
            { partID: 70, quantity: 3, colorID: 2 },
        ],
    },
    5: {
        parts: [
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
        parts: [
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
        parts: [
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
    9: {
        parts: [
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
        parts: [
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
        parts: [
            { partID: 73, quantity: 6, colorID: 1 },
            { partID: 74, quantity: 1, colorID: 1 },
            { partID: 76, quantity: 5, colorID: 1 },
            { partID: 78, quantity: 10, colorID: 1 },
            { partID: 79, quantity: 1, colorID: 1 },
            { partID: 80, quantity: 1, colorID: 1 },
        ],
    },
    12: {
        parts: [
            { partID: 73, quantity: 6, colorID: 1 },
            { partID: 75, quantity: 1, colorID: 1 },
            { partID: 76, quantity: 8, colorID: 1 },
            { partID: 78, quantity: 16, colorID: 1 },
            { partID: 79, quantity: 2, colorID: 1 },
            { partID: 80, quantity: 2, colorID: 1 },
        ],
    },
    13: {
        parts: [
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
        parts: [
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
    16: {
        parts: [
            { partID: 47, quantity: 6, colorID: 4 },
            { partID: 48, quantity: 2, colorID: 4 },
            { partID: 50, quantity: 1, colorID: 4 },
            { partID: 51, quantity: 5, colorID: 4 },
            { partID: 43, quantity: 10, colorID: 4 },
            { partID: 52, quantity: 1, colorID: 4 },
            { partID: 53, quantity: 1, colorID: 4 },
        ],
    },
    17: {
        parts: [
            { partID: 47, quantity: 6, colorID: 4 },
            { partID: 49, quantity: 2, colorID: 4 },
            { partID: 50, quantity: 1, colorID: 4 },
            { partID: 51, quantity: 8, colorID: 4 },
            { partID: 43, quantity: 16, colorID: 4 },
            { partID: 52, quantity: 2, colorID: 4 },
            { partID: 53, quantity: 2, colorID: 4 },
        ],
    },
    18: {
        parts: [
            { partID: 37, quantity: 1, colorID: 4 },
            { partID: 38, quantity: 4, colorID: 4 },
            { partID: 39, quantity: 2, colorID: 4 },
            { partID: 40, quantity: 1, colorID: 4 },
            { partID: 42, quantity: 4, colorID: 4 },
            { partID: 43, quantity: 8, colorID: 4 },
            { partID: 44, quantity: 1, colorID: 4 },
            { partID: 45, quantity: 1, colorID: 4 },
        ],
    },
    19: {
        parts: [
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
            { partID: 34, quantity: 5, colorID: 1 },
            { partID: 26, quantity: 10, colorID: 1 },
            { partID: 35, quantity: 1, colorID: 1 },
            { partID: 36, quantity: 1, colorID: 1 },
        ],
    },
    21: {
        parts: [
            { partID: 30, quantity: 6, colorID: 1 },
            { partID: 32, quantity: 2, colorID: 1 },
            { partID: 33, quantity: 1, colorID: 1 },
            { partID: 34, quantity: 8, colorID: 1 },
            { partID: 26, quantity: 16, colorID: 1 },
            { partID: 35, quantity: 2, colorID: 1 },
            { partID: 36, quantity: 2, colorID: 1 },
        ],
    },
    22: {
        parts: [
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
    23: {
        parts: [
            { partID: 46, quantity: 1, colorID: 4 },
            { partID: 47, quantity: 4, colorID: 4 },
            { partID: 82, quantity: 2, colorID: 4 },
            { partID: 50, quantity: 1, colorID: 4 },
            { partID: 51, quantity: 6, colorID: 4 },
            { partID: 43, quantity: 12, colorID: 4 },
            { partID: 52, quantity: 2, colorID: 4 },
            { partID: 53, quantity: 2, colorID: 4 },
        ],
    },
    24: {
        parts: [
            { partID: 88, quantity: 6, colorID: 1 },
            { partID: 83, quantity: 2, colorID: 1 },
            { partID: 89, quantity: 1, colorID: 1 },
            { partID: 90, quantity: 5, colorID: 1 },
            { partID: 93, quantity: 10, colorID: 1 },
            { partID: 91, quantity: 1, colorID: 1 },
            { partID: 92, quantity: 1, colorID: 1 },
        ],
    },
    25: {
        parts: [
            { partID: 88, quantity: 6, colorID: 1 },
            { partID: 84, quantity: 2, colorID: 1 },
            { partID: 89, quantity: 1, colorID: 1 },
            { partID: 90, quantity: 8, colorID: 1 },
            { partID: 93, quantity: 16, colorID: 1 },
            { partID: 91, quantity: 2, colorID: 1 },
            { partID: 92, quantity: 2, colorID: 1 },
        ],
    },
    26: {
        parts: [
            { partID: 95, quantity: 6, colorID: 1 },
            { partID: 83, quantity: 2, colorID: 1 },
            { partID: 96, quantity: 1, colorID: 1 },
            { partID: 97, quantity: 5, colorID: 1 },
            { partID: 93, quantity: 10, colorID: 1 },
            { partID: 98, quantity: 1, colorID: 1 },
            { partID: 99, quantity: 1, colorID: 1 },
        ],
    },
    27: {
        parts: [
            { partID: 87, quantity: 1, colorID: 1 },
            { partID: 88, quantity: 4, colorID: 1 },
            { partID: 86, quantity: 2, colorID: 1 },
            { partID: 89, quantity: 1, colorID: 1 },
            { partID: 90, quantity: 6, colorID: 1 },
            { partID: 93, quantity: 12, colorID: 1 },
            { partID: 91, quantity: 2, colorID: 1 },
            { partID: 92, quantity: 2, colorID: 1 },
        ],
    },
    28: {
        parts: [
            { partID: 94, quantity: 1, colorID: 1 },
            { partID: 95, quantity: 4, colorID: 1 },
            { partID: 85, quantity: 2, colorID: 1 },
            { partID: 96, quantity: 1, colorID: 1 },
            { partID: 97, quantity: 3, colorID: 1 },
            { partID: 93, quantity: 6, colorID: 1 },
            { partID: 98, quantity: 1, colorID: 1 },
            { partID: 99, quantity: 1, colorID: 1 },
        ],
    },
};

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
    const selectedRackCode =
        rackCodeSelect.options[rackCodeSelect.selectedIndex].text;
    const availableRackTypes = Object.keys(rack)
        .filter((id) => rack[id].code === selectedRackCode)
        .map(Number);

    // clear the table if no rack types are available
    if (availableRackTypes.length === 0) {
        const rackTypeTableContainer = document.getElementById(
            "rack-type-table-container",
        );
        rackTypeTableContainer.innerHTML = "";
        return;
    }

    const rackTypesTableHTML = `
        <table class="w-full border-collapse border border-gray-300 text-lg mt-4">
            <tbody>
            ${availableRackTypes
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
                    `,
            )
            .join("")}
            </tbody>
        </table>
    `;

    const rackTypeTableContainer = document.getElementById(
        "rack-type-table-container",
    );
    rackTypeTableContainer.innerHTML = rackTypesTableHTML;
}

// Function to generate a table with parts based on entered quantities
function generatePartsTable() {
    const rackTypeTableContainer = document.getElementById(
        "rack-type-table-container",
    );
    const rows = Array.from(rackTypeTableContainer.querySelectorAll("tr"));
    const tableData = [];

    rows.forEach((row) => {
        const rackID = parseInt(
            row.querySelector("input").id.replace("quantity-", ""),
            10,
        );
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
            const existingPart = tableData.find(
                (item) =>
                    item.name === partDetails.name && item.color === color,
            );

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

    // Store the current table data for later reference
    const tableHTML = `
        <table class="w-full border-collapse border border-gray-300 text-lg mt-4">
            <thead>
                <tr class="bg-gray-200">
                    <th class="border border-gray-300 px-4 py-1 text-left">Part Name</th>
                    <th class="border border-gray-300 px-4 py-1 text-center">Color</th>
                    <th class="border border-gray-300 px-4 py-1 text-center">Qty</th>
                    <th class="border border-gray-300 px-4 py-1 text-center">Box</th>
                </tr>
            </thead>
            <tbody>
                ${tableData
            .map(
                (part, index) => `
                        <tr data-index="${index}">
                            <td class="border border-gray-300 px-4 py-1">${part.name}</td>
                            <td class="border border-gray-300 px-4 py-1 text-center">${part.color}</td>
                            <td class="border border-gray-300 px-4 py-1 text-center">
                                <input 
                                    type="number" 
                                    min="1" 
                                    value="${part.quantity}" 
                                    class="w-20 text-center border border-gray-300 rounded"
                                    data-part-name="${part.name}"
                                    data-color="${part.color}"
                                />
                            </td>
                            <td class="border border-gray-300 px-4 py-1 text-center"></td>
                        </tr>`,
            )
            .join("")}
            </tbody>
        </table>
    `;

    tableContainer.innerHTML = tableHTML;

    // Add event listeners to quantity inputs
    const quantityInputs = tableContainer.querySelectorAll(
        'input[type="number"]',
    );
    quantityInputs.forEach((input) => {
        input.addEventListener("change", (e) => {
            const newQuantity = parseInt(e.target.value, 10);
            if (isNaN(newQuantity) || newQuantity < 1) {
                e.target.value = 1; // Reset to minimum value if invalid
                return;
            }

            // Find the row and update the quantity in the tableData
            const row = e.target.closest("tr");
            const index = parseInt(row.dataset.index, 10);
            if (!isNaN(index) && tableData[index]) {
                tableData[index].quantity = newQuantity;
            }

            // Update the table with new quantities
            updatePartsTable(tableContainer, tableData);
        });
    });

    // Store the table data for later reference
    tableContainer.dataset.tableData = JSON.stringify(tableData);

    tableContainer.innerHTML = tableHTML;
}

// Function to update the parts table with new quantities
function updatePartsTable(container, data) {
    const tbody = container.querySelector("tbody");
    tbody.innerHTML = data
        .map(
            (part, index) => `
            <tr data-index="${index}">
                <td class="border border-gray-300 px-4 py-1">${part.name}</td>
                <td class="border border-gray-300 px-4 py-1 text-center">${part.color}</td>
                <td class="border border-gray-300 px-4 py-1 text-center">
                    <input 
                        type="number" 
                        min="1" 
                        value="${part.quantity}" 
                        class="w-20 text-center border border-gray-300 rounded"
                        data-part-name="${part.name}"
                        data-color="${part.color}"
                    />
                </td>
                <td class="border border-gray-300 px-4 py-1 text-center"></td>
            </tr>`,
        )
        .join("");

    // Re-attach event listeners
    const quantityInputs = tbody.querySelectorAll('input[type="number"]');
    quantityInputs.forEach((input) => {
        input.addEventListener("change", (e) => {
            const newQuantity = parseInt(e.target.value, 10);
            if (isNaN(newQuantity) || newQuantity < 1) {
                e.target.value = 1;
                return;
            }

            const row = e.target.closest("tr");
            const index = parseInt(row.dataset.index, 10);
            if (!isNaN(index) && data[index]) {
                data[index].quantity = newQuantity;
            }

            updatePartsTable(container, data);
        });
    });
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
