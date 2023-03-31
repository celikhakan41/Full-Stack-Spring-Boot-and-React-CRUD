package com.celikhakan.fullstackbackend.repository;

import com.celikhakan.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {


}
