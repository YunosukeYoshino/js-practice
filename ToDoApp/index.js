const onClickAdd = () => {
    // テキストボックスを取得し、初期化する。
    const inputText = document.getElementById("addText").value;
    document.getElementById("addText").value = ""; // inputを初期化

    // Elements生成
    const div = document.createElement("div");
    div.className = "flex mb-4 items-center";

    const p = document.createElement("p");
    p.innerText = inputText;//inputテキストを出力
    p.className = "w-full text-grey-darkest";

    // divの子要素に各要素を設定する
    div.appendChild(p);
    document.getElementById("list").appendChild(div);
}

document
    .getElementById("addButton")
    .addEventListener("click", () => onClickAdd());
