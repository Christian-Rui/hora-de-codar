var nome_do_carro = "Fusca"
var nomeDoUsuario = prompt("Escreva o seu nome: ");
var idadeDoUsuario = parseInt(prompt("Digite sua idade: "));

ApresentarNaTela(nome_do_carro);
ApresentarNaTela("Olá, " + nomeDoUsuario);
ApresentarNaTela("Olá, " + nomeDoUsuario + " sua idade é " + idadeDoUsuario);


var opcaoFiguraPlana = "";
var tiposDeFigura = ["Retângulo", "Quadrado", "Losango", "Trapézio", "Paralelogramo", "Triângulo", "Circulo"];

for (var i = 0; i < tiposDeFigura.length; i++) {
    opcaoFiguraPlana += `\n[ ${i + 1} ] Área do ${tiposDeFigura[i]}\n`;
}

do {
    var indiceFiguraPlana = parseInt(prompt("=========| Calculadora de Área de Figuras Planas |========= \n\nDigite qual opção deseja calcular:\n" + opcaoFiguraPlana + "\n[ 0 ] ---> Encerrar Calculo <---\n "));

    if (indiceFiguraPlana == 0){
        ApresentarNaTela("Calculadora de área de figuras planas foi encerrada!!")
    } else if (indiceFiguraPlana == 1) {
        CalcularRetangulo();
    } else if (indiceFiguraPlana == 2) {
        CalcularQuadradoEParalelogramo();
    } else if (indiceFiguraPlana == 3) {
        CalcularLosango();
    } else if (indiceFiguraPlana == 4) {
        CalcularTrapézio();
    } else if (indiceFiguraPlana == 5) {
        CalcularQuadradoEParalelogramo();
    } else if (indiceFiguraPlana == 6) {
        CalcularTriangulo();
    } else if (indiceFiguraPlana == 7) {
        CalcularCirculo();
    } else {
        ApresentarNaTela("Valor digitado incorreto! Tente novamente...");
    }
} while (indiceFiguraPlana != 0);


function CalcularRetangulo() {
    var resultadoArea = PedirValor("da base") * PedirValor("da altura");
    ApresentarAreaNaTela(resultadoArea);
}

function CalcularQuadradoEParalelogramo() {
    var resultadoArea = PedirValor("do lado") ** 2;
    ApresentarAreaNaTela(resultadoArea);
}

function CalcularLosango() {
    var resultadoArea = (PedirValor("da diagonal maior") * PedirValor("da diagonal menor")) / 2;
    ApresentarAreaNaTela(resultadoArea);
}

function CalcularTrapézio() {
    var resultadoArea = ((PedirValor("da base maior") + PedirValor("da base menor")) * PedirValor("da altura")) / 2;
    ApresentarAreaNaTela(resultadoArea);
}

function CalcularTriangulo() {
    var resultadoArea = (PedirValor("da base") * PedirValor("da altura")) / 2;
    ApresentarAreaNaTela(resultadoArea);
}

function CalcularCirculo() {
    var resultadoArea = Math.PI * PedirValor("do raio") ** 2;
    ApresentarAreaNaTela(resultadoArea.toFixed(2));
}

function PedirValor(tipoDeValor) {
    return parseFloat(prompt(`Digite o valor de medida ${tipoDeValor} do ${tiposDeFigura[indiceFiguraPlana - 1]}: `));
}

function ApresentarNaTela(conteudo) {
    alert(conteudo);
}

function ApresentarAreaNaTela(resultado) {
    alert(`A área do ${tiposDeFigura[indiceFiguraPlana - 1]} é: ${resultado}`);
}

