const TodosList = (props) => {
  const todos = [
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ];
 
    const { todosProps } = props;
    return (
      <ul>
        {todosProps.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
    );
  };
  export default TodosList;
  