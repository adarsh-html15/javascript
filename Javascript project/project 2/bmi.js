const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = "Please give a valied height"
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please give a valied weight"
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        if (bmi < 18.6) {
            result.innerHTML = `<span>${bmi} you aur under weight go and grabe some food </span>`
        } else if (18.6 < bmi > 24.9) {
            result.innerHTML = `<span>${bmi} wooow!you are healthy     </span>`
        } else
            result.innerHTML = `<span>${bmi} <br>shit! you are over weight do some exersice </span>`
    }

})