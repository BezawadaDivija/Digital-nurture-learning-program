import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class GitHubHttpClient {
    public static void main(String[] args) {
        try {
            // Create HttpClient
            HttpClient client = HttpClient.newHttpClient();

            // Create HttpRequest
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://api.github.com/users/octocat"))
                    .header("User-Agent", "Java HttpClient")
                    .build();

            // Send request and get response
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            // Print response status and body
            System.out.println("Status Code: " + response.statusCode());
            System.out.println("Response Body: ");
            System.out.println(response.body());

            // Optional: Parse JSON using Jackson
            ObjectMapper mapper = new ObjectMapper();
            JsonNode jsonNode = mapper.readTree(response.body());

            System.out.println("\nParsed Info:");
            System.out.println("Login: " + jsonNode.get("login").asText());
            System.out.println("Name: " + jsonNode.get("name").asText());
            System.out.println("Public Repos: " + jsonNode.get("public_repos").asInt());

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
