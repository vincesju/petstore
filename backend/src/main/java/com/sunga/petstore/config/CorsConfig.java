package com.sunga.petstore.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    private final String allowedOrigins;

    public CorsConfig(@Value("${cors.allowed-origins:${CORS_ALLOWED_ORIGINS:*}}") String allowedOrigins) {
        this.allowedOrigins = allowedOrigins;
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/sunga/api/v1/**")
                .allowedOrigins(parseOrigins())
                .allowedMethods("GET", "OPTIONS")
                .allowedHeaders("*");
    }

    private String[] parseOrigins() {
        return allowedOrigins.split("\\s*,\\s*");
    }
}
