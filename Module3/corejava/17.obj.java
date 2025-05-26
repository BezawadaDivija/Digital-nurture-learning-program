// Define the Car class
public class Car {
    // Attributes
    String make;
    String model;
    int year;

    // Constructor
    public Car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method to display car details
    public void displayDetails() {
        System.out.println("Car Make: " + make);
        System.out.println("Car Model: " + model);
        System.out.println("Year: " + year);
        System.out.println("----------------------");
    }

    // Main method to test the Car class
    public static void main(String[] args) {
        // Create car objects
        Car car1 = new Car("Toyota", "Camry", 2020);
        Car car2 = new Car("Honda", "Civic", 2022);

        // Display car details
        car1.displayDetails();
        car2.displayDetails();
    }
}
