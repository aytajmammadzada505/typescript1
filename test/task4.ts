function qiymetHesabla(qiymet: number, endirim: number = 0, say?: number): number {
    let yekun = (qiymet - endirim) * (say ?? 1);
    return yekun;
}
console.log(qiymetHesabla(200));
console.log(qiymetHesabla(100, 20));
console.log(qiymetHesabla(200, 30, 5));



