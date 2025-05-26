import java.time.Duration;
import java.time.Instant;

public class VirtualThreadsDemo {
    public static void main(String[] args) {
        int threadCount = 100_000;

        Instant start = Instant.now();

        for (int i = 0; i < threadCount; i++) {
            Thread.startVirtualThread(() -> {
                // Do lightweight work
                System.out.println("Hello from virtual thread: " + Thread.currentThread());
            });
        }

        Instant end = Instant.now();
        System.out.println("Launched " + threadCount + " virtual threads in " + Duration.between(start, end).toMillis() + " ms");
    }
}
