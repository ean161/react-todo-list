import type { Todo } from "@/types/Todo";
import TodoItem from "./TodoItem";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface TodoListProps {
    todos: Todo[],
    onToggle: (id: string) => void,
    onRemove: (id: string) => void
};

export default function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Todo list</CardTitle>
                    <CardDescription>List of todos</CardDescription>
                </CardHeader>
                <CardContent>
                    {todos.map((todo) => {
                        return <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove} />
                    })}
                </CardContent>
            </Card>
        </>
    );
}