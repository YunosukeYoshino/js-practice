// "①値に"りんご""を持つ、定数appleを定義してください。
// ②定義した定数appleの値をログで確認してください。"

const apple = "りんご";
console.log(apple);

// "①値に70を持つ、変数weightを定義してください。
// ②定義したweightに60を代入してください。
// ③定義したweightの値をログで確認してください。"

let weight = 70;
weight = 60;
console.log(weight);


// "①仮引数numを持つ関数twiceを定義してください。
// ②仮引数を2倍して返してください。
// ③関数twiceに実引数3を渡して実行し、返り値をログ出力してください。"
const twice = (num) => {
    return num * 2
}
console.log(twice(3));

// "①仮引数numを持つ関数addOneを定義してください。
// ②仮引数を+1して返してください。
// ③関数addOneに実引数3を渡して実行し、返り値をログ出力してください。"
const addOne = (num) => {
    return num + 1;
}
console.log(addOne(3));

const minusOne = (num) => {
    return num - 1;
}
console.log(minusOne(3));

// "①仮引数strを持つ関数getLengthを定義してください。
// ②仮引数strの文字数を返してください。
// ③関数getLengthに実引数""apple""を渡して実行し、返り値をログ出力してください。"
const getLength = (str) => {
    return str.length;
}
console.log(getLength("apple"));


// "①仮引数strを持つ関数judgeLengthを定義してください。
// ②仮引数strの文字数が10文字未満ならtrue,10文字以上だったらfalseを返してください。
// ③関数getLengthに実引数""apple""を渡して実行し、返り値をログ出力してください。"

const judgeLength = (str) => {
    // ここに処理を書いてください。
    if (str >= 10) {
        return false;
    } else {
        return true;
    }
}
// ③ログ出力してください。
console.log(judgeLength("apple"));

// 引数の文字数が5文字以上かつ10文字未満ならtrueを返す関数を作る

const judgeLength1 = (str) => {
    // ここに処理を書いてください。
    if (str >= 5 && str < 10) {
        return false;
    } else {
        return true;
    }
}
// ③ログ出力してください。
console.log(judgeLength1("apple"));


// "①仮引数parameterを持つ関数isStringを定義してください。
// ②仮引数parameterが文字列ならtrue、それ以外ならfalseを返してください。
// ③関数isStringに実引数3を渡して実行し、返り値をログ出力してください。"
const isString = (parameter) => {
    // if (parameter === "string") {
    //     return true
    // }
    // else {
    //     return false
    // }

    return typeof parameter === "string"
}
console.log(isString("3"))

// "①仮引数num1, num2を持つ関数getSumを定義してください。
// ②仮引数num1とnum2の合計値を返してください。
// ③関数getSumに実引数3, 2を渡して実行し、返り値をログ出力してください。"

const getSum = (num1, num2) => {
    // ここに処理を書いてください。
    return num1 + num2
}
// ③ログ出力してください。
console.log(getSum(3, 2))

// "①仮引数firstName, lastNameを持つ関数getFullNameを定義してください。
// ②仮引数firstNameとlastNameを結合した文字列を返してください。フルネームなので間に半角スペースを付け加えてください。
// ③関数getFullNameに実引数""Tanaka"", ""Taro""を渡して実行し、返り値をログ出力してください。"

const getFullName = (firstName, lastName) => {
    // ここに処理を書いてください。
    return firstName + lastName;
}
console.log(getFullName("芳野", "", "悠之助"));

const str = 'Menta';

// Menの部分だけコンソールに出力してください

const alphabet = "abcde";

// 最後のeだけコンソールに出力してください"
console.log(str.substring(0, 3));

console.log(alphabet.substring(4));

// confirmメソッドを使用し、名前が間違っていないか確認するポップアップを表示させてましょう
const name1 = (judgeName) => {
    return confirm(judgeName);
}
console.log(name1("芳野 悠之助"))



// ①定数personにオブジェクトを定義する。

const person = {}

console.log(person);

// プロパティnameが"ボブ"、ageが20であるオブジェクトを定義する
person.name = "ボブ"
person.age = 20

console.log(person.name)

// オブジェクトのageプロパティの値を30に変更し、ログに出力しよう
// "①ageプロパティに30の数字を代入してください。
// ②コンソール上にobjectを表示させ、ageが変更されていることを確認してください。"

person.age = 30
console.log(person.age)

// "①ageプロパティの値を+1してください。
// ②コンソール上にobjectを表示させ、ageが変更されていることを確認してください。"

const object = { age: 35, weight: 80 }
// ここから処理を書いてください。
object.age++
console.log(object)

// libraryオブジェクトのopenHourプロパティの値を更新し、ログに出力してみよう

// ①定数libraryの中のopenHourプロパティの値を "8am ~ 9pm"に更新してください。
const library = {
    openHour: "7am ~ 10pm"
}

library.openHour = "8am ~ 9pm";
console.log(library.openHour);



// "①weightプロパティに""50kg""の値を持たせて、定数objectに追加してください。
// ②コンソール上にobjectを表示させ、weightが追加されていることを確認してください。"
const object1 = { name: "Bob", age: 35 }
object1.weight = 50
console.log(object1.weight);

