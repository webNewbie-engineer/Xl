let defaaultCity = '长沙'

try {
    if (localStorage.city) {
        defaaultCity = localStorage.city;
    }
} catch (e) {
    console.log(e.name + " :" + e.message);
}

export default {
    city: defaaultCity
}