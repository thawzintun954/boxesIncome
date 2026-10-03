let box1 = 0,
  box2 = 0,
  box3 = 0,
  box4 = 0,
  box5 = 0;
No1 = 0;

const tableChildNo = document.getElementsByClassName("tablechildNo")[0];
const boxOneTag = document.getElementsByClassName("box")[0];
const trashOne = document.getElementsByClassName("trash")[0];
const trashTwo = document.getElementsByClassName("trash Two")[0];
const trashThree = document.getElementsByClassName("trash Three")[0];
const trashFour = document.getElementsByClassName("trash Four")[0];
const trashFive = document.getElementsByClassName("trash Five")[0];
const tableTag = document.getElementsByTagName("table")[0];
const BoxOneIncome = document.getElementsByClassName("incomeOne")[0];
const BoxOnePending = document.getElementsByClassName("pendingOne")[0];
const BoxOneTotal = document.getElementsByClassName("totalOne")[0];
const BoxTwoIncome = document.getElementsByClassName("incomeTwo")[0];
const BoxTwoPending = document.getElementsByClassName("pendingTwo")[0];
const BoxTwoTotal = document.getElementsByClassName("totalTwo")[0];
const BoxThreeIncome = document.getElementsByClassName("incomeThree")[0];
const BoxThreePending = document.getElementsByClassName("pendingThree")[0];
const BoxThreeTotal = document.getElementsByClassName("totalThree")[0];
const BoxFourIncome = document.getElementsByClassName("incomeFour")[0];
const BoxFourPending = document.getElementsByClassName("pendingFour")[0];
const BoxFourTotal = document.getElementsByClassName("totalFour")[0];
const BoxFiveIncome = document.getElementsByClassName("incomeFive")[0];
const BoxFivePending = document.getElementsByClassName("pendingFive")[0];
const BoxFiveTotal = document.getElementsByClassName("totalFive")[0];

BoxOneTotal.innerText = 0;
BoxOneIncome.value = 0;
BoxOnePending.value = 0;
BoxTwoTotal.innerText = 0;
BoxTwoIncome.value = 0;
BoxTwoPending.value = 0;
BoxThreeTotal.innerText = 0;
BoxThreeIncome.value = 0;
BoxThreePending.value = 0;
BoxFourTotal.innerText = 0;
BoxFourIncome.value = 0;
BoxFourPending.value = 0;
BoxFiveTotal.innerText = 0;
BoxFiveIncome.value = 0;
BoxFivePending.value = 0;

const TotalUpdateOne = () => {
  const incomeVal =
    BoxOneIncome && BoxOneIncome.value ? Number(BoxOneIncome.value) : 0;

  // BoxOnePending မရှိရင် သို့မဟုတ် innerText မရှိရင် 0 ယူမည်
  const pendingVal =
    BoxOnePending && BoxOnePending.value ? Number(BoxOnePending.value) : 0;

  let Total = incomeVal + pendingVal;
  BoxOneTotal.innerText = Total;
};
const TotalUpdateTwo = () => {
  const incomeVal =
    BoxTwoIncome && BoxTwoIncome.value ? Number(BoxTwoIncome.value) : 0;

  // BoxOnePending မရှိရင် သို့မဟုတ် innerText မရှိရင် 0 ယူမည်
  const pendingVal =
    BoxTwoPending && BoxTwoPending.value ? Number(BoxTwoPending.value) : 0;

  let Total = incomeVal + pendingVal;
  BoxTwoTotal.innerText = Total;
};
const TotalUpdateThree = () => {
  const incomeVal =
    BoxThreeIncome && BoxThreeIncome.value ? Number(BoxThreeIncome.value) : 0;

  // BoxOnePending မရှိရင် သို့မဟုတ် innerText မရှိရင် 0 ယူမည်
  const pendingVal =
    BoxThreePending && BoxThreePending.value
      ? Number(BoxThreePending.value)
      : 0;

  let Total = incomeVal + pendingVal;
  BoxThreeTotal.innerText = Total;
};
const TotalUpdateFour = () => {
  const incomeVal =
    BoxFourIncome && BoxFourIncome.value ? Number(BoxFourIncome.value) : 0;

  // BoxOnePending မရှိရင် သို့မဟုတ် innerText မရှိရင် 0 ယူမည်
  const pendingVal =
    BoxFourPending && BoxFourPending.value ? Number(BoxFourPending.value) : 0;

  let Total = incomeVal + pendingVal;
  BoxFourTotal.innerText = Total;
};
const TotalUpdateFive = () => {
  const incomeVal =
    BoxFiveIncome && BoxFiveIncome.value ? Number(BoxFiveIncome.value) : 0;

  // BoxOnePending မရှိရင် သို့မဟုတ် innerText မရှိရင် 0 ယူမည်
  const pendingVal =
    BoxFivePending && BoxFivePending.value ? Number(BoxFivePending.value) : 0;

  let Total = incomeVal + pendingVal;
  BoxFiveTotal.innerText = Total;
};

