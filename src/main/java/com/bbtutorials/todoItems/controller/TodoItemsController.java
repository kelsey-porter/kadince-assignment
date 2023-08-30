package com.bbtutorials.todoItems.controller;

import java.util.List;

import com.bbtutorials.todoItems.entity.TodoItems;
import com.bbtutorials.todoItems.links.TodoItemsLinks;
import com.bbtutorials.todoItems.service.TodoItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/")
public class TodoItemsController {
	
	@Autowired
    TodoItemsService todoItemsService;
	
	@GetMapping(path = TodoItemsLinks.LIST_TODOITEMS)
    public ResponseEntity<?> listTodoItems() {
        log.info("todoItemsController:  list users");
        List<TodoItems> resource = todoItemsService.getTodoItems();
        return ResponseEntity.ok(resource);
    }
	
	@PostMapping(path = TodoItemsLinks.ADD_TODOITEM)
	public ResponseEntity<?> saveTodoItems(@RequestBody TodoItems user) {
        log.info("UsersController:  list users");
        TodoItems resource = todoItemsService.saveTodoItems(user);
        return ResponseEntity.ok(resource);
    }

    @PostMapping(path = TodoItemsLinks.UPDATE_TODOITEM)
    public ResponseEntity<?> updateTodoItems(@RequestBody TodoItems user) {
        log.info("UsersController:  update users");
        TodoItems resource = todoItemsService.saveTodoItems(user);
        return ResponseEntity.ok(resource);
    }
}
