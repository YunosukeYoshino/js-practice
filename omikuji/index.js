'use strict'

{
    const btn = document.getElementById("btn")

    btn.addEventListener("click", () => {
        // const result = ['大吉', '中吉', '大凶', '末吉']
        // const n = Math.floor(Math.random() * result.length)
        const n = Math.random();

        if (n < 0.05) {
            btn.textContent = 'UR'; // 5%
        } else if (n < 0.2) {
            btn.textContent = 'SR'; // 15%
        } else {
            btn.textContent = 'NR'; // 80%
        }
        console.log(n);
        // btn.textContent = result[n];
    })
}
