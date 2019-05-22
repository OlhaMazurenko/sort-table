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
