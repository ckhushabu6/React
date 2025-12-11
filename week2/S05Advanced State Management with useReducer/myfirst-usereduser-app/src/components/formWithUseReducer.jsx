import { useReducer } from "react";

export default function FormWithUseReducer() {
  const initialValue = {
    name: "",
    email: "",
    age: "",
  };

  function formReduser(state, action) {
    switch (action.type) {
      case "UPDATE_FIELD":
        return { ...state, [action.field]: action.value};
        default:
            return state;
    }
  }

  function handelInputChange(e) {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value: value });
  }

  function handelSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted", state);
  }

  const [state, dispatch] = useReducer(formReduser, initialValue);

  return (
    <form onSubmit={handelSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={state.name}
          onChange={handelInputChange}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={state.email}
          onChange={handelInputChange}
        ></input>
      </div>
      <div>
        <label>Age</label>
        <input
          type="text"
          name="age"
          placeholder="Enter Your Address"
          value={state.age}
          onChange={handelInputChange}
        ></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
