---
mode: agent
tools:
  - codebase
  - editFiles
  - createFiles
  - runCommand
description: Write Jest unit tests for a KzaVerde file (component, utility, or API route)
---

Write Jest unit tests for the specified KzaVerde file.

Ask me (or use context) for:
- Target file path
- Behaviors to test (happy path, edge cases, error states)

Determine the test file location: `__tests__/<TargetName>.test.ts` or co-located `.test.ts`.

## For lib/utility functions
```ts
import { functionName } from "../lib/db";

describe("functionName", () => {
  it("returns expected output for valid input", () => {
    expect(functionName(validInput)).toEqual(expectedOutput);
  });
  it("returns null for non-existent input", () => {
    expect(functionName(99999)).toBeNull();
  });
});
```

## For React components (if @testing-library/react is installed)
```tsx
import { render, screen } from "@testing-library/react";
import MyComponent from "../components/MyComponent";

describe("MyComponent", () => {
  it("renders with required props", () => {
    render(<MyComponent prop="value" />);
    expect(screen.getByText("value")).toBeInTheDocument();
  });
});
```

## For API route handlers
```ts
import { createMocks } from "node-mocks-http";
import handler from "../pages/api/resource/index";

describe("GET /api/resource", () => {
  it("returns 200 with success envelope", async () => {
    const { req, res } = createMocks({ method: "GET" });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    const body = JSON.parse(res._getData());
    expect(body.success).toBe(true);
  });
});
```

Rules:
- `describe` + `it` blocks, not bare `test()`
- No snapshot tests
- No `Date.now()` or `Math.random()` in assertions
- Run `npm test` to verify after writing
