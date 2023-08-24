const INITIAL_TODOS = [
  {
    id: crypto.randomUUID(),
    title: "Jog around the park",
    isCompleted: false,
  },
  {
    id: crypto.randomUUID(),
    title: "10 minutes meditation",
    isCompleted: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Pick up groceries",
    isCompleted: false,
  },
];

export default INITIAL_TODOS;
