# Code Reviewer

A repository demonstrating automated code review workflows using AWS CodeGuru and other tools.

## Features

- AWS CodeGuru Security Review integration
- ESLint for JavaScript code quality
- CodeQL analysis for security vulnerabilities
- Automated PR comments with review findings

## Workflows

This repository includes several GitHub Actions workflows:

1. **CodeGuru Security Review** - Uses AWS CodeGuru to identify security vulnerabilities
2. **ESLint Check** - Runs ESLint on JavaScript files
3. **Copilot Code Review** - Uses CodeQL for additional security analysis

## Sample Code

The repository includes sample code with intentional issues for testing the code review tools:

- `index.js` - Contains various security and logic issues
- `app.js` - Express.js application with security vulnerabilities

## Setup

1. Configure AWS credentials as GitHub secrets:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_REGION`

2. Create a pull request to trigger the workflows

## Results

Review findings will be available in:
- GitHub Security tab
- PR comments
- Workflow run summaries