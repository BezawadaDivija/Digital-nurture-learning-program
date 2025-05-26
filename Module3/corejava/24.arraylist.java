import java.util.ArrayList;
import java.util.Scanner;

public class StudentList {
    public static void main(String[] args) {
        ArrayList<String> students = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        String name;

        System.out.println("Enter student names (type 'exit' to stop):");

        while (true) {
            System.out.print("Enter name: ");
            name = scanner.nextLine();
            if (name.equalsIgnoreCase("exit")) {
                break;
            }
            students.add(name);
        }

        System.out.println("\nList of students:");
        for (String student : students) {
            System.out.println(student);
        }

        scanner.close();
    }
}
