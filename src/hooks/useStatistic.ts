import type { Todo } from "@/types/Todo";
import { useMemo } from "react";

interface UseStatisticProps {
    todos: Todo[]
}

export default function useStatistic({ todos }: UseStatisticProps) {
    const totalCount = useMemo(() => todos.length, [todos]);

    const completedCount = useMemo(() => todos.filter(
        (todo) => todo.isCompleted === true).length, [todos]);

    const pendingCount = useMemo(() => totalCount - completedCount, [totalCount, completedCount]);

    return { completedCount, pendingCount }
}