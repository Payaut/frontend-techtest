# Payaut Front-End Tech Test

The goal of the test is to develop a small application for managing accounts and transactions.
Using your application we must be able to create accounts and make transactions between accounts.
A simple server has been implemented with express. the functionality of the server is very limited. It could be improved and tested as well
Your mission is to develop the front-end from scratch using a front-end framework. 
You are free to use your own creativity. The server application is merely a guideline.

## Process

Please clone this project then create your own repository from it. 
Do not fork/branch this project when creating your solution as it will be visible to other applicants. 
Once your code is ready, please send us the link of your repository and we will review it.

## Requirements

* Self chosen UI framework
* Working application
* Modular CSS
* Responsive design
* Unit tests
* Keep it simple. We are not expecting a full blown working program. 

## What we expect to see in your assignment: 

* Business rules correctness
* Your modelling approach
* Code readability
* Design patterns
* Quality of your unit tests

## Bonus

* Integration/E2E tests
* Server improvements

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