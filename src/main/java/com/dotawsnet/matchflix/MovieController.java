package com.dotawsnet.matchflix;

import org.springframework.web.bind.annotation.*;
import com.dotawsnet.matchflix.models.MovieMatch;

import java.util.List;


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
    public List<MovieMatch> search(@RequestParam String query) {
        return movieService.search(query);
    }

    @GetMapping("/{title}/similar")
    public List<MovieMatch> getMethodName(@PathVariable String title) {
        return movieService.similarMovies(title);
    }
    
}