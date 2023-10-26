// Function to format numbers with thousand separators
function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let totalLaborCost = 0;
let totalMicrobialFertilizerCost = 0;

// soluong and price
function calculateCost() {
    const soluong = parseFloat(document.getElementById("soluong").value) || 0;
    const price = parseFloat(document.getElementById("price").value) || 0;
    const cost = soluong * price;
    const roundedCost = cost.toFixed(0);
    document.getElementById("calculatedCost").textContent = formatNumberWithCommas(roundedCost);
    return roundedCost;
}

// Microbial Fertilizer Cost
function calculateMicrobialFertilizerCost() {
    const quantity1 = parseFloat(document.getElementById("soluongphanvisinhlan1").value) || 0;
    const price1 = parseFloat(document.getElementById("giaphanvisinhlan1").value) || 0;
    const quantity2 = parseFloat(document.getElementById("soluongphanvisinhlan2").value) || 0;
    const price2 = parseFloat(document.getElementById("giaphanvisinhlan2").value) || 0;

    // Calculate totalMicrobialFertilizerCost
    const totalMicrobialFertilizerCost = (quantity1 * price1) + (quantity2 * price2);

    // Update the HTML element with the calculated cost
    document.getElementById("calculatedPhanViSinhCost").textContent = formatNumberWithCommas(totalMicrobialFertilizerCost.toFixed(0));
}

// Add event listeners to input fields
document.getElementById("soluong").addEventListener("input", calculateCost);
document.getElementById("price").addEventListener("input", calculateCost);
document.getElementById("soluongphanvisinhlan1").addEventListener("input", calculateMicrobialFertilizerCost);
document.getElementById("giaphanvisinhlan1").addEventListener("input", calculateMicrobialFertilizerCost);
document.getElementById("soluongphanvisinhlan2").addEventListener("input", calculateMicrobialFertilizerCost);
document.getElementById("giaphanvisinhlan2").addEventListener("input", calculateMicrobialFertilizerCost);
document.getElementById("laborCount").addEventListener("input", calculateLaborCost);
document.getElementById("daysCount").addEventListener("input", calculateLaborCost);
document.getElementById("laborCost").addEventListener("input", calculateLaborCost);
document.getElementById("landRent").addEventListener("input", calculateTotalInvestment);
document.getElementById("landPrep1").addEventListener("input", calculateTotalInvestment);
document.getElementById("landPrep2").addEventListener("input", calculateTotalInvestment);
document.getElementById("landPrep3").addEventListener("input", calculateTotalInvestment);
document.getElementById("landPrep4").addEventListener("input", calculateTotalInvestment);
document.getElementById("calculateBtn").addEventListener("click", calculateTotalInvestment);

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("currentDate").style.textAlign = "left";
    document.getElementById("currentDate").innerText = new Date().toLocaleDateString();
});

function calculateLaborCost() {
    const laborCount = parseFloat(document.getElementById("laborCount").value) || 0;
    const daysCount = parseFloat(document.getElementById("daysCount").value) || 0;
    const laborCost = parseFloat(document.getElementById("laborCost").value) || 0;

    // Update the global variable
    totalLaborCost = laborCount * daysCount * laborCost;
    document.getElementById("calculatedLaborCost").textContent = formatNumberWithCommas(totalLaborCost);
}

function calculateTotalInvestment() {
    calculateMicrobialFertilizerCost(); // Calculate Microbial Fertilizer Cost

    const landRent = parseFloat(document.getElementById("landRent").value) || 0;
    const landPrep1 = parseFloat(document.getElementById("landPrep1").value) || 0;
    const landPrep2 = parseFloat(document.getElementById("landPrep2").value) || 0;
    const landPrep3 = parseFloat(document.getElementById("landPrep3").value) || 0;
    const landPrep4 = parseFloat(document.getElementById("landPrep4").value) || 0;

    const totalLandPreparation = landPrep1 + landPrep2 + landPrep3 + landPrep4;
    const roundedCost = calculateCost();

    // Use the global variables in your calculation
    const totalVariableCosts = totalLandPreparation + totalLaborCost + parseFloat(roundedCost) + totalMicrobialFertilizerCost;

    const totalFixedCosts = landRent;
    const totalCosts = totalFixedCosts + totalVariableCosts;

    document.getElementById("totalFixedCosts").innerText = `Total Fixed Costs: ${formatNumberWithCommas(totalFixedCosts)}`;
    document.getElementById("totalVariableCosts").innerText = `Total Variable Costs: ${formatNumberWithCommas(totalVariableCosts)}`;
    document.getElementById("totalCosts").innerText = `Total Costs: ${formatNumberWithCommas(totalCosts)}`;
}