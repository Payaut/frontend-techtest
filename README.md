# Payaut Front-End Tech Test

The goal of this assignment is to develop a small application for managing accounts and perform payment transactions between them. 
Using your application we must be able tocreate new accounts and initiate transactions. 
A simple server has been already implemented using ‘express’. 
The functionality of the server is very limited and there is room for improvement. 
Your task is to develop the front-end from scratch using any front-end framework.
Please feel free to use your creativity. The server application is merely a guideline.

## Process

Please create your own repository based on a checkout of this project. 
Do not fork / branch this project when creating your solution as it will be visible to other applicants. 
Once your code is ready, please send us the link to your repository and we will review it

## Requirements

* Make use of an UI Framework
* Working application
* Modular CSS
* Responsive design
* Unit tests
* Keep it simple. 

Example curl calls

### create account 

curl -d '{"name":"test account"}' -H 'Content-Type: application/json' -X POST localhost:9001/account/create

### get account

curl localhost:9001/accounts/0

### get all account

curl localhost:9001/accounts

### create transaction 

curl -d '{"accountId":123,"from_account":0,"to_account":1,"amount":500,"description":3223}' -H 'Content-Type: application/json' -X POST localhost:9001/transaction/create

### get balance

curl localhost:9001/accounts/0/balance

## What we expect to see in your assignment: 

* Business rules correctness
* Your modelling approach
* Code readability
* Design patterns
* Quality of your unit tests

## Bonus

* Integration/E2E tests
* Server improvements