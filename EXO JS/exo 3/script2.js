//Age//
var Age = prompt ('Entrez votre année de naissance')
a = 2021 - Age
if(a >= 18)
{
    alert("Vous avez " + a + " ans, vous êtes alors majeur.")
}
else if (a < 18)
{
    alert("Vous avez " + a + " ans, vous êtes alors mineur.")
}