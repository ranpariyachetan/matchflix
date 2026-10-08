package com.dotawsnet.matchflix;

import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/movies")
public class MovieController {
    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/health")
    public String healthcheck() {
        return "I am healthy!!!";
    }

    @GetMapping("/search")
    public void search(@RequestParam String query) {
        movieService.search(query);
    }
}