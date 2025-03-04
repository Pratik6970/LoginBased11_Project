package com.app.service;

import com.app.dto.LoginDto;
import com.app.dto.LoginResponse;
import com.app.dto.UserDto;

public interface UserService {
	
	public String addUsers(UserDto userdto);
	
	public LoginResponse loginUsers(LoginDto logindto);

}
