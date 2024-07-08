import { beers } from "./datos.js"


//---------------------------------------------------------------------EJERCICIO 11---------------------------------------------------

// Name, ABV, IBU

function llenarTabla ()
{
    const tableBody = document.querySelector("#beers-table")

    beers.forEach(beers => {
        const row = document.createElement("tr")

        const cellNombre = document.createElement("td")
        cellNombre.textContent = beers.name
        cellNombre.classList.add("text-orange-600", "px-5", "border", "border-purple-700")
        row.appendChild(cellNombre)

        const cellABV = document.createElement("td")
        cellABV.textContent = beers.abv
        cellABV.classList.add("px-5", "border" ,"border-purple-700")
        row.appendChild(cellABV)

        const cellIBU = document.createElement("td")
        cellIBU.textContent = beers.ibu
        cellIBU.classList.add("px-5", "border", "border-purple-700")
        row.appendChild(cellIBU)

        tableBody.appendChild(row)
    })
}

 document.addEventListener("DOMContentLoaded", () => {
    llenarTabla(beers)
 })