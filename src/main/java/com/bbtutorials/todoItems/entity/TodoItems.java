package com.bbtutorials.todoItems.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;


import lombok.Data;

@Entity
@Data
public class TodoItems {
	
	@Id
	@Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    @NotNull(message="{NotNull.TodoItems.task}")
    private String task;
    
    @Column
    @NotNull(message="{NotNull.TodoItems.completed}")
    private Boolean completed;

}
