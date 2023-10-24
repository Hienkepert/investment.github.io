document.addEventListener("DOMContentLoaded", function() {
    // Display today's date
    document.getElementById("currentDate").innerText = new Date().toLocaleDateString();
  
    // Add event listener for Calculate button
    document.getElementById("calculateBtn").addEventListener("click", calculateTotalInvestment);
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
  
    // Sum up all fixed costs
    const totalFixedCosts = landRent + totalLandPreparation;
  
    // Get values for variable costs (placeholder)
    let totalVariableCosts = 0; // Add your variable costs logic here
  
    // Perform calculations for total costs
    const totalCosts = totalFixedCosts + totalVariableCosts;
  
    // Display results
    document.getElementById("totalFixedCosts").innerText = `Total Fixed Costs: ${totalFixedCosts}`;
    document.getElementById("totalVariableCosts").innerText = `Total Variable Costs: ${totalVariableCosts}`;
    document.getElementById("totalCosts").innerText = `Total Costs: ${totalCosts}`;
  }
  