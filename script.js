let barContainer = document.getElementById("bars");
let finishBtn = document.getElementById("finish")

const colors = ["#B1E26F", "#ED7C6E", "#8DEECC", "#8DCCEF", "#F9D076"];
// Create Progress Bar
onload = () => {
    let bar = "";

    for (let i = 0; i < 6; i++) {
        bar += `
            <div class="barTemplate">
                <li class="singleBar" style="background-color: ${colors[i]}">50%</li>
            </div>
        `
    }
    barContainer.innerHTML = bar;
}
// Compelete Progress
finishBtn.addEventListener("click", () => {
    const progress = document.querySelectorAll(".singleBar");
    for (let j = 0; j < progress.length; j++) {

        let width = 30;
        let id = setInterval(frame, 20);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                document.getElementById("finish").disabled = false;
            } else {
                width++;
                progress[j].style.width = width + "%";
                progress[j].innerHTML = width + "%";
                document.getElementById("finish").disabled = true;
            }
        }
    }

});

