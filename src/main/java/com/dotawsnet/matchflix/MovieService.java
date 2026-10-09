package com.dotawsnet.matchflix;

import java.util.Collections;
import java.util.List;
import java.util.ArrayList;

import org.springframework.ai.embedding.EmbeddingModel;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import com.dotawsnet.matchflix.models.*;

import jakarta.annotation.PostConstruct;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.json.JsonMapper;

import java.io.IOException;
import java.io.InputStream;


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
    }

    public List<MovieMatch> search (String query) {
        float[] userQueryEmbedding =  embeddingModel.embed(query);

        List<MovieMatch> searchResults = new ArrayList<>();

        for (Movie movie : this.movieEmbeddings) {
            double similarity = cosineSimilarity(userQueryEmbedding, movie.getEmbeddings());

            MovieMatch movieMatch = new  MovieMatch(movie.getTitle(), movie.getDescription(), similarity);

            searchResults.add(movieMatch);
        }

        sortBySimilarity(searchResults);

        return topKMatches(searchResults,  3);
        
    }

    public List<MovieMatch> similarMovies(String title) {
        Movie selectedMovie = findMovie(title);

        List<MovieMatch> searchResults = new  ArrayList<>();

        for (Movie movie : this.movieEmbeddings) {
            if (movie.getTitle().equalsIgnoreCase(title)) {
                continue;
            }

            double similarity = cosineSimilarity(selectedMovie.getEmbeddings(), movie.getEmbeddings());

            MovieMatch match = new MovieMatch(movie.getTitle(), movie.getDescription(), similarity);

            searchResults.add(match);
        }

        sortBySimilarity(searchResults);

        return topKMatches(searchResults, 4);
    }

    private Movie findMovie(String title) {
        for (Movie movie: this.movieEmbeddings){
            if (movie.getTitle().equalsIgnoreCase(title)) {
                return movie;
            }
        }

        throw new IllegalArgumentException(
            "Movie not found with title: " + title
        );
    }

    private double cosineSimilarity(float[] a, float[] b) {
        double dotProduct = 0.0;
        double normA = 0.0;
        double normB = 0.0;

        for (int i = 0; i < a.length; i++) {
            dotProduct += (a[i] * b[i]);
            normA += (a[i] * a[i]);
            normB += (b[i] * b[i]);
        }

        if (normA == 0 || normB == 0) {
            return 0.0;
        }

        return dotProduct / Math.sqrt(normA) * Math.sqrt(normB);
    }

    private void sortBySimilarity(List<MovieMatch> matches) {
        Collections.sort(matches, (first, second) -> Double.compare(second.getMatch(),first.getMatch()));
    }

    private List<MovieMatch> topKMatches(List<MovieMatch> matches, int k) {
        List<MovieMatch> topMatches = new ArrayList<>();

        int numOfMatches = Math.min(k, matches.size());

        for(int i = 0;i < numOfMatches; i++ ) {
            topMatches.add(matches.get(i));
        }

        return topMatches;
    }

}
