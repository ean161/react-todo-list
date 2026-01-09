import type { Todo } from "@/types/Todo";
import { Label } from "./ui/label";

interface TodoItemLabelProps {
    todo: Todo
}

export default function TodoItemLabel({ todo }: TodoItemLabelProps) {
    return (
        <>
            <Label htmlFor={`checkbox-${todo.id}`}>
                {todo.isCompleted
                    ? <del className="text-gray-300">{todo.title}</del>
                    : todo.title}
            </Label>
        </>
    );
}