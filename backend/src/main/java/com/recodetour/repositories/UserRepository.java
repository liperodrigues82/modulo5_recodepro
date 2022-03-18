package com.recodetour.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.recodetour.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
