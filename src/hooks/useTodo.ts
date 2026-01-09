import type { Todo } from "@/types/Todo";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useTodo() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const add = (title: string) => {
        if (title.length === 0) {
            return;
        }

        setTodos((prev) => [...prev, {
            id: uuidv4(),
            title: title,
            isCompleted: false
        }]);
    };

    const remove = (id: string) => {
        setTodos(todos.filter((todo) => todo.id != id));
    }

    const toggle = (id: string) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? {
                ...todo,
                isCompleted: !todo.isCompleted
            } : todo
        ));
    }

    return { todos, add, remove, toggle };
}