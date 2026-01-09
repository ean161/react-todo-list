import { CopyCheck, CopyX } from "lucide-react";
import { Alert, AlertTitle } from "./ui/alert";
import type { Todo } from "@/types/Todo";
import useStatistic from "@/hooks/useStatistic";

interface TodoStatisticProps {
    todos: Todo[]
}

export default function TodoStatistic({ todos }: TodoStatisticProps) {
    const { completedCount, pendingCount } = useStatistic({ todos });

    return (
        <>
            <div className="flex space-x-2">
                <Alert>
                    <CopyCheck color="green" />
                    <AlertTitle>{completedCount}</AlertTitle>
                </Alert>
                <Alert>
                    <CopyX color="red" />
                    <AlertTitle>{pendingCount}</AlertTitle>
                </Alert>
            </div>
        </>
    );
}