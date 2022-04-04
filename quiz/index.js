"use strict"


{
    const question = document.getElementById("question");
    const choices = document.getElementById("choices");
    const btn = document.getElementById("btn");
    const result = document.getElementById("result");
    const scoreLabel = document.querySelector("#result > p");

    const quizSet = [
        {
            q: 'ジュエリーは何歳？', c: ['11歳', '13歳', '14歳']
        },
        {
            q: 'ゆうちは何歳?', c: ['27歳', '14歳', '28歳']
        },
        {
            q: '2005年の打者OPSランキング1位は誰?', c: ['金本 知憲', '福留 孝介', 'Tウッズ']
        },
    ];
    let currentNum = 0;
    let isAnswered;
    let score = 0
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[j], arr[i]] = [arr[i], arr[j]];//分割代入
        }
        return arr;
    }

    function checkAnswer(li) {
        if (isAnswered) {
            return;//この問題がすでに回答済みだったら、これ以降の正誤判定の処理はしない
        }
        isAnswered = true;//回答したときに isAnswered を true にしたい

        if (li.textContent === quizSet[currentNum].c[0]) {
            li.classList.add('correct');
            score++;
        } else {
            li.classList.add('wrong');
        }
        btn.classList.remove('disabled');//questionが選ばれたらdisabledクラスを外す

    }


    function setQuiz() {
        isAnswered = false;//画面を最初に表示したときにクイズが始まるので、false
        question.textContent = quizSet[currentNum].q;

        while (choices.firstChild) {
            choices.removeChild(choices.firstChild)// choices の最初の子要素がある限り choices の最初の子要素を消す
        }

        const shuffleChoices = shuffle([...quizSet[currentNum].c])//新しい配列を作って元のquizSetにshuffleが入らないように設定
        shuffleChoices.forEach(choice => {
            const li = document.createElement("li");
            li.textContent = choice;
            li.addEventListener('click', () => {
                checkAnswer(li);
            })
            choices.appendChild(li);
        });

        if (currentNum === quizSet.length - 1) {
            btn.textContent = 'Show Score';
            console.log(quizSet.length);//setQuiz() のところで、もし currentNum が quizSet.length よりひとつ小さい値、つまり最後の問題だったらボタンのテキストを Show Score に変えてあげましょう。
        }
    }
    setQuiz();

    btn.addEventListener('click', () => {
        if (btn.classList.contains('disabled')) {
            return;
        }
        btn.classList.add('disabled');
        if (currentNum === quizSet.length - 1) {
            result.classList.remove('hidden')
            scoreLabel.textContent=`Score: ${score} / ${quizSet.length}`
            console.log("test");
        }else{
            currentNum++;
            setQuiz();
        }
    });
}

