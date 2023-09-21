type User = {
  email: string | null;
  password: string | null;
};

type TodoParam = {
  todo: string;
  completed: boolean;
};

type Todo = {
  id: number;
  userId: number;
} & TodoParam;

interface ITodo {
  id: number;
  completed?: boolean;
  todo?: string;
}

type Selected = {
  prev: string;
  cur: string;
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};

type Data = {};
