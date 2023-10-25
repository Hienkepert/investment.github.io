// JavaScript code
// Function to format numbers with thousand separators
function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Declare totalLaborCost as a global variable
let totalLaborCost = 0;

// Function to calculate the cost based on soluong and price
function calculateCost() {
    const soluong = parseFloat(document.getElementById("soluong").value) || 0;
    const price = parseFloat(document.getElementById("price").value) || 0;
    const cost = soluong * price;
    const roundedCost = cost.toFixed(0);
    document.getElementById("calculatedCost").textContent = formatNumberWithCommas(roundedCost);
    return roundedCost;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("currentDate").style.textAlign = "left";
    document.getElementById("currentDate").innerText = new Date().toLocaleDateString();
    document.getElementById("calculateBtn").addEventListener("click", calculateTotalInvestment);
    document.getElementById("soluong").addEventListener("input", function() {
        calculateCost();
    });
    document.getElementById("price").addEventListener("input", function() {
        calculateCost();
    });

    // Labor cost calculation
    const laborCountEl = document.getElementById("laborCount");
    const daysCountEl = document.getElementById("daysCount");
    const laborCostEl = document.getElementById("laborCost");
    const calculatedLaborCostEl = document.getElementById("calculatedLaborCost");

    function calculateLaborCost() {
        const laborCount = parseFloat(laborCountEl.value) || 0;
        const daysCount = parseFloat(daysCountEl.value) || 0;
        const laborCost = parseFloat(laborCostEl.value) || 0;

        // Update the global variable
        totalLaborCost = laborCount * daysCount * laborCost;
        calculatedLaborCostEl.textContent = formatNumberWithCommas(totalLaborCost);
    }

    laborCountEl.addEventListener("input", calculateLaborCost);
    daysCountEl.addEventListener("input", calculateLaborCost);
    laborCostEl.addEventListener("input", calculateLaborCost);
});

function calculateTotalInvestment() {
    const landRent = parseFloat(document.getElementById("landRent").value) || 0;
    const landPrep1 = parseFloat(document.getElementById("landPrep1").value) || 0;
    const landPrep2 = parseFloat(document.getElementById("landPrep2").value) || 0;
    const landPrep3 = parseFloat(document.getElementById("landPrep3").value) || 0;
    const landPrep4 = parseFloat(document.getElementById("landPrep4").value) || 0;

    const totalLandPreparation = landPrep1 + landPrep2 + landPrep3 + landPrep4;
    const roundedCost = calculateCost();

    // Use the global variable in your calculation
    const totalVariableCosts = totalLandPreparation + totalLaborCost + parseFloat(roundedCost);

    const totalFixedCosts = landRent;
    const totalCosts = totalFixedCosts + totalVariableCosts;

    document.getElementById("totalFixedCosts").innerText = `Total Fixed Costs: ${formatNumberWithCommas(totalFixedCosts)}`;
    document.getElementById("totalVariableCosts").innerText = `Total Variable Costs: ${formatNumberWithCommas(totalVariableCosts)}`;
    document.getElementById("totalCosts").innerText = `Total Costs: ${formatNumberWithCommas(totalCosts)}`;
}
