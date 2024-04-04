var res = fetch("https://restcountries.com/v3.1/all");
res.then((data) => data.json()).then((data1) => foo(data1));

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";

function foo(data1) {
    for (var i = 0; i < data1.length; i++) {
        var col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `<div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${data1[i].name.common}</div>
            <div class="card-body text-primary">
                <h5 class="card-title">${data1[i].capital}</h5>
                <p class="card-text">${data1[i].region}</p>
                <img src="${data1[i].flags.png}" style="max-height:100px;width:auto;" class="card-img-top">
                <p class="card-text">Population: ${data1[i].population}</p>
            </div>
        </div>`;
        row.append(col);
    }
    container.append(row);
    document.body.append(container);
}
