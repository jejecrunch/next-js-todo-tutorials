//"use client";
import { useState } from "react";
import { Button, Input } from "../common";
import { deleteTodo, getTodos, patchTodo, updateTodo } from "@/services";
import { getTodoList } from "@/app/page";

type TodoItemParam = {
  todo: Todo;
  index: number;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
};

export default function TodoItem({
  todo,
  index,
  todos,
  setTodos,
}: TodoItemParam) {
  const [newTodo, setNewTodo] = useState(todo);
  const [prevTodo, setPrevTodo] = useState(todo.todo);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo({ ...newTodo, completed: e.target.checked });

    await patchTodo(newTodo);

    getTodoList({ setTodos });
  };

  const openUpdate = () => {
    setIsEdit(!isEdit);
  };

  const handleCancle = () => {
    setNewTodo({ ...newTodo, todo: prevTodo });
    setIsEdit(!isEdit);
  };

  const handleUpdate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsEdit(!isEdit);
    setPrevTodo(newTodo.todo);

    await updateTodo(newTodo);

    getTodoList({ setTodos });
  };

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await deleteTodo(newTodo.id);

    getTodoList({ setTodos });
  };

  return (
    <li
      className="list-group-item d-flex align-items-center justify-contents-between border-0 mb-2 rounded"
      style={{ backgroundColor: "#f4f6f7" }}
    >
      <input
        className="form-check-input me-2"
        type="checkbox"
        value=""
        aria-label="..."
        onChange={handleChange}
        checked={newTodo.completed}
        id={`todo${newTodo.id}`}
      />
      {isEdit ? (
        <>
          <Input
            label=""
            placeholder="할일을 입력해주세요 ..."
            param={{
              value: newTodo.todo,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                const {
                  target: { value },
                } = e;

                setNewTodo({ ...newTodo, todo: value });
              },
              type: "text",
              name: "newTodo",
            }}
            valid={newTodo !== null}
            errMsg=""
          />
          <Button type="todo cancel" onClick={handleCancle} disabled={false}>
            취소
          </Button>
        </>
      ) : (
        <div className="flex-fill">
          <label className="form-check-label" htmlFor={`check${newTodo.id}`}>
            {newTodo.completed ? <s>{newTodo.todo}</s> : newTodo.todo}{" "}
          </label>
        </div>
      )}
      {isEdit ? (
        <Button type="todo modify" onClick={handleUpdate} disabled={false}>
          확인
        </Button>
      ) : (
        <Button type="todo modify" onClick={openUpdate} disabled={false}>
          수정
        </Button>
      )}
      <Button type="todo delete" onClick={handleDelete} disabled={false}>
        삭제
      </Button>
    </li>
  );
}
