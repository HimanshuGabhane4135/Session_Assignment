// " hello there , how are you "
//  - remove white space ,
function removeSpaces(string) {
  return string.split(" ").join("");
}

//  - replace "there" with your name ,

function replaceString() {
  let inpForReplace = document.getElementById("inpForReplace").value;
  let inpName = document.getElementById("inpName").value;

  if (inpForReplace === null || inpForReplace.length === 0) {
    alert("Please Enter String for Replace");
  } else if (inpName === null || inpName.length === 0) {
    alert("Please Enter Your Name");
  } else {
    document.getElementById("inpForReplace").value = inpForReplace.replace(
      "there",
      inpName
    );
  }
}

//  - find "are" index ,

function findIndexString() {
  let inpForFind = document.getElementById("inpForFind").value;
  let inpFindStr = document.getElementById("inpFindStr").value;

  if (inpForFind === null || inpForFind.length === 0) {
    alert("Please Enter String for Find Index");
  } else if (inpFindStr === null || inpFindStr.length === 0) {
    alert("Please Enter String which need to be find");
  } else {
    document.getElementById("inpFindStr").value =
      inpForFind.indexOf(inpFindStr);
  }
}

//  - concat "abc" at the end of the string
function concateString() {
  let inpForConcate = document.getElementById("inpForConcate").value;
  let inpConcateStr = document.getElementById("inpConcateStr").value;

  if (inpForConcate === null || inpForConcate.length === 0) {
    alert("Please Enter String for Concatination");
  } else if (inpConcateStr === null || inpConcateStr.length === 0) {
    alert("Please Enter String which need to be concate");
  } else {
    document.getElementById("inpForConcate").value += inpConcateStr;
  }
}

// String reverse programs (do not use reverse function)

function isAlphabet(x) {
  if ((x >= "A" && x <= "Z") || (x >= "a" && x <= "z")) {
    return true;
  } else {
    return false;
  }
}

function interChangeChar(first, second, str) {
  var charString = "";
  for (var i = 0; i < str.length; i++) {
    if (i == first) {
      charString = charString + str[second];
    } else {
      if (i == second) {
        charString = charString + str[first];
      } else {
        charString = charString + str[i];
      }
    }
  }
  return charString;
}

function reverseString() {
  let inpForRev = document.getElementById("inpForRev").value;
  if (inpForRev === null || inpForRev.length === 0) {
    alert("Please Enter String to perform reverese");
  } else {
    let rightEnd = inpForRev.length - 1;
    let leftEnd = 0;

    while (leftEnd < rightEnd) {
      if (!isAlphabet(inpForRev[leftEnd])) {
        leftEnd++;
      } else if (!isAlphabet(inpForRev[rightEnd])) {
        rightEnd--;
      } else {
        inpForRev = interChangeChar(leftEnd, rightEnd, inpForRev);
        leftEnd++;
        rightEnd--;
      }
    }
    console.log(inpForRev);
    document.getElementById("revOutput").value = inpForRev;
  }
}

// - ex: "Hello world" : “dlr”,

// - ex: "123sda45678sdd9"

// Question- 3

const searchFun = () => {
  let filter = document.getElementById("myInput").value.toUpperCase();
  let myTable = document.getElementById("employeeList");
  let tr = myTable.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];

    if (td) {
      let textValue = td.textContent || td.innerHTML;

      if (textValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

var selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
}

function onReset() {
  document.getElementById("myForm").reset();
}

function sortClick(field) {}

function readFormData() {
  var formData = {};
  formData["Name"] = document.getElementById("Name").value;
  formData["Age"] = document.getElementById("Age").value;
  formData["salary"] = document.getElementById("salary").value;
  formData["address"] = document.getElementById("address").value;
  return formData;
}

let arr = [{ name: "himanshu" }, { name: "xyz" }];

function insertNewRecord(data) {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.Name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.Age;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.salary;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.address;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("Name").value = "";
  document.getElementById("Age").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("address").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("Age").value = selectedRow.cells[1].innerHTML;
  document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
  document.getElementById("address").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.Name;
  selectedRow.cells[1].innerHTML = formData.Age;
  selectedRow.cells[2].innerHTML = formData.salary;
  selectedRow.cells[3].innerHTML = formData.address;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

function validate() {
  isValid = true;
  if (document.getElementById("Name").value == "") {
    isValid = false;
    document.getElementById("NameValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document.getElementById("NameValidationError").classList.contains("hide")
    )
      document.getElementById("NameValidationError").classList.add("hide");
  }
  return isValid;
}

// Sorting Table

function sortTableByColumn(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
    const aColText = a
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();
    const bColText = b
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();

    return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
  });

  // Remove all existing TRs from the table
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  table
    .querySelectorAll("th")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-asc", asc);
  table
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".list th").forEach((headerCell) => {
  headerCell.addEventListener("click", () => {
    const tableElement = headerCell.parentElement.parentElement.parentElement;
    const headerIndex = Array.prototype.indexOf.call(
      headerCell.parentElement.children,
      headerCell
    );
    const currentIsAscending = headerCell.classList.contains("th-sort-asc");

    sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
  });
});

// Pagination Start


// Pagination Ends
