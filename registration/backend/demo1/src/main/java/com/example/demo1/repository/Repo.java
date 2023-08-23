package com.example.demo1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo1.model.RModel;
import org.springframework.stereotype.Repository;

@Repository
public interface Repo extends JpaRepository<RModel,Long> {
    
}
