# myWebsite_api
This is a Demo api for my web site. this is created in node, mysql and sequelize, I add models like Admin, Category and Product. I created complete crud api with relations.

many products one category (one to many).
one category one product (one to one).

for the use of multer i uploed file in this api. for uploading image you must require multer and path in your controller, i add product_image field in product table and for the use of multer i upload product image in this api/

you must install packages for run this api is : 
1. express = npm i --save express
2. sequelize = npm i --save sequelize
3. mysql2 = npm i --save mysql2
4. nodemon (for automatically restart your server) = npm i --save nodemon
5. multer (for file upload) = npm i --save multer
