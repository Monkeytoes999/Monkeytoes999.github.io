
async function callCovidAPI() {
    let response = await fetch("https://api.covidactnow.org/v2/country/US.json?apiKey=dd1370169b8c4397b1ffc66b629b03da");
    let data = await response.json()
    return data;
}

async function covidJson() {
    return await callCovidAPI().then(data => {return changeHtml("<h3>United States Daily Covid Report</h3>\nDaily reported cases: " + data["actuals"]["newCases"] + "\nDaily reported deaths: " + data["actuals"]["newDeaths"] + "\nLast updated: " + data["lastUpdatedDate"])});
}

function changeHtml(content) {
    var par = content.split("\n")
    var base = document.createElement("div");
    base.style.lineHeight = 1;
    base.classList.add("widget");
    for (let i = 0; i < par.length; i++){
        var text = document.createElement("p");
        text.innerHTML = par[i];
        base.appendChild(text);
    }
    return base;
}