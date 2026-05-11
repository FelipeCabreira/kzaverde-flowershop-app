# Skill: write-tests

Write Jest unit tests for a KzaVerde component, utility function, or API route handler.

## Inputs
- Target file path to test
- What behaviour to cover (happy path, edge cases, error states)

## Rules
1. Test file: `__tests__/<TargetName>.test.ts` or co-located `<target>.test.ts`
2. Use `ts-jest` — no Babel transforms needed
3. Import the target directly; no dynamic requires
4. Do NOT mock `lib/db` unless the test is for an API route handler that calls it at the boundary
5. Group with `describe('<ComponentOrFunction>')` + `it('...')` blocks
6. Use `expect(...).toBe/toEqual/toMatchObject` — no snapshot tests unless explicitly asked
7. Keep tests deterministic — no `Date.now()` or `Math.random()` in assertions

## Component test template
```ts
import { render, screen } from "@testing-library/react";
import MyComponent from "../components/MyComponent";

describe("MyComponent", () => {
  it("renders the expected content", () => {
    render(<MyComponent prop="value" />);
    expect(screen.getByText("value")).toBeInTheDocument();
  });
});
```
Note: if `@testing-library/react` is not installed, write pure unit tests for logic only.

## Utility / lib function test template
```ts
import { getProductById, getAllProducts } from "../lib/db";

describe("getProductById", () => {
  it("returns a product for a valid id", () => {
    const products = getAllProducts();
    if (products.length === 0) return; // skip if no data
    const first = products[0];
    expect(getProductById(first.id)).toEqual(first);
  });

  it("returns null for a non-existent id", () => {
    expect(getProductById(999999)).toBeNull();
  });
});
```

## API handler test template
```ts
import { createMocks } from "node-mocks-http";
import handler from "../pages/api/products/index";

describe("GET /api/products", () => {
  it("returns 200 with a products array", async () => {
    const { req, res } = createMocks({ method: "GET" });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    const data = JSON.parse(res._getData());
    expect(data.success).toBe(true);
    expect(Array.isArray(data.data)).toBe(true);
  });
});
```

## Jest config reference
Config is in `jest.config.js` using `ts-jest`. Tests run with `npm test`.
