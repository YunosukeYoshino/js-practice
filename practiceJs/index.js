// 配列
const testArr = ["yuche", "yoshino", "yunosuke"];

for (let index = 0; index < testArr.length; index++) {
    console.log(`${index + 1}番目は${testArr[index]}です`);
}

// map構文には２種類ある
const testArr2 = testArr.map((name) => {
    return name;
})
console.log(testArr2);

testArr.map((name) => console.log(`${name}です`));

// filter構文 ある条件を取り出す際に使用
const numArr = [1, 2, 3, 4, 5];

const newNumArr = numArr.filter((num) => {
    return num % 2 === 0;
})
console.log(newNumArr);

const NewNameArr2 = testArr.map((name) => {
    if (name === "yuche") {
        return name
    } else {
        return `${name}さん`
    }
})

console.log(NewNameArr2);

// #三項演算子
const num = 1300;
// console.log(num.toLocaleString());//数値を３桁区切りに表示してくれる。

const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
console.log(formattedNum);

const checkSum = (num1, num2) => {
    return num1 + num2 > 100 ? '100を超えています！' : '共用範囲です。';
}
console.log(checkSum(150, 40));




// #論理演算子の本当の意味


// 左側がfalseなら右を返す。
const flag1 = true;
const flag2 = false;
if (flag1 || flag2) {
    console.log("1か2はtrueになります。")
}



// 左側がfalseなら右を返す。
const num2 = 100;
const fee = num2 || "金額が未設定です。";
console.log(fee);


// 左側がtrueなら右を返す。
const num3=100;
const fee3 =num3 && "なにか設定された";
console.log(fee3);
