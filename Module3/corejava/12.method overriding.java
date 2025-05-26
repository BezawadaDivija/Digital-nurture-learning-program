public class MethodOverloading {

    // Method 1: Adds two integers
    public int add(int a, int b) {
        return a + b;
    }

    // Method 2: Adds two doubles
    public double add(double a, double b) {
        return a + b;
    }

    // Method 3: Adds three integers
    public int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        MethodOverloading calculator = new MethodOverloading();

        // Call and display results of each overloaded method
        int sum1 = calculator.add(10, 20);
        double sum2 = calculator.add(5.5, 6.7);
        int sum3 = calculator.add(1, 2, 3);

        System.out.println("Sum of two integers: " + sum1);
        System.out.println("Sum of two doubles: " + sum2);
        System.out.println("Sum of three integers: " + sum3);
    }
}
