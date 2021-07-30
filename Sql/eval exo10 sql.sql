SELECT ROUND(AVG(DATEDIFF (ShippedDate, OrderDate))) AS 'Délai moyen de livraison en jours'
FROM northwind.orders