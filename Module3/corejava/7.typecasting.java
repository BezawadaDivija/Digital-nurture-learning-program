public class TypeCastingExample {
    public static void main(String[] args) {
        // Declare a double variable
        double doubleValue = 9.78;
        // Cast double to int (explicit casting)
        int intValueFromDouble = (int) doubleValue;

        // Declare an int variable
        int intValue = 20;
        // Cast int to double (implicit casting)
        double doubleValueFromInt = intValue;

        // Display results
        System.out.println("Original double value: " + doubleValue);
        System.out.println("Double to int (after casting): " + intValueFromDouble);

        System.out.println("Original int value: " + intValue);
        System.out.println("Int to double (after casting): " + doubleValueFromInt);
    }
}
