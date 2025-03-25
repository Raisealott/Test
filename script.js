function calculateTips() {
    // Get input values
    let totalCash = parseFloat(document.getElementById("totalCash").value);
    let serviceCharge = parseFloat(document.getElementById("serviceCharge").value);
    let cashSales = parseFloat(document.getElementById("cashSales").value);
    let chargeTips = parseFloat(document.getElementById("chargeTips").value);
    let netSales = parseFloat(document.getElementById("netSales").value);
    let cashTips = parseFloat(document.getElementById("cashTips").value);
    let liquorSales = parseFloat(document.getElementById("liquorSales").value);

    // Perform calculations
    let liquorTips = Math.round(liquorSales * 0.10);
    let netTips = Math.round(parseFloat(document.getElementById("netTips").value)); 
    let subtotal1 = Math.round(netTips - liquorTips);
    let chefTips = Math.floor(subtotal1 * 0.50);
    let serverTips = Math.round(subtotal1 - chefTips);
    let netTips2 = Math.round(serverTips + liquorTips);
    let barTips = Math.round(liquorSales * 0.05);
    let subtotal2 = Math.round(netTips2 - barTips);
    let draTips = Math.round(subtotal2 * 0.16);
    let totalTipsReport = Math.round(subtotal2 - draTips);
    let totalTipsPayout = Math.round(chefTips + draTips);
    let cashDue = Math.round(cashSales - chargeTips);
    let totalPayout = Math.round(cashDue + totalTipsPayout);

    // Display results
    document.getElementById("liquorTips").value = liquorTips;
    document.getElementById("subtotal1").value = subtotal1;
    document.getElementById("chefTips").value = chefTips;
    document.getElementById("serverTips").value = serverTips;
    document.getElementById("netTips2").value = netTips2;
    document.getElementById("barTips").value = barTips;
    document.getElementById("subtotal2").value = subtotal2;
    document.getElementById("draTips").value = draTips;
    document.getElementById("totalTipsReport").value = totalTipsReport;
    document.getElementById("totalTipsPayout").value = totalTipsPayout;
    document.getElementById("cashDue").value = cashDue;
    document.getElementById("totalPayout").value = totalPayout;
}