BoxOnePending.addEventListener("input", () => {
  TotalUpdateOne();
});
BoxOneIncome.addEventListener("input", () => {
  TotalUpdateOne();
});
BoxTwoPending.addEventListener("input", () => {
  TotalUpdateTwo();
});
BoxTwoIncome.addEventListener("input", () => {
  TotalUpdateTwo();
});
BoxThreePending.addEventListener("input", () => {
  TotalUpdateThree();
});
BoxThreeIncome.addEventListener("input", () => {
  TotalUpdateThree();
});
BoxFourPending.addEventListener("input", () => {
  TotalUpdateFour();
});
BoxFourIncome.addEventListener("input", () => {
  TotalUpdateFour();
});

BoxFiveIncome.addEventListener("input", () => {
  TotalUpdateFive();
});
BoxFivePending.addEventListener("input", () => {
  TotalUpdateFive();
});
// console.log(boxOnePrice);
// console.log(tableChildNum);
const tr = document.createElement("tr");
const tdno = document.createElement("td");
const tdbox = document.createElement("td");
let tdquantity = document.createElement("td");
let tdprice = document.createElement("td");
tdno.classList.add("p-5");
tdbox.classList.add("p-5");
tdquantity.classList.add("p-5");
tdprice.classList.add("p-5");

tr.append(tdno, tdbox, tdquantity, tdprice);
tableTag.append(tr);
tdno.innerText = "1.";
tdbox.innerText = "box1";
tdquantity.innerText = 0;
tdprice.innerText = 0;
boxOneTag.addEventListener("click", () => {
  // let boxOnePrice = (box1 += 500);

  let Total = Number(BoxOneTotal.innerText);
  if (tdquantity.innerText >= Total) {
    alert("Please Check Your Total......");
  } else {
    No1 += 1;
    Total -= 1;
    BoxOneTotal.innerText = Total;
  }

  tdquantity.innerText = No1;
  tdprice.innerText = No1 * 500;
  calcgrand();
});
trashOne.addEventListener("click", () => {
  console.log("delete on time..");
  if (No1 > 0) {
    No1 -= 1;
    let Total = Number(BoxOneTotal.innerText);
    Total += 1;
    BoxOneTotal.innerText = Total;
  }
  tdquantity.innerText = No1;
  tdprice.innerText = No1 * 500;
  calcgrand();
});
let No2 = 0;
const tr2 = document.createElement("tr");
const tdno2 = document.createElement("td");
const tdbox2 = document.createElement("td");
let tdquantity2 = document.createElement("td");
let tdprice2 = document.createElement("td");
tdno2.classList.add("p-5");
tdbox2.classList.add("p-5");
tdquantity2.classList.add("p-5");
tdprice2.classList.add("p-5");

