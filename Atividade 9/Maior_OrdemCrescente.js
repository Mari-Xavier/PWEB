function funcMaior(n1, n2, n3) {
    var maior = 0;

    if (n1 > n2 && n1 > n3) {
        maior = n1;
    }
    else if (n2 > n3) {
        maior = n2;
    } else {
        maior = n3;
    }
    return maior;
}

function maior() {
    var a = document.getElementById("num1");
    var b = document.getElementById("num2");
    var c = document.getElementById("num3");
    var v1 = Number(a.value);
    var v2 = Number(b.value);
    var v3 = Number(c.value);
    var resp = funcMaior(v1, v2, v3);

    res.innerHTML = `Maior número: ${resp}`;
}



function funcOrdemCresc(n1, n2, n3) {
    var maior = 0;
    var menor = 0;
    var meio = 0;

    if (n1 > n2 && n1 > n3) {
        maior = n1;
    }
    else if (n2 > n3) {
        maior = n2;
    } else {
        maior = n3;
    }

    if (n1 < n2 && n1 < n3) {
        menor = n1;
    }
    else if (n2 < n3) {
        menor = n2;
    } else {
        menor = n3;
    }

    if (n1 > menor && n1 < maior) {
        meio = n1;
    }
    else if (n2 > menor && n2 < maior) {
        meio = n2;
    } else {
        meio = n3;
    }
    var x = [menor, meio, maior];
    return x;
}

function cresc() {
    var a = document.getElementById("num1");
    var b = document.getElementById("num2");
    var c = document.getElementById("num3");
    var v1 = Number(a.value);
    var v2 = Number(b.value);
    var v3 = Number(c.value);
    var resp = funcOrdemCresc(v1, v2, v3);

    res.innerHTML = `Números em Ordem Crescente: ${resp}`;
}