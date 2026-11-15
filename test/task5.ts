function ortaBal(ballar: number[]): number {
    if (ballar.length === 0) return 0;
    let cem = 0;
    for (let bal of ballar) {
        cem += bal;
    }
    return cem / ballar.length;
}
function qiymetlendir(bal: number): string {
    if (bal >= 90) {
        return "Ela"
    }
    else if (bal >= 70) {
        return "Yaxsi"
    }
    else if (bal >= 50) {
        return "Kafi"
    }
    else {
        return "Qeyri-Kafi"
    }
}
function naticeniGoster(ad: string, ballar: number[]): void {  
        let ortalama = ortaBal(ballar);
        let herfiQiymet = qiymetlendir(ortalama);
        console.log(`${ad}, ${ortalama.toFixed(2)},${herfiQiymet}`);
    }
    
naticeniGoster("Tony", [90, 85, 100]);
naticeniGoster("Bruce", [60, 75, 65]);
naticeniGoster("Steve", [40, 50, 45]);