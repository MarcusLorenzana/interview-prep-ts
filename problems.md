Yep. For Fieldwire, I’d practice questions that feel like normal software-engineering problems rather than obscure algorithm puzzles. Do these in TypeScript, live, while explaining your thinking.

Here’s a solid set, roughly ordered from easier to harder:

1. **First non-repeating character**  
   Given a string, return the first character that appears only once.
   ```ts
   firstUnique("swiss") // "w"
   ```

2. **Group anagrams**  
   Group words that are anagrams of each other.
   ```ts
   ["eat", "tea", "tan", "ate", "nat", "bat"]
   // [["eat","tea","ate"], ["tan","nat"], ["bat"]]
   ```

3. **Merge overlapping intervals**  
   ```ts
   [[1,3], [2,6], [8,10], [9,12]]
   // [[1,6], [8,12]]
   ```

4. **Top K frequent elements**  
   Given an array of numbers and `k`, return the `k` most frequent values.
   ```ts
   topK([1,1,1,2,2,3], 2) // [1,2]
   ```

5. **Valid brackets**  
   Check whether parentheses/brackets/braces are properly balanced.
   ```ts
   "{[()]}" // true
   "{[(])}" // false
   ```

6. **Implement a rate limiter**  
   Write:
   ```ts
   allow(userId: string, timestamp: number): boolean
   ```
   Allow at most 5 requests per user in any rolling 60-second window.

7. **Flatten nested arrays**
   ```ts
   flatten([1, [2, [3, 4]], 5])
   // [1,2,3,4,5]
   ```
   First recursively, then discuss an iterative implementation.

8. **LRU cache**  
   Implement:
   ```ts
   class LRUCache<K, V> {
     get(key: K): V | undefined
     put(key: K, value: V): void
   }
   ```
   Capacity is fixed. `get` and `put` should ideally be O(1).

9. **Deduplicate API events**  
   You receive events:
   ```ts
   type Event = {
     id: string
     timestamp: number
     payload: unknown
   }
   ```
   Return only the first event for each unique `id`, preserving arrival order.

10. **Task dependency ordering**  
    Given:
    ```ts
    [
      ["deploy", "build"],
      ["build", "test"],
      ["test", "lint"]
    ]
    ```
    Each pair means the first task depends on the second. Return a valid execution order.

    This is basically topological sort, but phrased like a platform problem.

11. **Detect circular dependencies**  
    Extend the previous problem so that:
    ```ts
    A -> B
    B -> C
    C -> A
    ```
    returns an error indicating a dependency cycle.

12. **Concurrent promise runner**  
    Implement:
    ```ts
    runWithLimit(tasks, concurrency)
    ```
    where `tasks` is an array of functions returning promises. Never execute more than `concurrency` tasks simultaneously.

    This one is especially good for a senior TypeScript/platform interview.

13. **Retry with exponential backoff**  
    Implement:
    ```ts
    retry(fn, maxAttempts)
    ```
    Retry a failing async function with exponential delays.

    Then expect follow-ups:
    - Which errors should be retried?
    - Add jitter.
    - How would cancellation work?
    - What if the operation isn't idempotent?

14. **Log aggregation**  
    Given:
    ```ts
    type Log = {
      service: string
      level: "info" | "warn" | "error"
      timestamp: number
    }
    ```
    Return the count of errors per service over the last 5 minutes.

15. **Sliding window request counter**  
    Implement:
    ```ts
    record(timestamp: number): void
    count(timestamp: number): number
    ```
    `count()` should return how many requests occurred in the previous 300 seconds.

16. **Merge sorted log streams**  
    You're given several arrays of logs, each individually sorted by timestamp. Merge them into one sorted stream efficiently.

17. **In-memory key/value store with TTL**
    ```ts
    set(key, value, ttlMs)
    get(key)
    delete(key)
    ```
    Expired entries should behave as though they don't exist.

    Follow-up: how would you avoid scanning the entire store to remove expired entries?

18. **Directory traversal**  
    Given a tree:
    ```ts
    type Node = {
      name: string
      children?: Node[]
    }
    ```
    Find every file whose name ends with `.yaml`.

    Follow-up: make it iterative so a deeply nested tree doesn't blow the call stack.

19. **Worker/job queue**
    Implement a small in-memory queue supporting:
    ```ts
    enqueue(job)
    dequeue()
    acknowledge(jobId)
    ```
    Then discuss what you'd change for retries and worker crashes.

20. **Configuration merge**
    Merge configuration in this precedence order:
    ```text
    defaults
      ↓
    environment config
      ↓
    user config
    ```
    Nested objects should merge recursively, but arrays should be replaced rather than merged.

    Example:
    ```ts
    defaults = {
      server: { port: 3000, timeout: 10 },
      regions: ["us-east-1"]
    }

    user = {
      server: { timeout: 30 },
      regions: ["us-west-2"]
    }
    ```

For **Fieldwire specifically**, I'd prioritize **6, 8, 10, 12, 13, 15, 17, and 20**. Those let them test algorithmic thinking while still feeling very relevant to platform engineering.

A realistic 60-minute live round might be something like:

> Implement a function that runs asynchronous jobs with a maximum concurrency of 3. Preserve the result order corresponding to the input order. If one job fails, don't stop the remaining jobs.

That starts simple but gives the interviewer a ton of room for follow-ups around promises, queues, error handling, concurrency, memory, cancellation, retries, and API design.

If you want to practice this properly, send me **“start the mock”** and I'll give you one question at a time exactly like an interviewer: no solution upfront, I'll answer clarification questions, watch your approach, and then give you follow-ups.