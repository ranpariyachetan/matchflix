package com.dotawsnet.matchflix;

import java.util.Arrays;

import org.springframework.ai.embedding.EmbeddingModel;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import com.dotawsnet.matchflix.models.Movie;
import com.dotawsnet.matchflix.models.MovieData;

import jakarta.annotation.PostConstruct;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.json.JsonMapper;

import java.util.List;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;

@Service 
public class MovieService {
    private final EmbeddingModel embeddingModel;
    private final JsonMapper jsonMapper;

    private final List<Movie> movieEmbeddings = new ArrayList<>();

    public MovieService(EmbeddingModel embeddingModel, JsonMapper jsonMapper) {
        this.embeddingModel = embeddingModel;
        this.jsonMapper = jsonMapper;
    }

    @PostConstruct 
    public void initializeMovies() throws IOException {
        ClassPathResource resource = new ClassPathResource("movies.json");

        InputStream inputStream = resource.getInputStream();

        List<MovieData> movieDataList = jsonMapper.readValue(inputStream, new TypeReference<>() {});

        for (MovieData movieData : movieDataList) {
            float[] embedding = embeddingModel.embed(movieData.getDescription());
            Movie movie = new Movie(movieData.getTitle(), movieData.getDescription(), embedding);

            movieEmbeddings.add(movie);
        }

        inputStream.close();

        System.out.println(movieEmbeddings.size() + " movies loaded with embeddings.");

        for(Movie movie : movieEmbeddings) {
            System.out.println(Arrays.toString(movie.getEmbeddings()));
        }
    }

    public void search (String query) {
        float[] embeddings =  embeddingModel.embed(query);

        System.out.println(embeddings.length);
        System.out.println(Arrays.toString(embeddings));
    }
}
