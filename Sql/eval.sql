------------EXO1------------ 
SELECT companyName AS 'société', contactName AS 'contact', contactTitle AS 'fonction', phone AS 'téléphone'
FROM northwind.customers
WHERE country = 'france' 
------------EXO1------------ 
----------------------------
------------EXO2------------ 
SELECT ProductID AS 'Produit', UnitPrice AS 'Prix'
FROM northwind.products
WHERE SupplierID = 1
------------EXO2------------ 
----------------------------
------------EXO3------------
SELECT CompanyName AS 'Fournisseur', COUNT(ProductName)
FROM northwind.suppliers JOIN northwind.products ON suppliers.SupplierID = products.SupplierID 
WHERE country = 'france'
GROUP BY CompanyName
ORDER BY COUNT(ProductName) DESC
------------EXO3------------
----------------------------
------------EXO4------------
   -- EXERCICE PAS FAIT --
------------EXO4------------
----------------------------
------------EXO5------------
SELECT CompanyName AS 'Client', SUM(UnitPrice * Quantity) AS 'CA'
FROM northwind.customers
JOIN orders ON customers.CustomerID = orders.CustomerID
JOIN order_details ON orders.OrderID = order_details.OrderID
GROUP BY CompanyName
HAVING SUM(UnitPrice * Quantity) >30000
ORDER BY SUM(UnitPrice * Quantity) DESC
------------EXO5------------
----------------------------
------------EXO6------------
SELECT ShipCountry AS 'Pays'
FROM northwind.orders
JOIN northwind.order_details ON northwind.order_details.OrderID = northwind.orders.OrderID 
JOIN northwind.products ON northwind.products.ProductID = northwind.order_details.ProductID
JOIN northwind.suppliers ON northwind.suppliers.SupplierID = northwind.products.SupplierID
WHERE northwind.suppliers.CompanyName = 'Exotic Liquids'
GROUP BY ShipCountry
------------EXO6------------
----------------------------
------------EXO7------------
SELECT SUM(UnitPrice*Quantity) AS 'Montant Ventes 97' 
FROM northwind.order_details
JOIN northwind.orders ON order_details.OrderID = orders.OrderID
WHERE OrderDate BETWEEN ('1997-01-01 00:00:00') AND ('1997-12-31 00:00:00')
------------EXO7------------
----------------------------
------------EXO8------------
SELECT MONTH(OrderDate) AS 'Mois 97', SUM(UnitPrice * Quantity) AS 'Montant Ventes'
FROM northwind.order_details
JOIN northwind.orders ON orders.OrderID = order_details.OrderID
WHERE YEAR(OrderDate) = '1997'
GROUP BY MONTH(OrderDate) 
ORDER BY MONTH(OrderDate)
------------EXO8------------
----------------------------
------------EXO9------------
SELECT MAX(OrderDate) AS 'Date de dernière Commande'
FROM northwind.orders
WHERE CustomerID = 'DUMON'
------------EXO9------------
----------------------------
------------EXO10-----------
SELECT ROUND(AVG(DATEDIFF (ShippedDate, OrderDate))) AS 'Délai moyen de livraison en jours'
FROM northwind.orders
------------EXO10-----------