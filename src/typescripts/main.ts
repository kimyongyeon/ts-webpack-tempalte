declare var process: any;
declare var require: any;
// 아래 에러는 무시해도 됩니다...
if (process.env.NODE_ENV !== 'production') {   
    require("../index.html");
}

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import * as $ from 'jquery';
require('../styles/style.css');
import '../styles/style.scss'; 

export class Main {
    constructor() {
        console.log("프로그래밍 시작하세요!");
        console.log("프로그래밍 시작하세요!");
        console.log("프로그래밍 시작하세요!");
        console.log("프로그래밍 시작하세요!");
        console.log("프로그래밍 시작하세요!");
    }
}

var m = new Main();