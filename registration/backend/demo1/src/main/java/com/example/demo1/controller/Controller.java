package com.example.demo1.controller;

import com.example.demo1.repository.Repo;
import org.apache.catalina.startup.ClassLoaderFactory.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo1.model.RModel;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api")

public class Controller {
    @Autowired
    Repo repo;
    @GetMapping("/get")
    public List<RModel>get(){return  repo.findAll();}
    @PostMapping("/post")
    public RModel details(@RequestBody RModel model){
       return repo.save(model);
        
    }

}