tr2.append(tdno2, tdbox2, tdquantity2, tdprice2);
tableTag.append(tr2);
tdno2.innerText = "2.";
tdbox2.innerText = "box2";
tdquantity2.innerText = 0;
tdprice2.innerText = 0;
const boxTwoTag = document.getElementsByClassName("Two")[0];
boxTwoTag.addEventListener("click", () => {
  let Total = Number(BoxTwoTotal.innerText);
  if (tdquantity2.innerText >= Total) {
    alert("Please Check Your Total......");
  } else {
    No2 += 1;
    Total -= 1;
    BoxTwoTotal.innerText = Total;
  }
  tdquantity2.innerText = No2;
  tdprice2.innerText = No2 * 650;
  calcgrand();
});
trashTwo.addEventListener("click", () => {
  console.log("delete on time..");
  if (No2 > 0) {
    No2 -= 1;
    let Total = Number(BoxTwoTotal.innerText);
    Total += 1;
    BoxTwoTotal.innerText = Total;
  }
  tdquantity2.innerText = No2;
  tdprice2.innerText = No2 * 650;
  calcgrand();
});
let No3 = 0;
const tr3 = document.createElement("tr");
const tdno3 = document.createElement("td");
const tdbox3 = document.createElement("td");
let tdquantity3 = document.createElement("td");
let tdprice3 = document.createElement("td");
tdno3.classList.add("p-5");
tdbox3.classList.add("p-5");
tdquantity3.classList.add("p-5");
tdprice3.classList.add("p-5");

tr3.append(tdno3, tdbox3, tdquantity3, tdprice3);
tableTag.append(tr3);
tdno3.innerText = "3.";
tdbox3.innerText = "box3";
tdquantity3.innerText = 0;
tdprice3.innerText = 0;
const boxThreeTag = document.getElementsByClassName("Three")[0];
boxThreeTag.addEventListener("click", () => {
  let Total = Number(BoxThreeTotal.innerText);
  if (tdquantity3.innerText >= Total) {
    alert("Please Check Your Total......");
  } else {
    No3 += 1;
    Total -= 1;
    BoxThreeTotal.innerText = Total;
  }
  tdquantity3.innerText = No3;
  tdprice3.innerText = No3 * 1250;
  calcgrand();
});
trashThree.addEventListener("click", () => {
  console.log("delete on time..");
  if (No3 > 0) {
    No3 -= 1;
    let Total = Number(BoxThreeTotal.innerText);
    Total += 1;
    BoxThreeTotal.innerText = Total;
  }
  tdquantity3.innerText = No3;
  tdprice3.innerText = No3 * 1250;
  calcgrand();
});
let No4 = 0;
const tr4 = document.createElement("tr");
const tdno4 = document.createElement("td");
const tdbox4 = document.createElement("td");
let tdquantity4 = document.createElement("td");
let tdprice4 = document.createElement("td");
tdno4.classList.add("p-5");
tdbox4.classList.add("p-5");
tdquantity4.classList.add("p-5");
tdprice4.classList.add("p-5");

tr4.append(tdno4, tdbox4, tdquantity4, tdprice4);
tableTag.append(tr4);
tdno4.innerText = "4.";
tdbox4.innerText = "box4";
tdquantity4.innerText = 0;
tdprice4.innerText = 0;
const boxFourTag = document.getElementsByClassName("Four")[0];
boxFourTag.addEventListener("click", () => {
  let Total = Number(BoxFourTotal.innerText);
  if (tdquantity4.innerText >= Total) {
    alert("Please Check Your Total......");
  } else {
    No4 += 1;
    Total -= 1;
    BoxFourTotal.innerText = Total;
  }
  tdquantity4.innerText = No4;
  tdprice4.innerText = No4 * 1800;
  calcgrand();
});
trashFour.addEventListener("click", () => {
  console.log("delete on time..");
  if (No4 > 0) {
    No4 -= 1;
    let Total = Number(BoxFourTotal.innerText);
    Total += 1;
    BoxFourTotal.innerText = Total;
  }
  tdquantity4.innerText = No4;
  tdprice4.innerText = No4 * 1800;
  calcgrand();
});

