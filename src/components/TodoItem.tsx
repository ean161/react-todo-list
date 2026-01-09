import type { Todo } from "@/types/Todo"
import { Item, ItemContent, ItemMedia, ItemTitle } from "./ui/item"
import TodoItemLabel from "./TodoItemLabel"
import { Checkbox } from "./ui/checkbox";

interface TodoItemProps {
    todo: Todo,
    onToggle: (id: string) => void
    onRemove: (id: string) => void,
}

export default function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
    return (
        <>
            <Item>
                <ItemMedia>
                    <Checkbox onCheckedChange={() => onToggle(todo.id)} id={`checkbox-${todo.id}`} />
                </ItemMedia>
                <ItemContent>
                    <ItemTitle>
                        <TodoItemLabel todo={todo} />
                    </ItemTitle>
                </ItemContent>
            </Item>
        </>
    );
}