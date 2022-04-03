const onClickAdd = () => {
    // テキストボックスを取得し、初期化する。
    const inputText = document.getElementById("addText").value;
    document.getElementById("addText").value = ""; // inputを初期化
    inCompleteList(inputText);
}

//共通の処理を関数化
const deleteFromInCompleteList = (target) => {
    document.getElementById("list").removeChild(target);
}

const inCompleteList = (text) => {

    // Elements生成
    const div = document.createElement("div");
    div.className = "flex mb-4 items-center";

    //pタグ生成
    const p = document.createElement("p");
    p.innerText = text;//inputテキストを出力
    p.className = "w-full text-grey-darkest";//class付与

    //button(完了)生成
    const doneButton = document.createElement("button");
    doneButton.innerText = "Done"//inputテキストを出力
    doneButton.className = "flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green";//class付与
    doneButton.addEventListener("click", () => {
        deleteFromInCompleteList(doneButton.parentNode)
        // const doneTarget = p;
        // doneTarget.classList.add("line-through","text-green");

        ///完了リストに追加する要素
        const addTarget = doneButton.parentNode;
        const text = addTarget.firstElementChild.innerText;
        addTarget.textContent = null//親要素の子要素を空に
        const p = document.createElement("p");
        p.innerText = text;//テキストを取得
        p.className = "w-full text-grey-darkest";//class付与

        ///戻すボタン
        const backButton = document.createElement("button")
        backButton.innerText = "Not Done";
        backButton.className = "flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey";//class付与
        addTarget.appendChild(p);
        addTarget.appendChild(backButton);
        document.getElementById("completeList").appendChild(addTarget);

        backButton.addEventListener("click", () => {
            // 押されたボタンの親を取得
            const deleteTarget = backButton.parentNode;
            document.getElementById("completeList").removeChild(deleteTarget);
            const text = backButton.parentNode.firstElementChild.innerText
            inCompleteList(text)
        });
    });


    //button(削除)生成
    const RemoveButton = document.createElement("button");
    RemoveButton.innerText = "Remove"//inputテキストを出力
    RemoveButton.className = "flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red";//class付与
    RemoveButton.addEventListener("click", () => {
        deleteFromInCompleteList(RemoveButton.parentNode)
    });

    // divの子要素に各要素を設定する
    div.appendChild(p);
    div.appendChild(doneButton);
    div.appendChild(RemoveButton);
    document.getElementById("list").appendChild(div);


}

document
    .getElementById("addButton")
    .addEventListener("click", () => onClickAdd());
