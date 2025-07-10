import { useState, useEffect } from "react";

const useFilteredTodos =(todos, searchTerms) => {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        if (!Array.isArray(todos)){
            setFilteredTodos([]);
            return;
        }
        const filtered = todos.filter(todo => todo.title.toLowerCase().includes(searchTerms.toLowerCase())
    );
    setFilteredTodos(filtered);
    }, [todos, searchTerms]);
    return filteredTodos
}

export default useFilteredTodos