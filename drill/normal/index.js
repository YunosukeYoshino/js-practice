// "①仮引数strを持つ関数getFirstCharを定義してください。
// ②仮引数strの最初の文字を返してください。
// ③関数getFirstCharに実引数appleを渡して実行し、返り値をログ出力してください。"
// ①②に従って関数を定義してください。
const getFirstChar = (str) => {
    // ここに処理を書いてください。
    return str.slice(0, 1)//スタート位置とエンドポイント
}
// ③ログ出力してください。
console.log(getFirstChar("apple"))
// -----------------------------------------------------------//
// "①仮引数strを持つ関数popStringを定義してください。
// ②仮引数strの最後の文字を消してください。
// ③関数popS"// ①②に従って関数を定義してください。
const popString = (str) => {
    // ここに処理を書いてください。
    return str.slice(0, -1)//スタート位置とエンドポイント
}
// ③ログ出力してください。
console.log(popString("apple"))//仮引数strに文字列を渡している
// -----------------------------------------------------------//

// "①仮引数validを持つ関数toggleBooleanを定義してください。
// ②仮引数validのboolean値を逆にしてください。
// ③関数toggleBooleanに実引数trueを渡して実行し、返り値をログ出力してください。"
// -----------------------------------------------------------//

// "// ①②に従って関数を定義してください。
const toggleBoolean = (valid) => {
    // ここに処理を書いてください。
    if (valid === true) {
        return false
    } else {
        return true
    }
}
// ③ログ出力してください。
console.log(toggleBoolean(true))

// -----------------------------------------------------------//
// "①仮引数arrを持つ関数answerを定義してください。
// ②仮引数arrの配列の中身を結合してカンマ区切りの文字列して返してください。
/*③関数answerの実引数に[""apple"", ""orange"", ""melon""]
を持つ配列を渡して実行し、返り値をログ出力してください。"*/
// -----------------------------------------------------------//
// ①②に従って関数を定義してください。
const arr = ["apple", "orange", "melon"];
const answer = (arr) => {
    // ここに処理を書いてください。
    return arr.join(',');
}
// ③ログ出力してください。
console.log(
    answer(arr)
)
// -----------------------------------------------------------//
/* ①課題通りにstrの文字列を変換し、新しい文字列を定数newStrとして定義してください。
②strとnewStrの値をログで出力し、値が変更されていることを確認する。*/

// ①②に従って関数を定義してください。
const str = "あいうえお";
const newStr = str.replace("いうえ", "");
console.log(str);
console.log(newStr);

// 文字列"あああああ"に含まれる"あ"を全て"お"に変換する
// 正規表現を用いて解いてみましょう
const str5 = "あああああ";
// ここから処理を書いてください
const newStr1 = str5.replace(/あ/g, "お");
console.log(newStr1)


{
    // -----------------------------------------------------------//
    // ①stringメソッドのsplitを使用して、課題を解いてみましょう。
    // ②スプレッド構文を使用して課題を解いてみましょう。
    // ③正しく実行できているか、ログで出力して確認してください。

    const str = 'あいうえお';
    const answer = [...str];
    console.log(answer);

}

{
    // -----------------------------------------------------------//
    // 文字列"あいうえおかきくけこ"から"あいうえお"を抜き出した新しい文字列を定義し、ログに出力してください。
    const str = 'あいうえおかきくけこ';
    const newStr = str.replace("かきくけこ", "");
    console.log(newStr)
}
{
    // -----------------------------------------------------------//
    // 対象の文字列を指定した文字で分割し、分割した配列を一つづつログに表示させる。
    // ①文字列メソッドのsplitを使用し、" "で定数greetingの文字列を分割し、新しい配列を作成する。
    // ②配列メソッドのforEachを使用し、コンソールにログを分割した文字列をそれぞれ表示させる。
    const greeting = "Hi my name is Bob!";
    const greetings = greeting.split(' ')
    greetings.forEach((str) =>
        console.log(str)
    )
}
{
    const greeting = "Hi my name is Bob!";
    const splitArray = greeting.split(' ');

    splitArray.forEach((str) => console.log(str));
}

{
    /*confirmメソッドを使用し、名前が間違っていないか確認するポップアップを表示させてましょう
    (テンプレートリテラルを使用して作成してください)*/

    // const names = 'Scot';
    // if (confirm(`${names}さんで間違い無いですか？`)) {
    //     console.log(`ようこそ${names}さん`);
    // } else {
    //     console.log("もう一度正しい名前を入力してください");
    // }

    // const namae = " Jon";
    // if (confirm(`${namae}さんですか？`)) {
    //     console.log(`ようこそ${namae}さん`);
    // } else {
    //     console.log("もう一度入力してください！")
    // }


}

