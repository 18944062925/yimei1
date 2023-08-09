package com.example.yimeimaven;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.yimeimaven.dao")
public class YimeiMavenApplication {

    public static void main(String[] args) {
        SpringApplication.run(YimeiMavenApplication.class, args);
    }

}
