function compute() // computes the potential return on a specified principal given the preselected parameters.
{
    var principal = parseInt(document.getElementById("principal").value); // gets principal value from input
    if (principal <= 0){ // produces an alert when a non-positive number is entered as the principal amount.
        alert("Enter a positive number");
        principal.focus();// returns focus back to the principal input node
        return false;
    }
    var rate = parseInt(document.getElementById("rate").value); // gets rate from rate input node
    var years = parseInt(document.getElementById("years").value);// gets years from the years input node
    var interest = parseFloat(principal * years * (rate / 100)).toFixed(2);// interest gained on principal
    var d = (new Date().getFullYear()) + years; // specifies the year when investment matures.
    var newCapital = interest; // new principal amount after interest has been added.
    document.getElementById("result").innerHTML = "If you deposit $"+ principal + ",<br>at an interest rate of " + rate + "%.<br>You will receive an amount of $" + newCapital +",<br>in the year "+ d + ".";
    return true; // displays the comment on the screen after calculating interest
}
function rangeDisplay() // displays corresponding rate values as the slider is being moved around
{
    document.getElementById("r1").innerHTML = document.getElementById("rate").value;

}
        