let No5 = 0;
const tr5 = document.createElement("tr");
const tdno5 = document.createElement("td");
const tdbox5 = document.createElement("td");
let tdquantity5 = document.createElement("td");
let tdprice5 = document.createElement("td");
tdno5.classList.add("p-5");
tdbox5.classList.add("p-5");
tdquantity5.classList.add("p-5");
tdprice5.classList.add("p-5");

tr5.append(tdno5, tdbox5, tdquantity5, tdprice5);
tableTag.append(tr5);
tdno5.innerText = "5.";
tdbox5.innerText = "box5";
tdquantity5.innerText = 0;
tdprice5.innerText = 0;
const boxFiveTag = document.getElementsByClassName("Five")[0];
boxFiveTag.addEventListener("click", () => {
  let Total = Number(BoxFiveTotal.innerText);
  if (tdquantity5.innerText >= Total) {
    alert("Please Check Your Total......");
  } else {
    No5 += 1;
    Total -= 1;
    BoxFiveTotal.innerText = Total;
  }
  tdquantity5.innerText = No5;
  tdprice5.innerText = No5 * 2500;
  calcgrand();
});
trashFive.addEventListener("click", () => {
  console.log("delete on time..");
  if (No5 > 0) {
    No5 -= 1;
    let Total = Number(BoxFiveTotal.innerText);
    Total += 1;
    BoxFiveTotal.innerText = Total;
  }
  tdquantity5.innerText = No5;
  tdprice5.innerText = No5 * 2500;
  calcgrand();
});
const GrandTotal = document.getElementsByClassName("grand")[0];
const Final = document.createElement("td");
Final.classList.add("finaltd");
GrandTotal.append(Final);
function calcgrand() {
  let lastFinal =
    Number(tdprice.innerText) +
    Number(tdprice2.innerText) +
    Number(tdprice3.innerText) +
    Number(tdprice4.innerText) +
    Number(tdprice5.innerText);
  Final.innerText = lastFinal;
}
calcgrand();
// ===============================
// Save Income & Pending
// ===============================

const saveData = () => {
  localStorage.setItem("incomeOne", BoxOneIncome.value);
  localStorage.setItem("pendingOne", BoxOnePending.value);

  localStorage.setItem("incomeTwo", BoxTwoIncome.value);
  localStorage.setItem("pendingTwo", BoxTwoPending.value);

  localStorage.setItem("incomeThree", BoxThreeIncome.value);
  localStorage.setItem("pendingThree", BoxThreePending.value);

  localStorage.setItem("incomeFour", BoxFourIncome.value);
  localStorage.setItem("pendingFour", BoxFourPending.value);

  localStorage.setItem("incomeFive", BoxFiveIncome.value);
  localStorage.setItem("pendingFive", BoxFivePending.value);
};

// Save whenever input changes
[
  BoxOneIncome,
  BoxOnePending,
  BoxTwoIncome,
  BoxTwoPending,
  BoxThreeIncome,
  BoxThreePending,
  BoxFourIncome,
  BoxFourPending,
  BoxFiveIncome,
  BoxFivePending,
].forEach((input) => {
  input.addEventListener("input", saveData);
});

// ===============================
// Load saved Income & Pending
// ===============================

BoxOneIncome.value = localStorage.getItem("incomeOne") || 0;
BoxOnePending.value = localStorage.getItem("pendingOne") || 0;

BoxTwoIncome.value = localStorage.getItem("incomeTwo") || 0;
BoxTwoPending.value = localStorage.getItem("pendingTwo") || 0;

BoxThreeIncome.value = localStorage.getItem("incomeThree") || 0;
BoxThreePending.value = localStorage.getItem("pendingThree") || 0;

BoxFourIncome.value = localStorage.getItem("incomeFour") || 0;
BoxFourPending.value = localStorage.getItem("pendingFour") || 0;

BoxFiveIncome.value = localStorage.getItem("incomeFive") || 0;
BoxFivePending.value = localStorage.getItem("pendingFive") || 0;

// ===============================
// Recalculate Total after refresh
// ===============================

TotalUpdateOne();
TotalUpdateTwo();
TotalUpdateThree();
TotalUpdateFour();
TotalUpdateFive();
