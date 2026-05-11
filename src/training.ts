function calcularMedia(notas: number[]): number {
    let soma = 0;
    try{
        if (notas.length === 0) {
            throw new Error("O array de notas está vazio. Não é possível calcular a média.");
        }
        for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
} catch (erro: unknown) {
    console.error((erro as Error).message);
    return 0;
}
    return soma / notas.length;
}

const notas: number[] = [];

console.log(calcularMedia(notas));