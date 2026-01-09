import type { Todo } from "@/types/Todo"

interface TodoItemProps {
    todo: Todo,
    onToggle: (id: string) => void
    onRemove: (id: string) => void,
}

export default function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
    return (
        <>
            <div>
                <p>Todo item {todo.id}</p>
            </div>
        </>
    )
}