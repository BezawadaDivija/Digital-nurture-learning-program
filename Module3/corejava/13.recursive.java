import java.util.Scanner;

public class RecursiveFibonacci {

    // Recursive method to calculate the nth Fibonacci number
    public static int fibonacci(int n) {
        if (n <= 1) {
            return n; // Base cases: fib(0) = 0, fib(1) = 1
        }
        return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a positive integer n to get the nth Fibonacci number: ");
        int n = scanner.nextInt();

        if (n < 0) {
            System.out.println("Please enter a positive integer.");
        } else {
            int result = fibonacci(n);
            System.out.println("Fibonacci number at position " + n + " is: " + result);
        }
        
        scanner.close();
    }
}
