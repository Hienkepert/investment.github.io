// Function to format numbers with thousand separators
function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  // Function to calculate the cost based on soluong and price
  function calculateCost() {
    const soluong = parseFloat(document.getElementById("soluong").value) || 0;
    const price = parseFloat(document.getElementById("price").value) || 0;
  
    // Calculate the cost
    const cost = soluong * price;
  
    // Round the cost to the nearest integer (remove decimal places)
    const roundedCost = cost.toFixed(0);
  
    // Display the calculated cost without decimal places with thousand separators
    document.getElementById("calculatedCost").textContent = formatNumberWithCommas(roundedCost);
  
    return roundedCost;  // Return the rounded cost for use in other functions
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    // Display today's date (left-aligned)
    document.getElementById("currentDate").style.textAlign = "left";
    document.getElementById("currentDate").innerText = new Date().toLocaleDateString();
  
    // Add event listener for Calculate button
    document.getElementById("calculateBtn").addEventListener("click", calculateTotalInvestment);
  
    // Event listener for updating the calculated cost
    document.getElementById("soluong").addEventListener("input", function() {
      calculateCost();
  
    document.getElementById("price").addEventListener("input", function() {
      calculateCost();
      // Format the value with thousand separators
      this.value = formatNumberWithCommas(parseFloat(this.value) || 0);
    });
  });
  
  function calculateTotalInvestment() {
    // Get values for fixed costs
    const landRent = parseFloat(document.getElementById("landRent").value) || 0;
  
    // Get values for land preparation (Chi Phí Chuẩn Bị Đất)
    const landPrep1 = parseFloat(document.getElementById("landPrep1").value) || 0;
    const landPrep2 = parseFloat(document.getElementById("landPrep2").value) || 0;
    const landPrep3 = parseFloat(document.getElementById("landPrep3").value) || 0;
    const landPrep4 = parseFloat(document.getElementById("landPrep4").value) || 0;
  
    // Sum up land preparation costs
    const totalLandPreparation = landPrep1 + landPrep2 + landPrep3 + landPrep4;
  
    // Get the rounded cost from the calculateCost function
    const roundedCost = calculateCost();
  
    // Get values for variable costs
    const totalVariableCosts = totalLandPreparation + parseFloat(roundedCost);
  
    // Sum up all fixed costs
    const totalFixedCosts = landRent;
  
    // Perform calculations for total costs
    const totalCosts = totalFixedCosts + totalVariableCosts;
  
    // Display results with thousand separators
    document.getElementById("totalFixedCosts").innerText = `Total Fixed Costs: ${formatNumberWithCommas(totalFixedCosts)}`;
    document.getElementById("totalVariableCosts").innerText = `Total Variable Costs: ${formatNumberWithCommas(totalVariableCosts)}`;
    document.getElementById("totalCosts").innerText = `Total Costs: ${formatNumberWithCommas(totalCosts)}`;
  }
  