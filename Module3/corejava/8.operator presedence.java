public class OperatorPrecedence {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2;           // Multiplication has higher precedence than addition
        int result2 = (10 + 5) * 2;         // Parentheses force addition before multiplication
        int result3 = 100 / 5 + 2 * 3;      // Division and multiplication before addition
        int result4 = 100 / (5 + 5) * 2;    // Parentheses affect division result

        // Display the results
        System.out.println("Result 1 (10 + 5 * 2) = " + result1);  // 10 + (5*2) = 20
        System.out.println("Result 2 ((10 + 5) * 2) = " + result2); // (10+5) * 2 = 30
        System.out.println("Result 3 (100 / 5 + 2 * 3) = " + result3); // (100/5) + (2*3) = 20 + 6 = 26
        System.out.println("Result 4 (100 / (5 + 5) * 2) = " + result4); // 100 / (5+5) * 2 = 10 * 2 = 20
    }
}
