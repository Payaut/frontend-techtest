'use strict';

const app = require('express')();
const transactionsContainer = require('./transactions.json');
const accountContainer = require('./accounts.json');

/**
 * GET /transactions
 * 
 * Return the list of transactions with status code 200.
 */
app.get('/transactions', (req, res) => {
  return res.status(200).json(transactionsContainer);
});

/**
 * Get /transactions/:id
 * 
 * id: Number
 * 
 * Return the transaction for the given id.
 * 
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get('/transaction/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = transactionsContainer.Container.find((item) => item.id === id);

    if (task !== null) {
      return res.status(200).json({
        task,
      });
    } else {
      return res.status(404).json({
        message: 'Not found.',
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request.',
    });
  }
});

/**
 * POST /transactions/create/
 *
 * Add a new transactions to the array transactionsContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post('/transaction/create/', (req, res) => {
  const task = {
    id: transactionsContainer.transactions.length,
    accountId: req.params.accountId,
    from: req.params.from,
    to: req.params.to,
    amount: req.params.amount,
    description: req.params.description,
  };

  transactionsContainer.tasks.push(task);

  return res.status(201).json({
    message: 'Resource created',
  });
});




/**
 * GET /accounts
 *
 * Return the list of accounts with status code 200.
 */
app.get('/accounts', (req, res) => {
  return res.status(200).json(accountContainer);
});


/**
 * Get /accounts/:id
 *
 * id: Number
 *
 * Return the acconts for the given id.
 *
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get('/accounts/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = transactionsContainer.Container.find((item) => item.id === id);

    if (task !== null) {
      return res.status(200).json({
        task,
      });
    } else {
      return res.status(404).json({
        message: 'Not found.',
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request.',
    });
  }
});

/**
 * POST /account/create/
 *
 * title: string
 * description: string
 *
 * Creates a new account
 * Return status code 201.
 */
app.post('/account/create/', (req, res) => {
  const task = {
    id: transactionsContainer.tasks.length,
    name: req.params.name,
    accountIBAN: req.params.accountIBAN
  };

  transactionsContainer.tasks.push(task);

  return res.status(201).json({
    message: 'Resource created',
  });
});

/**
 * DELETE /account/delete/:id
 *
 * id: Number
 *
 * Delete the account linked to the given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/account/delete/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const task = accountContainer.tasks.find(item => item.id === id);

    if (task !== null) {
      const taskIndex = transactionsContainer.tasks;
      transactionsContainer.tasks.splice(taskIndex, 1);
      return res.status(200).json({
        message: 'Updated successfully',
      });
    } else {
      return es.status(404).json({
        message: 'Not found',
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request',
    });
  }
});

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
