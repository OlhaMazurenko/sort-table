let sortTable = document.getElementById('sortTable');

sortTable.onclick = function(event) {
  if (event.target.tagName != 'TH') return;
  sortSortTable(event.target.cellIndex, event.target.getAttribute('data-type'));
};
function sortSortTable(colNum, type) {
  let tbody = sortTable.getElementsByTagName('tbody')[0];
  let rowsArray = [].slice.call(tbody.rows);
  let compare;
  switch (type) {
    case 'number':
      compare = function(rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;
    case 'string':
      compare = function(rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML;
      };
      break;
  }
  rowsArray.sort(compare);
    for (var i = 0; i < rowsArray.length; i++) {
    tbody.appendChild(rowsArray[i]);
  }
  sortTable.appendChild(tbody);
}