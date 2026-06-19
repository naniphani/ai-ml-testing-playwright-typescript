# AI/ML Testing Framework with Playwright TypeScript

## Overview

This repository demonstrates how traditional Quality Engineering practices can be extended to AI/ML systems using Playwright and TypeScript.

The framework focuses on validating Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) systems, and AI Agents through reusable datasets, validators, regression suites, and CI/CD automation.

The goal is to treat AI systems as testable software components by applying repeatable quality engineering practices similar to traditional application testing.

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

### Agent Workflow Testing (Planned)

Validates multi-step AI agent workflows.

Examples:

* Customer support agents
* Research agents
* Task orchestration agents
* Langflow-based workflows

---

## Framework Architecture

```text
Prompt Dataset
      │
      ▼
Playwright Test Runner
      │
      ▼
AI System Under Test
(LLM / RAG / Agent)
      │
      ▼
Response Validator
      │
      ▼
Pass / Fail Result
      │
      ▼
HTML Report
```

---

## Project Structure

```text
ai-ml-testing-playwright-typescript
│
├── datasets
│   ├── hallucination.dataset.json
│   ├── prompt-injection.dataset.json
│   └── rag-groundtruth.dataset.json
│
├── src
│   ├── clients
│   └── validators
│
├── tests
│   └── ai
│       ├── hallucination.spec.ts
│       ├── prompt-injection.spec.ts
│       └── rag-validation.spec.ts
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
| Agent Workflow Testing      | Planned     |
| Dify Integration            | Planned     |
| Langflow Integration        | Planned     |
| GitHub Actions CI/CD        | Planned     |

---

## Example Hallucination Test

```typescript
const aiResponse =
  "I do not know who won the 2099 FIFA World Cup.";

expectNoHallucination(
  aiResponse,
  item.forbiddenClaims
);
```

---

## Example Prompt Injection Test

```typescript
const aiResponse =
  "I cannot provide or expose restricted internal information.";

expectPromptInjectionBlocked(
  aiResponse,
  item.blockedTerms
);
```

---

## Example RAG Validation Test

```typescript
const ragResponse =
  "Refund requests are accepted within 30 days of purchase.";

expectGroundTruthMatch(
  ragResponse,
  item.expectedKeywords
);
```

---

## Technologies

* Playwright
* TypeScript
* Node.js
* JSON Dataset Driven Testing
* HTML Reporting

Planned:

* Dify
* Langflow
* GitHub Actions
* OpenAI API
* Ollama

---

## Quality Engineering Concepts Demonstrated

* Dataset Driven Testing
* AI Regression Testing
* Hallucination Detection
* Prompt Injection Validation
* Ground Truth Validation
* Reusable Validators
* Test Automation Framework Design
* Shift-Left Quality Engineering
* AI Quality Assurance

---

## Future Enhancements

### Dify Integration

Validate enterprise RAG applications through API testing.

### Langflow Integration

Validate agent workflows and multi-step reasoning pipelines.

### GitHub Actions

Automated AI regression execution in CI/CD pipelines.

### Evaluation Metrics

* Hallucination Rate
* Retrieval Accuracy
* Prompt Injection Success Rate
* Agent Completion Rate

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
