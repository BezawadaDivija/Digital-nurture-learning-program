// Define the interface
interface Playable {
    void play();  // Interface method (no body)
}

// Implementing class: Guitar
class Guitar implements Playable {
    @Override
    public void play() {
        System.out.println("Strumming the guitar");
    }
}

// Implementing class: Piano
class Piano implements Playable {
    @Override
    public void play() {
        System.out.println("Playing the piano");
    }
}

// Main class to test the implementation
public class InterfaceExample {
    public static void main(String[] args) {
        // Create objects of Guitar and Piano
        Playable guitar = new Guitar();
        Playable piano = new Piano();

        // Call the play method
        guitar.play();  // Output: Strumming the guitar
        piano.play();   // Output: Playing the piano
    }
}