// "①定数objectのnameプロパティを削除してください。
// ②コンソール上にobjectを表示させ、nameが削除されていることを確認してください。"
const object2 = { name: "Bob", age: 35 }
// ここから処理を書いてください。
delete object2.name
console.log(object2);



// 文字列要素"りんご"、"みかん"、"いちご"が入った配列を定義してください。

const test = ["りんご", "みかん", "いちご"]

// 配列の2番目の要素をログ出力してください。

const arr = ["りんご", "みかん", "いちご"];

// arr[インデックス]のように書きましょう"

console.log(arr[1]);

// 配列の3番目の要素を”もも”に変更してログ出力してください。
arr[2] = "もも";
console.log(arr);

// 配列の最後に文字列要素"すいか"を追加してください。
arr.push("すいか");
console.log(arr);

// 配列の最後の要素を削除してください。
arr.pop();
console.log(arr);

// 配列の最初に文字列要素"すいか"を追加してください。
arr.unshift("すいか");
console.log(arr);

// 配列を逆順にしてください。
arr.reverse();
console.log(arr);

// ダメなやつだった
// 配列から"みかん"のindexを取得してください。
console.log(arr.indexOf("みかん"));


// ダメなやつだった
// 配列arrayの中に"りんご"が含まれているか確かめてください。
const array = ["りんご", "みかん", "いちご"]
// りんごが含まれていたらtrueを代入してください。
const answer = array.includes("りんご")
console.log(answer);


// ダメなやつだった
// 配列arrayの2番目と3番目だけを格納した配列を作成してください。
// "2番目の要素と3番目の要素からなる配列をanswer変数に代入してください。
const answer1 = array.slice(1)
console.log(answer1);


// 配列arrayの3番目の要素を削除してください。
// 3番目の要素が削除された配列をanswer変数に代入してください。
const answer2 = array.splice(0, 2)

console.log(answer2);

// 配列arrayの要素をそれぞれコンソールに出力してください。

const fruits = ["apple", "orange", "grape"];

const answer3 = fruits.forEach(fruit => {
    console.log(fruit);
})

// 配列arrayの要素をそれぞれ２倍にしてコンソールに出力してください。
const numbers = [1, 2, 3]


// ダメなやつだった
// map()が出てこなかった
// 配列要素を2倍した配列を定義
const doubleNumbers = numbers.map(number => number * 2)

// 関数を発火してログ出力
console.log(doubleNumbers) // [2, 4, 6]


// 配列arrayの要素をそれぞれ３倍にした配列を取得してください。
const tripleNumbers = numbers.map((number) => {
    return number * 3
})

console.log(tripleNumbers);


// 配列arrayの要素を文字コード順に並びかえてください。
const arr4 = ["佐々木", "大谷", "ダル"]

const answer4 = arr4.sort()
console.log(answer4);


// 配列arrayの要素を昇順に並びかえてください。
const arr5 = [1975, 11, 20];
arr5.sort((a, b) => {
    // 戻り値が正（a-bの差が正）のとき、aをbの後ろに並べ替え
    // 戻り値が負（a-bの差が負）のとき、aをbの前に並べ替え
    return a - b;
})
console.log(arr5);
// 配列arrayの要素を降順に並びかえてください。
arr5.sort((a, b) => {
    // 戻り値が正（a-bの差が正）のとき、aをbの後ろに並べ替え
    // 戻り値が負（a-bの差が負）のとき、aをbの前に並べ替え
    return b - a;
})
console.log(arr5);
// 配列arrayの要素を,（カンマ）で区切った文字列に連結した新しい配列を返してください。
const array6 = ["りんご", "みかん", "いちご"];
// ここに処理を書いてください。
console.log(array6.join(","))


// 配列arrayの要素をarrayCloneでスプレッド構文を使用して展開し、arrayのクローンを作成してください。
const array7 = [1, 2, 3, 4, 5];
const arrayClone = [...array7];
console.log(arrayClone);


// 配列arrayの要素をarray2で展開し、新たな要素、6,7,8,9,10を追加した新しい配列を作成してください。
const newNumber = [6, 7, 8, 9, 10]

const sumNumber = [...arrayClone, ...newNumber]

console.log(sumNumber);

//初見クリアできず（配列を持たせるオブジェクトの中身に)
// ①定数objectに代入してください。
// "id、name、ageプロパティを持つオブジェクト要素の配列を定義する。
// それぞれidは1,2,3、nameは""ジョン"",""ボブ"",""マイケル""、ageは15,20,30とする"
const object8 = [
    {
        id: 1,
        name: "ジョン",
        age: 15,
    }, {
        id: 2,
        name: "ボブ",
        age: 20,
    },
    {
        id: 3,
        name: "マイケル",
        age: 30,
    }

]

// オブジェクト配列の3番目の要素のageを取得してログ出力する
console.log(object8[2].age);


//初見クリアできなかった。
// 配列内のオブジェクトのnameプロパティの文字列が3文字のオブジェクト要素からなる配列を取得する。
const found = object8.filter(el =>
    el.name.length === 3
)
console.log(found);


// 配列内のオブジェクトのidプロパティが1の要素を除いた配列を取得する。

const object9 = [
    { id: 1, name: 'John', age: 15 },
    { id: 2, name: 'Bob', age: 20 },
    { id: 3, name: 'Michael', age: 15 },
];
const found2 = object9.filter(el =>
    el.id != 1)
console.log(found2);
