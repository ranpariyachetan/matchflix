package com.dotawsnet.matchflix;

import java.util.Arrays;

import org.springframework.ai.embedding.EmbeddingModel;
import org.springframework.stereotype.Service;

@Service 
public class MovieService {
    private  final EmbeddingModel embeddingModel;

    public MovieService(EmbeddingModel embeddingModel) {
        this.embeddingModel = embeddingModel;
    }

    public void search (String query) {
        float[] embeddings =  embeddingModel.embed(query);

        System.out.println(embeddings.length);
        System.out.println(Arrays.toString(embeddings));
    }
}
