var form = document.getElementById('form');
var itemList = document.getElementById('tbody');
form.addEventListener('submit', addItems);
var total = 0;
function addItems(e){
    e.preventDefault();
    var name =document.getElementById('itemName').value
    var unit =document.getElementById('itemQuantity').value
    var price =document.getElementById('itemAmount').value

    var nName = document.createElement('td');
    var nUnit = document.createElement('td');
    var nPrice = document.createElement('td');
    var nTotal = document.createElement('td');
    var gTotal = document.getElementById('gtotal');

    nName.textContent = name;
    nUnit.textContent = unit;
    nPrice.textContent = price;
    nTotal.textContent = unit*price;


    var itemDisplay = document.createElement('tr');

    itemDisplay.appendChild(nName);
    itemDisplay.appendChild(nUnit);
    itemDisplay.appendChild(nPrice);
    itemDisplay.appendChild(nTotal);
    itemList.appendChild(itemDisplay);
    
    total += (unit*price);
    gTotal.textContent = "Grand Total:- "+total;
}



