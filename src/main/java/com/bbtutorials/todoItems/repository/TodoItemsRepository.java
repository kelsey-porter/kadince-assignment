package com.bbtutorials.todoItems.repository;

import com.bbtutorials.todoItems.entity.TodoItems;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource()
public interface TodoItemsRepository extends JpaRepository<TodoItems, Integer>, JpaSpecificationExecutor<TodoItems>, QuerydslPredicateExecutor<TodoItems> {}
