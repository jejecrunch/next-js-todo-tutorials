// src/app/idols/page.tsx
"use client";

import { getTodos } from "@/services";

import "@/styles/globals.css";

import Link from "next/link";
import { TodoList, TodoForm } from "@/components/Todo";
import { Button, Loading } from "@/components/common";
import { useEffect, useState } from "react";

let base: Todo[] = [];

type getTodoListParam = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export async function getTodoList({ setTodos }: getTodoListParam) {
  const res = await getTodos();

  if (res) {
    setTodos([...res.todos]);
    base = [...res.todos];
  }
}

const TotosPage = () => {
  const [todos, setTodos] = useState(new Array<Todo>());

  useEffect(() => {
    getTodoList({ setTodos: setTodos });
  }, []);

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                {/* <div className="d-grid gap-2 mt-3 mb-3 justify-content-end">
                  <Button
                    type="logout"
                    onClick={() => {
                      confirm("로그아웃하시겠습니까?");
                    }}
                    disabled={false}
                  >
                    Logout
                  </Button>
                </div> */}
                <h1 className="mb-10">TODO ! TODO ! TODO !</h1>
                <TodoForm todos={todos} setTodos={setTodos} />
                {todos.length > 0 ? (
                  <TodoList todos={todos} setTodos={setTodos} />
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotosPage;
