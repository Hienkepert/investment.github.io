function calculateInvestment() {
    const investmentType = document.getElementById("investmentType").value;
    const price = parseFloat(document.getElementById("price").value);
    let cost;
  
    switch(investmentType) {
      case "corn":
        cost = price * 10; // Example calculation
        break;
      case "sweetPotato":
        cost = price * 8; // Example calculation
        break;
      case "pumpkin":
        cost = price * 12; // Example calculation
        break;
    }
  
    document.getElementById("result").innerHTML = `The investment cost for ${investmentType} is $${cost}.`;
  }
  