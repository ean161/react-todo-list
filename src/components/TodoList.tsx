import type { Todo } from "@/types/Todo";
import TodoItem from "./TodoItem";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { X } from "lucide-react";

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
                <CardContent className="space-y-4">
                    {todos.length == 0 &&
                        <Alert>
                            <X />
                            <AlertTitle>No todo found</AlertTitle>
                        </Alert>
                    }
                    {todos.map((todo) => {
                        return <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove} />
                    })}
                </CardContent>
            </Card>
        </>
    );
}