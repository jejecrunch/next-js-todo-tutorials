export const getTodos = async () => {
  try {
    const res = await fetch("https://dummyjson.com/todos?limit=0&skip=140", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addTodo = async (newTodo: Omit<Todo, "id">) => {
  try {
    console.log(newTodo);
    const res = await fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newTodo }),
      cache: "no-store",
    });
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

export const patchTodo = async (newTodo: Todo) => {
  try {
    return await fetch("https://dummyjson.com/todos/" + newTodo.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: newTodo.completed }),
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateTodo = async (newTodo: Todo) => {
  try {
    return await fetch("https://dummyjson.com/todos/" + newTodo.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newTodo }),
      cache: "no-store",
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = async (id: number) => {
  try {
    return await fetch("https://dummyjson.com/todos/" + id, {
      method: "DELETE",
      cache: "no-store",
    });
  } catch (error) {
    console.error(error);
  }
};
