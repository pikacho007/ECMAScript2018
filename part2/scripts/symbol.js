let hoge  = Symbol('hoge');
let hoge2 = Symbol('hoge');
console.log(typeof hoge);
console.log(hoge.toString());
console.log(hoge === hoge2);
// console.log(hoge + '');
// console.log(hoge - 0);
console.log(typeof !!hoge);
console.log(typeof new Object(hoge));