import React from 'react';

const Todos = ({todos,deletetodo}) => {
    return (
        <div className="collection">
            {
                todos.length
                    ?(todos.map(todo => {
                        return (
                            <div className="collection-item" key={todo.id}>
                                <p onClick={()=>{deletetodo(todo.id)}}>{todo.content}</p>
                            </div>
                        )
                    })):(<p>Nothing to do , Have a good day!</p>)
            }
        </div>
    );
}

export default Todos;