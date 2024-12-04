```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct solution: add count to dependency array. The effect only runs once on mount now.
    // Alternatively, you could use a return statement to cleanup and prevent infinite loops
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [count]);
  //or if you only want it to run once
  // useEffect(() => {
  //   setCount(count + 1);
  // }, []);

  return <div>Count: {count}</div>;
}
```