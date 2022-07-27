//TODO: Contador de numeros primos
let count = 0;

console.log("Los numeros primos del 1 al 100 son los siguientes: ")
for(let i=1;i<=100;i++)
{
    for(let k=1; k<=i;k++)
    {
        if(i%k==0)count++;
    }
    if(count==2)console.log(i);
    count=0;
}