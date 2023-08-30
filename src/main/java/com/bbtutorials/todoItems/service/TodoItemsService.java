package com.bbtutorials.todoItems.service;

import java.util.List;

import com.bbtutorials.todoItems.entity.TodoItems;
import com.bbtutorials.todoItems.repository.TodoItemsRepository;
import org.springframework.stereotype.Component;

@Component
public class TodoItemsService {
	
	private TodoItemsRepository todoItemsRepository;

    public TodoItemsService(TodoItemsRepository todoItemsRepository) {
        this.todoItemsRepository = todoItemsRepository;
    }

    public List<TodoItems> getTodoItems() {
        return todoItemsRepository.findAll();
    }
    
    public TodoItems saveTodoItems(TodoItems users) {
    	return todoItemsRepository.save(users);
    }

    public TodoItems updateTodoItems(TodoItems todoItem) {
        return todoItemsRepository.save(todoItem);
    }

}
