import java.util.*;
import java.util.stream.Collectors;

// Define a record to represent a Person
record Person(String name, int age) {}

public class RecordExample {
    public static void main(String[] args) {
        // Create a list of Person records
        List<Person> people = List.of(
            new Person("Alice", 30),
            new Person("Bob", 17),
            new Person("Charlie", 25),
            new Person("Diana", 16)
        );

        // Print all persons
        System.out.println("All Persons:");
        people.forEach(System.out::println);

        // Filter and collect persons aged 18 and above
        List<Person> adults = people.stream()
                                    .filter(p -> p.age() >= 18)
                                    .collect(Collectors.toList());

        // Display filtered list
        System.out.println("\nAdults (18 and above):");
        adults.forEach(System.out::println);
    }
}
