# basics_Website
In terminal run (for the needed dependencies): npm install
The assignment called for ThunderClient to be able to test our endpoints, in thunderclient you can make the following requests.
http://localhost:3000/api/products
http://localhost:3000/api/cart
http://localhost:3000/api/products/1

We noticed that if you are going to use a mac device, the requests must be made differently as such to access the local host:
http://[::1]:3000/api/products
http://[::1]:3000/api/cart
http://[::1]:3000/api/products/1
