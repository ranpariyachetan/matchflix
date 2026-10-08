package com.dotawsnet.matchflix.models;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Getter
@Setter 
@NoArgsConstructor 
@AllArgsConstructor 
public class Movie {
    private String title;
    private String description;
    private float[] embeddings;
}
