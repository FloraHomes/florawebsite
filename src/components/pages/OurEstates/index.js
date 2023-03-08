
const handleAccordion = () => {
 
    const btn = document.querySelectorAll(".acc-btn")
    const content = document.querySelectorAll(".acc-content");

    for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = function () {

            if (content[i].style.display === "none") {
                content[i].style.display = "block";
            } else {
                content[i].style.display = "none";
            }
        }
        console.log("done");
    }
}
export default handleAccordion




