const date = new Date();

const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const fullMonth = getFullMonth(month + 1)

const fulldate = `${day} / ${fullMonth} / ${year}`;

document.getElementById("date").innerHTML = fulldate;

// Turn month number into String
function getFullMonth(month) {
    switch(month) {
        case 1:
            return "Enero";
        case 2:
            return "Febrero";
        case 3:
            return "Marzo";
        case 4:
            return "Arbil";
        case 5:
            return "Mayo";
        case 6:
            return "Junio";
        case 7:
            return "Julio";
        case 8:
            return "Agosto";
        case 9:
            return "Septiembre";
        case 10:
            return "Octubre";
        case 11:
            return "Noviembre";
        case 12:
            return "Diciembre";
        default:
            return "Mes Invalido";
    }
}