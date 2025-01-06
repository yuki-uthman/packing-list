// Define rack data
const rackData = {
  "2C Mart Rack Single Side 6.5ft": [
    { part: "2C NET 2000mm", color: "White", quantity: 1 },
    { part: "2C STAND 2000mm", color: "White", quantity: 2 },
    { part: "2C FATHI TOP", color: "White", quantity: 1 },
    { part: "2C FATHI BOTTOM", color: "White", quantity: 1 },
    { part: "2C BRACKET FRONT", color: "White", quantity: 1 },
    { part: "2C BRACKET SIDE", color: "White", quantity: 2 },
    { part: "2C SHELF TOP", color: "White", quantity: 5 },
    { part: "2C SHELF BOTTOM", color: "White", quantity: 1 },
  ],
  "2C Mart Rack Double Side 6ft": [
    { part: "2C NET 1800mm", color: "White", quantity: 1 },
    { part: "2C STAND 1800mm", color: "White", quantity: 2 },
    { part: "2C FATHI TOP", color: "White", quantity: 1 },
    { part: "2C FATHI BOTTOM", color: "White", quantity: 1 },
    { part: "2C BRACKET FRONT", color: "White", quantity: 2 },
    { part: "2C BRACKET SIDE", color: "White", quantity: 4 },
    { part: "2C SHELF TOP", color: "White", quantity: 8 },
    { part: "2C SHELF BOTTOM", color: "White", quantity: 2 },
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
