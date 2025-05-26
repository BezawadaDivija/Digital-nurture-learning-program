import java.util.*;

public class LambdaSortExample {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        
        // Add some names to the list
        names.add("Alice");
        names.add("Charlie");
        names.add("Bob");
        names.add("David");

        // Sort using lambda expression
        Collections.sort(names, (a, b) -> a.compareTo(b));

        // Display the sorted list
        System.out.println("Sorted Names:");
        for (String name : names) {
            System.out.println(name);
        }
    }
}
