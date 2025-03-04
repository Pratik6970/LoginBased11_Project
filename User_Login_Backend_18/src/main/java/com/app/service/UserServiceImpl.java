package com.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dto.LoginDto;
import com.app.dto.LoginResponse;
import com.app.dto.UserDto;
import com.app.pojos.User;
import com.app.repo.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	public UserServiceImpl() {
		System.out.println("UserServiceImpl called here"+getClass().getName());
	}

	@Override
	public String addUsers(UserDto userdto) {
		
		
		User user = new User(
				
				
				userdto.getId(),
				userdto.getName(),
				userdto.getEmail(),
				this.passwordEncoder.encode(userdto.getPassword()),
				userdto.getAbout()
				
				
				);
		this.userRepository.save(user);
		System.out.println("User = "+user);
		
		return user.getName();
	}

	@Override
	public LoginResponse loginUsers(LoginDto logindto) {
		
		
		String message="";
		
		System.out.println(message);
		
		User user1 = this.userRepository.findByEmail(logindto.getEmail());
		
		System.out.println(user1);
		
		if(user1!=null)
		{
			System.out.println("User is not null here");
			
			String password = logindto.getPassword();
			
			System.out.println(password);
			
			String encodePassword = user1.getPassword();
			
			System.out.println(encodePassword);
			
			boolean ispwdright = this.passwordEncoder.matches(password, encodePassword);
			
			System.out.println(ispwdright);
			
			if(ispwdright)
			{
				Optional<User>user2 = this.userRepository.findOneByEmailAndPassword(logindto.getEmail(), encodePassword);
				
				System.out.println(user2);
				
				if(user2.isPresent())
				{
					System.out.println("User is present here");
					
					return new LoginResponse("Login Success", true);
				}
				else
				{
					return new LoginResponse("Login failed", false);
				}
			}
			else
			{
				return new LoginResponse("Password not match", false);
			}
		}
		else
		{
			return new LoginResponse("email not exist", true);
		}
		
		
	}

	

}
	



