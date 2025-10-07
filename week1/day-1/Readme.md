# React Basics

## 1️⃣ What is React?

* React is a **JavaScript library** for building **user interfaces (UI)**.
* It is **declarative**: you describe *what* the UI should look like, React updates the DOM automatically.
* React is **component-based**: everything is broken into **reusable pieces (components)**.

## 2️⃣ JSX

* JSX = **JavaScript + HTML**
* Allows writing HTML inside JS.
* Browsers don’t understand JSX, so **Babel** converts it to plain JS.

**Example:**

```jsx
const element = <h1>Hello React!</h1>;
```

## 3️⃣ Babel

* **Purpose:** Convert JSX → Vanilla JS.
* **CDN:**

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

* Use `type="text/babel"` in script when using Babel in the browser.

## 4️⃣ React & ReactDOM CDN

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

* **React** → Library to write components and UI.
* **ReactDOM** → Connects React with **actual DOM**.

## 5️⃣ Root & Render

```html
<div id="root"></div>

<script type="text/babel">
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<h1>Hello React!</h1>);
</script>
```

* **`createRoot`** → Initializes React at a specific DOM element.
* **`render`** → Displays JSX or components. Only **one parent element** allowed.

**Example with multiple elements:**

```jsx
root.render(
  <div>
    <h1>Hello</h1>
    <p>React is awesome!</p>
  </div>
);
```

or using fragment:

```jsx
root.render(
  <>
    <h1>Hello</h1>
    <p>React is awesome!</p>
  </>
);
```

## 6️⃣ Components

* **Function Component (modern):**

```jsx
const App = () => {
  return <h1>Hello App</h1>;
};
```

* **Class Component (older):**

```jsx
class App extends React.Component {
  render() {
    return <h1>Hello App</h1>;
  }
}
```

## 7️⃣ Attributes

* JSX uses **camelCase** for attributes: `className`, `htmlFor`, `onClick`.

```jsx
<button className="btn" onClick={() => alert("Clicked!")}>Click Me</button>
```

## 8️⃣ Comments in JSX

```jsx
{/* This is a comment */}
```

* Regular JS `//` or `/* */` doesn’t work inside JSX.

## 9️⃣ Rendering Lists

* Use **map()** to render multiple items dynamically.

```jsx
const items = ["React", "JS", "CSS"];
root.render(
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```

* **`key`** gives each element a unique identity.

## ✅ Extra Tips for Beginners

1. Always wrap JSX in one parent element.
2. Use `className` instead of `class`.
3. Babel is required in browser setups, but **create-react-app / Vite** handles it automatically.
4. React is all about components → think in small, reusable pieces.