{
    // ①仮引数objectを持つ関数getObjectNameを定義してください。
    // ②仮引数objectのnameプロパティの値を返してください。
    // ③関数getObjectNameの実引数にobjectを渡して実行し、返り値をログ出力してください。

    // const object = { name: "Bob", "age": 20 };
    // getObjectName(obj){
    //     return obj
    // }

    // getObjectName(object.name);

    const object = { name: "Bob", "age": 20 };

    const getObjectName = object => object.age;

    console.log(getObjectName(object));
}
{
    // オブジェクトのプロパティの値を更新する
    // ①定数libraryの中のオブジェクトbookのyearプロパティの値を"10/22/1876"に更新してください。
    const library = {
        book: {
            author: "Tom Sawyer",
            year: "11/12/2021"
        }
    }
    console.log(library.year = "10/22/1876")
}

{
    // ①weightプロパティに"50kg"の値を持たせて、定数objectに追加してください。
    // ②コンソール上にobjectを表示させ、weightが追加されていることを確認してください。
    const object = { name: "Bob", age: 35 };
    // ここから処理を書いてください。
    object.weight = "50kg";
    console.log(object);
}
{   //オブジェクトのプロパティに複数の値を持つhobby配列を追加する
    // ①定数personの中にhobbyプロパティを定義してください。
    // ②hobbyプロパティの値にreadingとshoppingを格納した配列を追加する。
    // ③それぞれコンソール上にreading, shoppingと出力されるようにログ出力してください。
    const person2 = { name: 'Bob', age: 35 };
    const hobby = ["reading", "shopping"];
    console.log(person2);
    console.log(hobby);
}
{
    /* 引数にオブジェクトと消去したいプロパティを渡すことで
    オブジェクトのプロパティを削除することができる関数を作成し、
    ログ出力でプロパティが削除できたことを確認する */
}
{
    // 配列の中で3文字の要素のみに絞り込んだ配列を取得する
    const fruits = ["apple", "grape", "fig"];

    const answer = fruits.filter(fruit => fruit.length == 3);
    console.log(answer)
}

{
    // 配列内の要素をすべて足し合わせる
    // 配列arrayの要素を全て足し合わせて変数resultに返してください。
    const array = [1, 2, 3, 4, 5];
    const result = array.reduce((sum, current) => {
        return sum + current;
    });
    console.log(result)
}

{
    // 配列arrayと配列array2をマージした新たな配列array3をスプレッド構文を使用して作成してください。
    const array = [1, 2, 3, 4, 5];
    const array2 = [6, 7, 8, 9, 10];
    const array3 = [...array, ...array2]
    console.log(array3)
}
{
    // ログに配列の2番目の要素を出力してください。
    const object = [
        { id: 1, name: 'John', age: 15 },
        { id: 2, name: 'Bob', age: 20 },
        { id: 3, name: 'Michael', age: 15 },
    ];
    // ここに処理を書いてください。
    console.log(object[1]);
}

{
    // ①配列メソッドのfindを使用し、条件に最初に一致した要素を定数として定義する。
    // ②定義した定数をログで出力し、確認する

    const object1 = [
        { id: 1, name: 'John', age: 15 },
        { id: 2, name: 'Bob', age: 20 },
        { id: 3, name: 'Michael', age: 15 },
    ];
    const foundElement = object1.find(element =>
        element.id === 2);
    console.log(foundElement);
}
{
    // 配列内のオブジェクトのageプロパティが15の要素を削除する
    const object2 = [
        { id: 1, name: 'John', age: 15 },
        { id: 2, name: 'Bob', age: 20 },
        { id: 3, name: 'Michael', age: 15 },
    ];

    const filteredObject = object2.find(element => element.age != 15);
    console.log(filteredObject);
}
{
    // ①"https://jsonplaceholder.typicode.com/users"
    // ②①のURLを使ってダミーデータを取得し、コンソールログに表示させてください。
}

{
    // ①"https://jsonplaceholder.typicode.com/users"
}
{
    // ①仮引数languageを持つ関数redirectUrlを定義してください。
    // ②仮引数languageの言語によって、どのURLにリダイレクトするのかを決める関数を作成してください。
    // ③関数redirectUrlに実引数"English"を渡して実行し、返り値をログ出力してください。
}
