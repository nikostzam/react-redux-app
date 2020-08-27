const initState = [
  { id: 1, title: "project1", details: "kdgjsogjsogjpsdoagjkpo" },
  { id: 2, title: "project2", details: "kdgjsogjsogjpsdoagjkpo" },
  { id: 3, title: "project3", details: "kdgjsogjsogjpsdoagjkpo" },
  { id: 4, title: "project4", details: "kdgjsogjsogjpsdoagjkpo" },
];

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return (state = state + 1);

    case "DECREMENT":
      return (state = state - 1);
    default:
      return state;
  }
};

export default projectReducer;
