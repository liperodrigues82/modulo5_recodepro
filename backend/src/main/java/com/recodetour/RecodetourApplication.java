package com.recodetour;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.recodetour.entities.User;
import com.recodetour.repositories.UserRepository;

@SpringBootApplication
public class RecodetourApplication implements CommandLineRunner {
	
	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(RecodetourApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		User u1 = new User(null, "Felipe", "Rodrigues", "felipe@email.com", "988887777");
		User u2 = new User(null, "Clarinha", "Maria", "clarinha@email.com", "988885555");
		User u3 = new User(null, "Bebel", "Maria", "bebel@email.com", "988884444");
		User u4 = new User(null, "Nala", "Maria", "nala@email.com", "988883333");
		User u5 = new User(null, "Maria", "Maria", "maria@email.com", "988880000");
		User u6 = new User(null, "Mariana", "Maria", "m.maria@email.com", "988881111");
		userRepository.saveAll(Arrays.asList(u1, u2, u3, u4, u5, u6));
		
	}

}
