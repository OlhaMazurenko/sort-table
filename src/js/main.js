const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

function sortTable(index, type) {
  let compare = function(rowA, rowB) {
    const rowDataA = rowA.cells[index].innerHTML 
    const rowDataB  = rowB.cells[index].innerHTML;
    
    if (type === 'number') {
      return rowDataA - rowDataB;
    } else {
      if(rowDataA < rowDataB) return -1;
      if(rowDataA > rowDataB) return 1;
      if(rowDataA = rowDataB) return 0;

    }
  }
<<<<<<< HEAD
  let rows = [].slice.call(tbody.rows);
  rows.sort(compare);
  table.removeChild(tbody);

  for (let i = 0; i < rows.length; i++) {
    tbody.appendChild(rows[i]);
  }
  
  table.appendChild(tbody);
}

table.addEventListener('click', (event)=> {
  const element = event.target;
  const index = element.cellIndex;
  const type = element.getAttribute('data-type');
  if (element.tagName != 'TH') {
    return;
  } 
    sortTable(index);
});
=======
  rowsArray.sort(compare);
    for (let i = 0; i < rowsArray.length; i++) {
    tbody.appendChild(rowsArray[i]);
  }
  sortTable.appendChild(tbody);
}
>>>>>>> 38e76057647a0179bf7ba63196a32e56aef67be7
