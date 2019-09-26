function showMessage() {
    let a = parseInt(document.getElementById('amount').value)
    let b = parseInt(document.getElementById('from').value)
    let c = parseInt(document.getElementById('to').value)
    let d = a * c / b

    alert('result: ' + d)

}