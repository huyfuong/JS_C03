function Bai_1() {
    console.log("Bài_1: Đậu rớt");
    let diemtrungbinh = Number(prompt("Nhập điểm trung bình: "));
    if ( diemtrungbinh >= 5) {
        console.log("Đậu");
    } else {
        console.log("Rớt");
    }
}

// Bai_1();


function Bai_2() {
    console.log("Bài_2: Số quyền lực");
    let checksoquyenluc = Number(prompt("Nhập vào só có 3 chữ số: "));
    if (checksoquyenluc % 10 === 9 ) {
        console.log("YES");
    } else {
        console.log("NO");
    }
};

// Bai_2();


function Bai_3() {
    console.log("Bài_3: Tam giác cân");
    let AB = Number(prompt("Nhập vào cạnh thứ nhất của tam giác: "));
    let AC = Number(prompt("Nhập vào cạnh thứ hai của tam giác: "));
    let BC = Number(prompt("Nhập vào cạnh thứ ba của tam giác: "));
    if ((AB == AC) || (AB == BC) || (BC == AC)) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}

// Bai_3();

function Bai_4() {
    console.log("Bài_4: Tính tiền điện");
    let sokwdien = Number(prompt("Nhập vào số kw điện: "));
    if (sokwdien < 100) {
        console.log(sokwdien * 2000)
    } else if ((sokwdien >= 100) && (sokwdien < 200)) {
        console.log(sokwdien * 2500)
    }else if (sokwdien > 200) {
        console.log(sokwdien * 3500)
    };
}

// Bai_4();

function Bai_5() {
    console.log("Bài_5: Loại ký tự ");
    let kytu = String(prompt("Nhập vào 1 ký tự: "));
    if ((kytu >= 'A') && (kytu <= 'Z')){
        console.log("Hoa");
    } else if ((kytu >= 'a') && (kytu <= 'z')) {
        console.log("Thường");
    } else if ((kytu >= 0) && (kytu <= 9)) {
        console.log("Số");
    }else {
        console.log("DB");
    }

}

// Bai_5();

function Bai_6() {
    console.log("Bài_6: Phương trình bậc nhất");
    let a = Number(prompt("Nhập vào a: "));
    let b = Number(prompt("Nhập vào b: "));
    if (a === 0 && b === 0) {
        console.log("VSN");
    } else if (a == 0 && b != 0) {
        console.log("VN");
    }else {
        console.log(-b / a);
    }
}

// Bai_6();

function Bai_7() {
    console.log("Bài_7: Phương trình bậc hai");
    let a = Number(prompt("Nhập vào a: "));
    let b = Number(prompt("Nhập vào b: "));
    let c = Number(prompt("Nhập vào c: "));
    let delta = ( b * b) - (4 * a *c );
    if (a===0) {
        if (b===0) {
            if (c===0) {
                console.log("VSN");
            }
            else {
                console.log("VN");
            }
        }
        else {
            console.log(-b / (2*a));
        }
    }
    else{
        if(delta < 0) {
            console.log("VN");
        }
        else if(delta === 0) {
            console.log(-b / (2*a));
        }
        else {
            let x1 = ((-b + Math.sqrt(delta)) / (2*a));
            let x2 = ((-b - Math.sqrt(delta)) / (2*a));
            console.log(x1,x2);
        }
    }
}

// Bai_7();

function Bai_8() {
    console.log("Bài_8: Cách đọc số nguyên 2");
    let n = Number(prompt("Nhập vào số nguyên 2 chữ số: "));
    let a = Math.abs(parseInt(n/10));
    let b = Math.abs(n % 10);
    let str;
    switch (a) {
        case 1: 
            str = "muoi";
            break;
        case 2: 
            str = "hai muoi";
            break;
        case 3:
            str = "ba muoi";
            break;
        case 4:
            str = "bon muoi";
            break;
        case 5:
            str = "nam muoi";
            break;
        case 6:
            str = "sau muoi";
            break;
        case 7:
            str = "bay muoi";
            break;
        case 8:
            str = "tam muoi";
            break;
        case 9:
            str = "chin muoi";
            break;                
    }
    switch (b) {
        case 1: 
            str += " mot";
            break;
        case 2: 
            str += " hai";
            break;
        case 3:
            str += " ba";
            break;
        case 4:
            str += " bon";
            break;
        case 5:
            str += " nam";
            break;
        case 6:
            str += " sau";
            break;
        case 7:
            str += " bay";
            break;
        case 8:
            str += " tam";
            break;
        case 9:
            str += " chin";
            break;                
    }

    if (n > 10 && n < 100) {
        console.log(str);
    }
    else {
        console.log("Số nhập sai");
    }
}

// Bai_8();