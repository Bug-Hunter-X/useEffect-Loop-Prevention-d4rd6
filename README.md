# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications involving the `useEffect` hook: creating an infinite loop by improperly updating state within the effect.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides the corrected version.

**Problem:** The original code attempts to increment a state variable (`count`) inside the `useEffect` hook without specifying any dependencies.  This causes the effect to run continuously, resulting in an infinite loop and potentially crashing the application.

**Solution:** The corrected code in `bugSolution.js` addresses this by adding the `count` variable to the dependency array. This ensures the effect only runs when the value of `count` changes (which in this case is never, after the initial render). Alternatively, other approaches to avoid the infinite loop are shown in the solution file. 