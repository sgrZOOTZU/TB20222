SELECT CompanyName AS 'Client', SUM(UnitPrice * Quantity) AS 'CA'
FROM northwind.customers
JOIN orders ON customers.CustomerID = orders.CustomerID
JOIN order_details ON orders.OrderID = order_details.OrderID
GROUP BY CompanyName
HAVING SUM(UnitPrice * Quantity) >30000
ORDER BY SUM(UnitPrice * Quantity) DESC