import type { Todo } from "@/types/Todo"
import { Item, ItemActions, ItemContent, ItemMedia, ItemTitle } from "./ui/item"
import TodoItemLabel from "./TodoItemLabel"
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

interface TodoItemProps {
    todo: Todo,
    onToggle: (id: string) => void
    onRemove: (id: string) => void,
}

export default function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
    return (
        <>
            <Item variant="outline" className="py-1">
                <ItemMedia>
                    <Checkbox onCheckedChange={() => onToggle(todo.id)} id={`checkbox-${todo.id}`} />
                </ItemMedia>
                <ItemContent>
                    <ItemTitle>
                        <TodoItemLabel todo={todo} />
                    </ItemTitle>
                </ItemContent>
                <ItemActions>
                    <Button onClick={() => onRemove(todo.id)} variant="link">
                        <Trash2 color="red" />
                    </Button>
                </ItemActions>
            </Item>
        </>
    );
}