// Base class
class Animal {
    // Method to be overridden
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

// Subclass
class Dog extends Animal {
    // Overriding the makeSound() method
    @Override
    public void makeSound() {
        System.out.println("Bark");
    }
}

// Main class to test inheritance
public class InheritanceExample {
    public static void main(String[] args) {
        // Create an object of Animal
        Animal genericAnimal = new Animal();
        genericAnimal.makeSound(); // Output: Animal makes a sound

        // Create an object of Dog
        Dog dog = new Dog();
        dog.makeSound(); // Output: Bark
    }
}
