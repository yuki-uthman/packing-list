// Define rack data
const rackData = {
  "2C Single Side 6.5ft WHITE": [
    { part: "NET 2000mm", color: "WHITE", quantity: 1 },
    { part: "STAND 2000mm", color: "WHITE", quantity: 2 },
    { part: "FATHI TOP", color: "WHITE", quantity: 1 },
    { part: "FATHI BOTTOM", color: "WHITE", quantity: 1 },
    { part: "BRACKET FRONT", color: "WHITE", quantity: 1 },
    { part: "BRACKET SIDE", color: "WHITE", quantity: 2 },
    { part: "SHELF TOP", color: "WHITE", quantity: 5 },
    { part: "SHELF BOTTOM", color: "WHITE", quantity: 1 },
    { part: "SHELF CLIP", color: "WHITE", quantity: 10 },
  ],
  "2C Double Side 6ft WHITE": [
    { part: "NET 1800mm", color: "WHITE", quantity: 1 },
    { part: "STAND 1800mm", color: "WHITE", quantity: 2 },
    { part: "FATHI TOP", color: "WHITE", quantity: 1 },
    { part: "FATHI BOTTOM", color: "WHITE", quantity: 1 },
    { part: "BRACKET FRONT", color: "WHITE", quantity: 2 },
    { part: "BRACKET SIDE", color: "WHITE", quantity: 4 },
    { part: "SHELF TOP", color: "WHITE", quantity: 8 },
    { part: "SHELF BOTTOM", color: "WHITE", quantity: 2 },
    { part: "SHELF CLIP", color: "WHITE", quantity: 18 },
  ],
  "2C End Side 5ft WHITE": [
    { part: "NET End Rack", color: "WHITE", quantity: 1 },
    { part: "STAND 1800mm", color: "WHITE", quantity: 2 },
    { part: "FATHI TOP", color: "WHITE", quantity: 1 },
    { part: "FATHI BOTTOM", color: "WHITE", quantity: 1 },
    { part: "BRACKET FRONT", color: "WHITE", quantity: 1 },
    { part: "BRACKET SIDE", color: "WHITE", quantity: 2 },
    { part: "SHELF TOP", color: "WHITE", quantity: 4 },
    { part: "SHELF BOTTOM", color: "WHITE", quantity: 1 },
    { part: "SHELF CLIP", color: "WHITE", quantity: 8 },
  ],
  "2C Single Side 6.5ft BLACK": [
    { part: "NET 2000mm", color: "BLACK", quantity: 1 },
    { part: "STAND 2000mm", color: "BLACK", quantity: 2 },
    { part: "FATHI TOP", color: "BLACK", quantity: 1 },
    { part: "FATHI BOTTOM", color: "BLACK", quantity: 1 },
    { part: "BRACKET FRONT", color: "BLACK", quantity: 1 },
    { part: "BRACKET SIDE", color: "BLACK", quantity: 2 },
    { part: "SHELF TOP", color: "BLACK", quantity: 5 },
    { part: "SHELF BOTTOM", color: "BLACK", quantity: 1 },
    { part: "SHELF CLIP", color: "BLACK", quantity: 10 },
  ],
  "2C Double Side 6ft BLACK": [
    { part: "NET 1800mm", color: "BLACK", quantity: 1 },
    { part: "STAND 1800mm", color: "BLACK", quantity: 2 },
    { part: "FATHI TOP", color: "BLACK", quantity: 1 },
    { part: "FATHI BOTTOM", color: "BLACK", quantity: 1 },
    { part: "BRACKET FRONT", color: "BLACK", quantity: 2 },
    { part: "BRACKET SIDE", color: "BLACK", quantity: 4 },
    { part: "SHELF TOP", color: "BLACK", quantity: 8 },
    { part: "SHELF BOTTOM", color: "BLACK", quantity: 2 },
    { part: "SHELF CLIP", color: "BLACK", quantity: 18 },
  ],
  "2C End Side 5ft BLACK": [
    { part: "NET END RACK", color: "BLACK", quantity: 1 },
    { part: "STAND 1500mm", color: "BLACK", quantity: 2 },
    { part: "FATHI TOP", color: "BLACK", quantity: 1 },
    { part: "FATHI BOTTOM", color: "BLACK", quantity: 1 },
    { part: "BRACKET FRONT", color: "BLACK", quantity: 1 },
    { part: "BRACKET SIDE", color: "BLACK", quantity: 2 },
    { part: "SHELF TOP", color: "BLACK", quantity: 4 },
    { part: "SHELF BOTTOM", color: "BLACK", quantity: 1 },
    { part: "SHELF CLIP", color: "BLACK", quantity: 8 },
  ],
  "17 Single Side 6ft White": [
    { part: "BACK BOARD 2000mm", color: "WHITE", quantity: 1 },
    { part: "STAND 1900mm", color: "WHITE", quantity: 2 },
    { part: "FATHI TOP", color: "WHITE", quantity: 1 },
    { part: "BRACKET FRONT", color: "WHITE", quantity: 1 },
    { part: "SHELF TOP", color: "WHITE", quantity: 5 },
    { part: "SHELF BOTTOM", color: "WHITE", quantity: 1 },
    { part: "SHELF CLIP", color: "WHITE", quantity: 12 },
  ],
  "17 Double Side 6ft White": [
    { part: "BACK BOARD 2000mm", color: "WHITE", quantity: 1 },
    { part: "STAND 1800mm", color: "WHITE", quantity: 2 },
    { part: "FATHI TOP", color: "WHITE", quantity: 1 },
    { part: "BRACKET FRONT", color: "WHITE", quantity: 2 },
    { part: "SHELF TOP", color: "WHITE", quantity: 8 },
    { part: "SHELF BOTTOM", color: "WHITE", quantity: 2 },
    { part: "SHELF CLIP", color: "WHITE", quantity: 20 },
  ],
  "37 Single Side 6.5ft": [
    { part: "BACK BOARD 1800mm", color: "WOOD", quantity: 1 },
    { part: "FRAME 1800mm", color: "BLACK", quantity: 2 },
    { part: "FATHI TOP", color: "BLACK", quantity: 1 },
    { part: "FATHI BOTTOM", color: "BLACK", quantity: 1 },
    { part: "SHELF 920x300mm", color: "WOOD", quantity: 5 },
    { part: "SHELF BORDER TOP", color: "WOOD", quantity: 4 },
    { part: "SHELF BORDER BOTTOM", color: "WOOD", quantity: 1 },
    { part: "SHELF CLIP", color: "BLACK", quantity: 10 },
    { part: "SHELF BAR", color: "BLACK", quantity: 5 },
  ],
  "37 Double Side 5ft": [
    { part: "BACK BOARD 1500mm", color: "WOOD", quantity: 1 },
    { part: "FRAME 1500mm", color: "WOOD", quantity: 2 },
    { part: "FATHI TOP", color: "BLACK", quantity: 1 },
    { part: "FATHI BOTTOM", color: "BLACK", quantity: 1 },
    { part: "SHELF", color: "WOOD", quantity: 10 },
    { part: "SHELF BORDER TOP", color: "WOOD", quantity: 6 },
    { part: "SHELF BORDER BOTTOM", color: "WOOD", quantity: 2 },
    { part: "SHELF CLIP", color: "BLACK", quantity: 16 },
    { part: "SHELF BAR", color: "BLACK", quantity: 8 },
  ],
  "37 End Side 5ft": [
    { part: "SIDE BOARD", color: "BLACK", quantity: 2 },
    { part: "FRAME 1500mm", color: "BLACK", quantity: 2 },
    { part: "FATHI TOP", color: "BLACK", quantity: 1 },
    { part: "FATHI BOTTOM", color: "BLACK", quantity: 1 },
    { part: "SHELF", color: "WOOD", quantity: 4 },
    { part: "SHELF BORDER TOP", color: "WOOD", quantity: 3 },
    { part: "SHELF BORDER BOTTOM", color: "WOOD", quantity: 1 },
    { part: "SHELF CLIP", color: "BLACK", quantity: 8 },
    { part: "SHELF BAR", color: "BLACK", quantity: 4 },
  ],
  "51 WAREHOUSE RACK": [
    { part: "FRAME", color: "WHITE", quantity: 2 },
    { part: "BEAM", color: "WHITE", quantity: 10 },
    { part: "SHELF", color: "WHITE", quantity: 10 },
  ],
  "52 WAREHOUSE RACK": [
    { part: "FRAME", color: "BLUE", quantity: 2 },
    { part: "BEAM", color: "BLUE", quantity: 10 },
    { part: "SHELF", color: "BLUE", quantity: 10 },
  ],
  "33 WAREHOUSE RACK 1800mm": [
    { part: "FRAME", color: "BLACK", quantity: 2 },
    { part: "BEAM", color: "BLACK", quantity: 10 },
    { part: "SHELF", color: "BLACK", quantity: 10 },
  ],
  "33 WAREHOUSE RACK 2000mm": [
    { part: "FRAME", color: "BLACK", quantity: 2 },
    { part: "BEAM", color: "BLACK", quantity: 10 },
    { part: "SHELF", color: "BLACK", quantity: 10 },
  ],
};

