# Here is the updated and merged `React_Conventions.md` file, incorporating your new rules and formatting them into the existing structure.

## React Conventions Guide

## 1. Folder Structure

````markdown

Strictly adhere to this structure to maintain organization as the project scales.

```text
src/
├── components/
│   ├── common/      # Generic components (Buttons, Inputs)
│   ├── ui/          # Layout components
│   └── features/    # Domain-specific components
├── pages/           # Page-level components
├── hooks/           # Custom hooks
├── context/         # React context providers
├── services/        # API calls and async requests
├── utils/           # Pure helper functions
├── constants/       # Static values (endpoints, messages, colors)
├── assets/          # Images, fonts, icons
├── App.jsx
└── main.jsx
````

## 2\. Naming Conventions

- **Components:** **PascalCase** (e.g., `UserCard.jsx`, `OrderSummary.jsx`)
- **Hooks:** **camelCase** starting with `use` (e.g., `useCart.js`)
- **Context:** **PascalCase** (e.g., `AuthContext.jsx`)
- **Functions:** **camelCase** (e.g., `handleSubmit`, `fetchProducts`)
- **Booleans:** **camelCase** (e.g., `isOpen`, `hasError`, `isLoading`)
- **Files:** Should match the component name exactly.

## 3\. Architecture: Logic vs. UI

**Rule: Components must NOT contain business logic.**

Components are for UI only. They should not handle calculations, data transformations, or heavy conditions.

| Type | Meaning |
| :--- | :--- |
| `services/` | API calls, async requests |
| `utils/` | Pure helper functions |
| `hooks/` | Reusable state logic |
| `context/` | Global state management |
| `store/` | Redux (if applicable) |

**Example (Bad ❌):**

```jsx
function ProductCard() {
  const price = calculateDiscount(product.price); // ❌ Business logic in UI
  return <div>{price}</div>;
}
```

**Example (Good ✅):**

```jsx
import { calculateDiscount } from "../utils/calc";

function ProductCard({ product }) {
  return <div>{calculateDiscount(product.price)}</div>;
}
```

## 4\. Component Guidelines

- **Functional Components Only:** No class components.
- **Keep Components Short:** A component should not exceed **150–200 lines**. Large UI blocks must be split.
- **Single Responsibility:** If a component handles more than one responsibility, break it down.
  - *Example:* `EcommerceCard` shouldn't handle cart logic; `CartItem` shouldn't fetch details.
- **Prop Validation:** Props should be typed and validated using `prop-types` or TypeScript.

<!-- end list -->

```jsx
import PropTypes from "prop-types";

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
```

## 5\. State Management Rules

- **UI State vs Data State:** Keep them separate.
  - *UI State:* `isModalOpen`, `selectedTab`, `showDropdown`
  - *Data State:* `products`, `cartItems`, `user`
- **Local State:** Use `useState` for simple UI state specific to a component.
- **Complex Logic:** Use `useReducer` for complex state transitions.
- **Global State:** Avoid global state unless absolutely necessary (e.g., User Auth, Cart, Theme). Use Context for these.
- **Avoid Prop Drilling:** Use Context or Custom Hooks to pass data deeply.

## 6\. CSS & Styling

- **Framework:** Use **TailwindCSS**.
- **No Inline Styles:** Avoid `style={{ background: "red" }}`. Always use Tailwind classes or reusable component classes.
- **Reusable Patterns:** Extract repeated styling patterns into reusable components.

## 7\. API & Services

- **Separation of Concerns:** Never call APIs directly inside components. Use a service layer.
- **Service Structure:**

<!-- end list -->

```javascript
// services/api.js
export const api = {
  getProducts: () => axios.get("/products"),
  getCart: () => axios.get("/cart"),
};
```

- **Usage:** Call services inside custom hooks, then use the hook in the component.

## 8\. Custom Hooks

- **Extract Logic:** If logic is reusable or complex, move it to a custom hook.
- **Cleanup Side-Effects:** Hooks must clean up listeners or abort controllers.

<!-- end list -->

```javascript
// hooks/useCart.js
export function useCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    api.getCart({ signal: controller.signal }).then(setCart);
    
    return () => controller.abort(); // ✅ Cleanup
  }, []);

  return { cart };
}
```

## 9\. General Best Practices

- **Avoid Deep Nesting:** If you see 4+ levels of nested `div`s, refactor into smaller components.
- **Use Constants:** Store repeated values (colors, endpoints) in `constants/`.
- **Error Boundaries:** Use Error Boundaries to handle unexpected crashes in production.
- **No Hardcoded Data:** Every page must load from the backend; do not leave "dummy products" in UI components.

```
```

## A. Every component must have a clear responsibility

"EcommerceCard" shouldn’t handle cart logic.
"CartItem" shouldn’t fetch product details.

## B. Avoid global state unless absolutely necessary

Only user, cart, and theme should be global.

## C. Avoid prop drilling

Use context or custom hooks instead.

## D. Use error boundaries for unexpected crashes

A must for production.

## E. Every page must load from backend, no hardcoded data

No “dummy products” inside UI components.
