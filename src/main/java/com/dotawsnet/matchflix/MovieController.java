package com.dotawsnet.matchflix;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/movies")
public class MovieController {

    @GetMapping("/health")
    public String healthcheck() {
        return "I am healthy!!!";
    }
}