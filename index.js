console.log("home apge loading suceess")

window.onload = () => {
    const payload = localStorage.getItem("payload");
    const payload_json = JSON.parse(payload)
    console.log(payload_json.email)

    const intro = document.getElementById('intro')
    intro.innerText = payload_json.email
}