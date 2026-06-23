# AI/ML Testing Framework with Playwright TypeScript

## Overview

This repository demonstrates how traditional Quality Engineering practices can be extended to AI/ML systems using Playwright and TypeScript.

The framework validates Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) systems, and AI Agents through reusable datasets, validators, regression suites, and CI/CD automation.

The goal is to treat AI systems as testable software components by applying repeatable Quality Engineering practices similar to traditional application testing.

---

## Architecture

```text
                +----------------+
                | Prompt Dataset |
                +-------+--------+
                        |
                        v
              +------------------+
              | Playwright Tests |
              +--------+---------+
                       |
         +-------------+-------------+
         |             |             |
         v             v             v
  Hallucination   Prompt Inj.     RAG
         |                           |
         |                           v
         |                    Dify + Gemini
         |                           |
         +-------------+-------------+
                       |
                       v
                AI Validators
                       |
                       v
                GitHub Actions
```

---

## Key Features

### Hallucination Testing

Validates that AI systems do not generate unsupported or fabricated facts.

Examples:

* Non-existent events
* Future facts
* Invalid product releases
* Unsupported business claims

### Prompt Injection Testing

Validates model resilience against prompt injection attacks.

Examples:

* Ignore previous instructions
* Reveal system prompt
* Expose hidden instructions
* Return internal configuration
* Leak secrets or API keys

### RAG Ground Truth Validation

Validates responses generated from enterprise knowledge bases.

Examples:

* Policy validation
* FAQ validation
* Documentation verification
* Knowledge retrieval accuracy

### Live Dify RAG Validation

Validates real AI responses from:

* Dify Knowledge Base
* Gemini 2.5 Flash
* Ground Truth Datasets
* Playwright API Tests

### Agent Workflow Testing

Validates AI Agent behavior.

Examples:

* Tool selection
* Workflow execution
* Knowledge retrieval
* Response validation

---

## Project Structure

```text
ai-ml-testing-playwright-typescript
│
├── datasets
│   ├── hallucination.dataset.json
│   ├── prompt-injection.dataset.json
│   ├── rag-groundtruth.dataset.json
│   └── agent.dataset.json
│
├── test-data
│   └── company-policy.txt
│
├── src
│   ├── clients
│   │   └── difyClient.ts
│   │
│   └── validators
│       └── aiValidators.ts
│
├── tests
│   └── ai
│       ├── hallucination.spec.ts
│       ├── prompt-injection.spec.ts
│       ├── rag-validation.spec.ts
│       ├── rag-dify-api.spec.ts
│       └── agent-validation.spec.ts
│
├── .github
│   └── workflows
│       └── playwright.yml
│
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

---

## Current Test Coverage

| Area                        | Status      |
| --------------------------- | ----------- |
| Hallucination Testing       | Implemented |
| Prompt Injection Testing    | Implemented |
| RAG Ground Truth Validation | Implemented |
| Live Dify RAG Validation    | Implemented |
| Agent Workflow Testing      | Implemented |
| GitHub Actions CI/CD        | Implemented |

---

## Technologies

### Core

* Playwright
* TypeScript
* Node.js
* JSON Dataset Driven Testing

### AI Stack

* Dify
* Gemini 2.5 Flash
* Knowledge Base Validation
* Ground Truth Verification

### DevOps

* GitHub Actions
* Playwright HTML Reports
* CI/CD Automation

---

## Quality Engineering Concepts Demonstrated

* Dataset Driven Testing
* AI Regression Testing
* Hallucination Detection
* Prompt Injection Validation
* Ground Truth Validation
* RAG Testing
* Agent Workflow Testing
* Reusable Validators
* Test Automation Framework Design
* Shift-Left Quality Engineering
* AI Quality Assurance

---

## Example Use Cases

### Hallucination Testing

```typescript
expectNoHallucination(
  aiResponse,
  forbiddenClaims
);
```

### Prompt Injection Testing

```typescript
expectPromptInjectionBlocked(
  aiResponse,
  blockedTerms
);
```

### RAG Validation

```typescript
expectGroundTruthMatch(
  answer,
  expectedKeywords
);
```

### Agent Workflow Validation

```typescript
expectToolSelection(
  selectedTool,
  expectedTool
);
```

---

## CI/CD

GitHub Actions automatically executes:

* Hallucination Tests
* Prompt Injection Tests
* RAG Validation Tests
* Live Dify API Validation

on every push and pull request.

---

## Future Enhancements

### Langflow Integration

Validate live AI Agent workflows using Langflow.

### AI Evaluation Metrics

* Hallucination Rate
* Retrieval Accuracy
* Prompt Injection Success Rate
* Agent Completion Rate

### Multi-Model Validation

* OpenAI
* Claude
* Gemini
* Local LLMs (Ollama)

---

## Author

Ganeshan Narayanan

Senior QA Test Engineer / Automation Lead

Specializations:

* Playwright TypeScript
* Test Automation
* API Testing
* AI/ML Testing
* Quality Engineering

GitHub:
https://github.com/naniphani
