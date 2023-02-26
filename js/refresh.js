const forceGraphEl = document.getElementById('force-graph');
const disjointForceGraphEl = document.getElementById('disjoint-force-graph');
const tableEl = document.getElementById('table-table');
const tableBodyEl = document.getElementById('table-tbody');

function refreshGraph(resultData) {
    if(forceGraphEl.firstChild) {
        forceGraphEl.removeChild(forceGraphEl.firstChild);
    }
    forceGraphEl.appendChild(ForceGraph(resultData || forceGraphData));
    
    if(disjointForceGraphEl.firstChild) {
        disjointForceGraphEl.removeChild(disjointForceGraphEl.firstChild);
    }
    disjointForceGraphEl.appendChild(DisjointForceGraph(resultData || disjointForceGraphData));

    refreshTable(resultData || forceGraphData)
}

function refreshTable(resultData) { 
    var links = resultData["links"];

    var tbodyEl = document.querySelector("tbody");
    while (tbodyEl.rows.length > 0) {
        tbodyEl.deleteRow(0);
    }
    var template = document.querySelector('#table-template');
    
    links.forEach( element => {
        // Clone the new row and insert it into the table
        var clone = template.content.cloneNode(true);
        var td = clone.querySelectorAll("td");
        td[0].textContent = element.source;
        td[1].textContent = element.target;
        td[2].textContent = element.value;

        tbodyEl.appendChild(clone);
    });
}

refreshGraph();