export default {
    changCity(state, city) {
        state.city = city;
        try {
            localStorage.city = city;
        } catch (e) {
            console.log(e.name + " :" + e.message);
        }
    }
}