// DOM elements
const rackTypeSelect = document.getElementById("rack-type");
const quantityInput = document.getElementById("quantity");
const tableContainer = document.getElementById("table-container");
const printBtn = document.getElementById("print-btn");

// Populate rack options dynamically
function populateRackOptions() {
  Object.keys(rackData).forEach((rack) => {
    const option = document.createElement("option");
    option.value = rack;
    option.textContent = rack;
    rackTypeSelect.appendChild(option);
  });
}

function generateTable() {
  const selectedRack = rackTypeSelect.value;
  const quantity = parseInt(quantityInput.value, 10);

  // If no rack is selected or quantity is invalid, show a message
  if (!selectedRack || quantity < 1) {
    tableContainer.innerHTML = "<p class='text-red-500'>Please select a rack and enter a valid quantity.</p>";
    return;
  }

  // Get the parts for the selected rack
  const parts = rackData[selectedRack];

  // Generate the table
  const tableHTML = `
    <table class="w-full border-collapse border border-gray-300 text-sm mt-4">
      <thead>
        <tr class="bg-gray-200">
          <th class="border border-gray-300 px-4 py-2 text-left" style="width: 62.5%;">Part Name</th>
          <th class="border border-gray-300 px-4 py-2 text-center" style="width: 12.5%;">Color</th>
          <th class="border border-gray-300 px-4 py-2 text-center" style="width: 12.5%;">Quantity</th>
          <th class="border border-gray-300 px-4 py-2 text-center" style="width: 12.5%;">Staff</th>
        </tr>
      </thead>
      <tbody>
        ${parts
          .map(
            (part) => `
          <tr>
            <td class="border border-gray-300 px-4 py-2">${part.part}</td>
            <td class="border border-gray-300 px-4 py-2 text-center">${part.color}</td>
            <td class="border border-gray-300 px-4 py-2 text-center">${part.quantity * quantity}</td>
            <td class="border border-gray-300 px-4 py-2 text-center"></td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  `;

  tableContainer.innerHTML = tableHTML;
}

// Initialize the app
populateRackOptions();
rackTypeSelect.addEventListener("change", generateTable);
quantityInput.addEventListener("input", generateTable);

printBtn.addEventListener('click', () => {
  printBtn.style.display = 'none';
  window.print();
  setTimeout(() => {
    printBtn.style.display = '';
  }, 100); // Restore button after printing
});
