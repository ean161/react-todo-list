import type { Todo } from "@/types/Todo"
import { Item, ItemContent, ItemTitle } from "./ui/item"
import TodoItemLabel from "./TodoItemLabel"

interface TodoItemProps {
    todo: Todo,
    onToggle: (id: string) => void
    onRemove: (id: string) => void,
}

export default function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
    return (
        <>
            <Item>
                <ItemContent>
                    <ItemTitle>
                        <TodoItemLabel todo={todo} />
                    </ItemTitle>
                </ItemContent>
            </Item>
        </>
    );
}