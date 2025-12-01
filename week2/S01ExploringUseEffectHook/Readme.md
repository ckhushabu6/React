

🌿 React useEffect Hook – Detailed Notes
🔹 What is a Side Effect?
A side effect is any operation that affects something outside the function’s scope or is not purely dependent on input-output logic.

👉 Example of side effects:

Fetching data from an API

Subscribing to events

Manipulating the DOM directly

Setting timers (setTimeout, setInterval)

Logging data to the console

These operations don’t depend on the function return value, and they can impact the outside world.

Hence, React provides the useEffect hook to handle all such tasks.

🔹 Why useEffect?
React components re-render multiple times. Without useEffect, it would be hard to manage code that must run:

Only once when the component mounts

Only when certain data changes

Or before the component unmounts

✅ So, useEffect helps control when and how often side effects run.

🔹 Syntax
import { useEffect } from "react";

useEffect(() => {
  // side effect code here
}, [dependencies]);
useEffect takes two arguments:
Callback Function → The code you want to run (the side effect).

Dependency Array → A list of values (state or props) to watch for changes.

🔹 Phases of useEffect

| Phase       | Description                                              |
| ----------- | -------------------------------------------------------- |
| **Mount**   | When the component is rendered for the first time        |
| **Update**  | When the component re-renders due to state/props changes |
| **Unmount** | When the component is removed from the DOM               |


🔹 Default Behavior
By default, useEffect runs:

After every render (both initial and updates)

But you can control when it runs using the dependency array.

🔹 Different Cases of Dependency Array
🧩 Case 1: No Dependency Array
useEffect(() => {
  console.log("I run on every render.");
});
➡️ Runs every time the component renders or re-renders.
⚠️ Usually not recommended, as it can cause performance issues.

🧩 Case 2: Empty Dependency Array []
useEffect(() => {
  console.log("I run only once on mount and cleanup on unmount.");
}, []);
➡️ Runs only once when the component mounts.
✅ Commonly used for:

Fetching API data once

Setting event listeners

Starting timers

🧩 Case 3: With Dependencies

useEffect(() => {
  console.log("I run when `count` changes.");
}, [count]);
➡️ Runs when any value inside the dependency array changes.
✅ Used for tracking or reacting to specific state changes.

You can include multiple dependencies:

useEffect(() => {
  console.log("Triggered when count OR name changes.");
}, [count, name]);


🔹 Cleanup Function
When your effect creates a subscription, timer, or event listener, you should clean it up when the component unmounts or before the next effect runs.

useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  // Cleanup
  return () => {
    clearInterval(timer);
    console.log("Cleanup done!");
  };
}, []);

➡️ The cleanup function runs:

Before the component unmounts

Or before the effect runs again on dependency update

🔹 Common Real-World Uses of useEffect

| Purpose                         | Example                                  |
| ------------------------------- | ---------------------------------------- |
| **Fetching Data**               | `fetch('https://api.example.com/data')`  |
| **Updating the Document Title** | `document.title = count`                 |
| **Listening to Events**         | `window.addEventListener('resize', ...)` |
| **Starting Timers**             | `setInterval`, `setTimeout`              |
| **Cleanup**                     | Removing listeners or clearing timers    |




🔹 Example 1 – Run Once (on Mount)
useEffect(() => {
  console.log("Component Mounted");
}, []);



🔹 Example 2 – Run on Every Render
useEffect(() => {
  console.log("Component re-rendered");
});



🔹 Example 3 – Run When State Changes
const [count, setCount] = useState(0);

useEffect(() => {
  console.log(`Count changed to ${count}`);
}, [count]);



🔹 Example 4 – Fetch API Data
import React, { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let result = await response.json();
      setData(result);
    }
    getData();
  }, []); // runs only once

  return (
    <div>
      <h1>Posts</h1>
      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

| Dependency Array | Runs When                   | Example Use               |
| ---------------- | --------------------------- | ------------------------- |
| None             | Every render                | Debugging/logging         |
| `[]` (Empty)     | Mount & Unmount only        | API calls, one-time setup |
| `[state]`        | When state changes          | Sync with specific data   |
| `[a, b, c]`      | When any dependency changes | Multiple state tracking   |



⚠️ Common Mistakes to Avoid
❌ Forgetting dependency array → effect runs infinitely.

❌ Adding unnecessary dependencies → frequent re-renders.

❌ Missing cleanup function → memory leaks.

✅ Always import:

import { useEffect } from "react";
🧩 Bonus Tip
If you ever see a “missing dependency warning” in React console,
→ It means React detected that you’re using a variable inside the effect but didn’t include it in the dependency array.
Add it unless you intentionally want to skip it.

🌟 In Short:
useEffect = Control WHEN and HOW your side effects run.


| Phase   | Runs When                | Example             |
| ------- | ------------------------ | ------------------- |
| Mount   | When component loads     | API call            |
| Update  | When dependencies change | State-based updates |
| Unmount | Before component removed | Cleanup             |

Would you like me to make a PDF version of these notes (clean and printable, with highlighted code and color headings)?
It’ll be perfect for your revision folder.











