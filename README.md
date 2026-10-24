# Taskly

A simple desktop to-do app built with Electron. Original code; inspired by the general feature set of list-based to-do apps. Not affiliated with Microsoft.

## Features

- Multiple lists: create, rename (click the title), delete
- Tasks: add, complete, delete, optional due date (overdue shown in red)
- Completed tasks collapse into their own section
- Light/dark theme follows your system
- Data saved locally as JSON in Electron's user-data folder

## Run

```bash
npm install
npm start
```

If Electron fails with "failed to install correctly", your npm is blocking install scripts; run `node node_modules/electron/install.js`.

## Test

```bash
npm test
```
