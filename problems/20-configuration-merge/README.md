# Configuration merge

## Problem

Merge config objects in precedence order: defaults < environment < user, recursively merging nested objects but replacing arrays.

## Signature

```ts
mergeConfig(defaults: Record<string, any>, env: Record<string, any>, user: Record<string, any>): Record<string, any>
```

## Interview flow

1. Restate the problem in your own words.
2. Clarify edge cases and constraints.
3. Explain your intended approach before writing code.
4. Implement the function/class.
5. Walk through time complexity and trade-offs.

## Example

```ts
// Example usage
```

## Follow-up prompts

- What are the edge cases?
- What if the input is large or malformed?
- Can this be optimized or simplified?
- How would you adapt this to production usage?
