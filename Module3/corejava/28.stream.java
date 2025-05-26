import java.util.*;
import java.util.stream.Collectors;

public class StreamEvenNumbers {
    public static void main(String[] args) {
        // Create a list of integers
        List<Integer> numbers = Arrays.asList(10, 15, 22, 33, 40, 55, 66, 77);

        // Use Stream API to filter even numbers and collect them into a new list
        List<Integer> evenNumbers = numbers.stream()
                                           .filter(n -> n % 2 == 0)
                                           .collect(Collectors.toList());

        // Display the even numbers
        System.out.println("Even Numbers: " + evenNumbers);
    }
}
