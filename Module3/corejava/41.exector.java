import java.util.concurrent.*;
import java.util.*;

public class CallableExample {

    public static void main(String[] args) {
        // Create a fixed thread pool with 4 threads
        ExecutorService executor = Executors.newFixedThreadPool(4);

        // Create a list to hold Future objects
        List<Future<String>> futures = new ArrayList<>();

        // Submit 5 Callable tasks
        for (int i = 1; i <= 5; i++) {
            int taskId = i;
            Callable<String> task = () -> {
                Thread.sleep(1000); // Simulate some computation
                return "Result from Task " + taskId;
            };
            futures.add(executor.submit(task));
        }

        // Retrieve and print results
        for (Future<String> future : futures) {
            try {
                System.out.println(future.get()); // Blocks until result is available
            } catch (InterruptedException | ExecutionException e) {
                System.err.println("Error retrieving task result: " + e.getMessage());
            }
        }

        // Shutdown the executor service
        executor.shutdown();
    }
}
