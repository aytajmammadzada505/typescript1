const adlar: string[] = ["Scott", "Jean", "Logan", "Xavier"];
console.log(`say : ${adlar.length}`);
console.log(`ilk telebe: ${adlar[0]}`);
adlar.push("Erik");
adlar.push(123); //Argument of type 'number' is not assignable to parameter of type 'string'.

for (let ad of adlar) {
    console.log(ad);

}
