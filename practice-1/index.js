'use strict';
// console.log('it\'s small world');
// console.log('hello\nworld');
// console.log('hello' + 'world');

// let price = 500;
// price += 500;

// price *= 2;

// console.log(typeof null);
// console.log('8' + 3);
// console.log(parseInt('5', 10) + 3);
// console.log(Boolean(0));
// console.log(Boolean('hello'));

<<<<<<< HEAD


// {
//     const scores = [80, 90, 40, 70];
//     scores.splice(1, 1, 140, 50);

//     for (let i = 0; i < scores.length; i++) {
//         console.log(`Score ${i}: ${scores[i]}`);
//     }
// }
// {
//     let i = 0;

//     function showTime() {
//         console.log(new Date());
//         i++;
//         if (i > 2) {//3回回ると処理が止まる。
//             clearInterval(intervalId);
//         }
//     }

//     const intervalId = setInterval(showTime, 1000);
// }


// {
//     class Post {
//         constructor(text) {
//             this.text = text;
//             this.likeCount = 0;
//         }

//         show() {
//             console.log(`${this.text} - ${this.likeCount}いいね`);
//         }
//     }

//     const posts = [
//         new Post('JavaScriptの勉強中…'),
//         new Post('プログラミング楽しい！'),
//     ];

//     posts[0].show();
//     posts[1].show();
// }



// {
//     class Post { // 親クラス
//         constructor(text) {
//             this.text = text;
//             this.likeCount = 0;
//         }

//         show() {
//             console.log(`${this.text} - ${this.likeCount} likes`);
//         }

//         like() {
//             this.likeCount++;
//             this.show();
//         }
//     }

//     class SponsoredPost extends Post { // 子クラス
//         constructor(text, sponsor) {
//             super(text);
//             this.sponsor = sponsor;
//         }

//         show() {
//             super.show();
//             console.log(`... sponsored by ${this.sponsor}`);
//         }
//     }

//     const posts = [
//         new Post('JavaScriptの勉強中…'),
//         new Post('プログラミング楽しい！'),
//         new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
//     ];

//     posts[2].show();
//     posts[2].like();
// }
=======
// const score = 50;

// if (score >= 80) {
//   console.log('Great!');
// } else if (score >= 60) {
//   console.log('Good.');
// } else {
//   console.log('OK...');
// }

// score >= 80 ? console.log('Great!') : console.log('OK...!');

// const score = 60;
// const name = 'taguchi';

// if (score >= 50) {
//     if (name === 'taguchi') {
//         console.log('Good job!');
//     }
// }

const score = 15
const name ='kuroda'

if(score >= 10 && name==='kuroda'){
    console.log('Good job!');
}
>>>>>>> 7279302d6d6f3579385003e9e5e175f9f1f179cf
