Write Jest unit tests for a KzaVerde file.

**Arguments:** $ARGUMENTS
(Provide: file path to test, what behaviors to cover)

## What to do

1. Read the target file to understand its exports and logic
2. Determine test file location: `__tests__/<TargetName>.test.ts` (or co-located `.test.ts`)
3. Write tests that cover:
   - Happy path (normal expected usage)
   - Edge cases mentioned in the arguments
   - Error/null cases where the function returns null or throws

## For utility / lib functions (e.g., lib/db.ts)
```ts
import { functionName } from "../lib/db";

describe("functionName", () => {
  it("returns expected output for valid input", () => {
    const result = functionName(validInput);
    expect(result).toEqual(expectedOutput);
  });

  it("returns null for invalid input", () => {
    expect(functionName(invalidInput)).toBeNull();
  });
});
```

## For React components
```tsx
// Only if @testing-library/react is installed
import { render, screen } from "@testing-library/react";
import MyComponent from "../components/MyComponent";

describe("MyComponent", () => {
  it("renders with required props", () => {
    render(<MyComponent prop="value" />);
    expect(screen.getByText("value")).toBeInTheDocument();
  });
});
```
If @testing-library/react is NOT installed, test only exported pure functions/logic from the component.

## For API route handlers
```ts
// Requires: npm install --save-dev node-mocks-http
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

## Rules
- Group with `describe` + `it` (not `test`)
- No snapshot tests
- No `Date.now()` or `Math.random()` in assertions
- Use `ts-jest` — no Babel config needed
- Run `npm test` to verify after writing
