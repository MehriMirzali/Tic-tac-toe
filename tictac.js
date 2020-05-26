let player1 = prompt('Player X');
let player2 = prompt('Player O');
let tbl = ""
let pointx = 0;
let pointo = 0;
let say = 1;
let playerx = "X";
let playero = "O";
let M = [];
onload = function () {
    Massiv();
    Cevdel();
}

function Massiv() {
    document.getElementById("playerx").innerHTML = player1;
    document.getElementById("playero").innerHTML = player2;
    for (let i = 0; i < 3; i++) {
        M[i] = [];
    }
}
function Cevdel() {
    let tbl = "";
    tbl = " ";

    for (let i = 0; i < 3; i++) {
        tbl += "<tr>";
        for (let j = 0; j < 3; j++) {
            M[i][j] = M[i][j] == undefined ? "" : M[i][j];
            tbl += `<td onclick="Click(${i},${j})" >${M[i][j]}</td>`;
        }
        tbl += "</tr>";
    }
    document.getElementsByTagName("table")[0].innerHTML = tbl;
}
function Click(i, j) {
    if (M[i][j] == "") {
        if (say % 2 == 0) {
            M[i][j] = playero
        }
        else {
            M[i][j] = playerx
        }
        say++;
        Yoxla();
        Cevdel();
    }
}

function Yoxla() {
    if (say % 2 == 0) {
        if (M[0][0] == M[1][1] && M[1][1] == M[2][2] && M[0][0] !== "") {
            setTimeout(function Yoxla() { alert(player1 + ",win. Congratulations ✨✨✨"); }, 500);
            pointx++;
            Massiv();
            Cevdel();
        }
        if (M[0][2] == M[1][1] && M[1][1] == M[2][0] && M[0][2] !== "") {
            setTimeout(function Yoxla() { alert(player1 + ",win. Congratulations ✨✨✨"); }, 400);
            pointx++;
            Massiv();
            Cevdel();
        }
        for (let i = 0; i < 3; i++) {
            if (M[i][0] == M[i][1] && M[i][0] == M[i][2] && M[i][0] !== "") {
                setTimeout(function Yoxla() { alert(player1 + ",win. Congratulations ✨✨✨"); }, 400);
                pointx++;
                Massiv();
                Cevdel();
            }
        }
        for (let i = 0; i < 3; i++) {
            if (M[0][i] == M[1][i] && M[0][i] == M[2][i] && M[0][i] !== "") {
                setTimeout(function Yoxla() { alert(player1 + ",win. Congratulations ✨✨✨"); }, 400);
                pointx++;
                Massiv();
                Cevdel();
            }
        }
        document.getElementById("win1").innerHTML = pointx;
    }
    else {
        if (M[0][0] == M[1][1] && M[1][1] == M[2][2] && M[0][0] !== "") {
            setTimeout(function Yoxla() { alert(player2 + ",win. Congratulations ✨✨✨"); }, 400);
            pointo++;
            Massiv();
            Cevdel();
        }
        if (M[0][2] == M[1][1] && M[1][1] == M[2][0] && M[0][2] !== "") {
            setTimeout(function Yoxla() { alert(player2 + ",win. Congratulations ✨✨✨"); }, 400);
            pointo++;
            Massiv();
            Cevdel();

        }
        for (let i = 0; i < 3; i++) {
            if (M[i][0] == M[i][1] && M[i][0] == M[i][2] && M[i][0] !== "") {
                setTimeout(function Yoxla() { alert(player2 + ",win. Congratulations ✨✨✨"); }, 400);
                pointo++;
                Massiv();
                Cevdel();
            }
        }
        for (let i = 0; i < 3; i++) {
            if (M[0][i] == M[1][i] && M[0][i] == M[2][i] && M[0][i] !== "") {
                setTimeout(function Yoxla() { alert(player2 + ",win.Congratulations ✨✨✨"); }, 400);
                pointo++;
                Massiv();
                Cevdel();
            }
        }
        document.getElementById("win2").innerHTML = pointo;
    }
}

