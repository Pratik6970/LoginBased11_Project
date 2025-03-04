package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginDto;
import com.app.dto.LoginResponse;
import com.app.dto.UserDto;
import com.app.service.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/user")
public class UserController {
	
	
	@Autowired
	private UserService userService;
	
	public UserController() {
		System.out.println("UserController called here");
	}
	
	@PostMapping("/save")
	public ResponseEntity<?>registerUsers(@RequestBody UserDto userdto)
	{
		String user = this.userService.addUsers(userdto);
		
		System.out.println("User = "+user);
		
		return new ResponseEntity<>(user,HttpStatus.OK);
	}
	
	@PostMapping("/login")
	public ResponseEntity<LoginResponse>LoginUsers(@RequestBody LoginDto logindto)
	{
		LoginResponse loginResponse = this.userService.loginUsers(logindto);
		System.out.println("LoginResponse = "+loginResponse);
		
		return new ResponseEntity<>(loginResponse,HttpStatus.OK);
	}

}
