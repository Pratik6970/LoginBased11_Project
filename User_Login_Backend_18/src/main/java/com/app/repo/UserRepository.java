package com.app.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	
	public Optional<User>findOneByEmailAndPassword(String email, String password);
	
	public User findByEmail(String email);

}
