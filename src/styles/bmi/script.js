
let result = document.querySelector(".resultContainer");


let submitButton = document.querySelector(".submitButton");
let resetButton = document.querySelector(".resetButton")

let bmiDisplay = document.querySelector(".bmi");
let bmrDisplay = document.querySelector(".bmr");
let statusDisplay = document.querySelector(".status");
let nweightDisplay = document.querySelector(".nweight");
// let statusDisplay = document.querySelector(".status1");



// Calculating BMI & BMR
// Calculating BMI
function run () {


// Crating Variables
let heightInFeet = Number(document.querySelector("#heightInFeet").value);
let heightInInch = Number(document.querySelector("#heightInInch").value);
let weight = Number(document.querySelector("#weight").value);
let age = Number(document.querySelector("#age").value);
let mgender = document.querySelector("#mgender");
let fgender = document.querySelector("#fgender");









	
result.style.display = "block";
let height = ((heightInFeet * 12) + (heightInInch));
let heightInMetre= (height/39.37);
let heightInCm= (heightInMetre*100);
let bmi = weight/(heightInMetre*heightInMetre);
let hnweight = Number.parseFloat(24.9 * (heightInMetre*heightInMetre)).toFixed(2);
let lnweight = Number.parseFloat(18.5 * (heightInMetre*heightInMetre)).toFixed(2);


	 if (bmi < 18.5){statusDisplay.innerHTML = '<p class = "red i" style="text-decoration:none; color:blue;">&nbsp;Under Weight</p>';}
else if (bmi <= 24.9){statusDisplay.innerHTML = '<p class = "red i" style="text-decoration:none; color: green;">&nbsp;Normal Weight </p>';}
else if (bmi <= 29.9){statusDisplay.innerHTML = '<p class = "red i" style="text-decoration:none; color:red;">&nbsp;Over Weight </p>';}
else if (bmi <= 34.9){statusDisplay.innerHTML = '<p class = "red i" style="text-decoration:none; color:yellow;">&nbsp; Class I obesity </p>';}
else if (bmi <= 39.9){statusDisplay.innerHTML = '<p class = "red i" style="text-decoration:none; color:orange;">&nbsp; Class II obesity </p>';}
else if (bmi >= 40){statusDisplay.innerHTML = '<p class = "red i" style="text-decoration:none; color:red;">&nbsp;Class III obesity  </p>';}

// Calculating BMR
let bmrm = (66+(13.7*weight)+(5*heightInCm)-(6.8*age));
let bmrf = (665+(9.6*weight)+(1.8*heightInCm)-(4.7*age));

bmiDisplay.innerHTML = bmi.toFixed(2);
// nweightDisplay.innerHTML = `${lnweight} KG to ${hnweight} KG`;
nweightDisplay.innerHTML = lnweight+" KG to "+hnweight+" KG";

if (fgender.checked && age != ""){
	bmrDisplay.innerHTML = bmrf.toFixed(2);
} 
else if (mgender.checked && age!= "") {bmrDisplay.innerHTML = bmrm.toFixed(2);}
else {bmrDisplay.innerHTML = '<p class = "red i" style="text-decoration:none; color:red;">&nbsp;Choose gender first.</p>';}

}

// // Resting fields
// const reset = () => {
// 	height.value = "";
// 	weight.value = "";
// 	age.value = "";
// 	mgender.checked = false;
// 	fgender.checked = false;


// }
// resetButton.addEventListener("click", reset)
submitButton.addEventListener("click", run)










// ----------------------------------------------------