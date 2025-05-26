public class PatternMatchingSwitch {

    public static void main(String[] args) {
        printTypeInfo(42);
        printTypeInfo("Hello, world!");
        printTypeInfo(3.14);
        printTypeInfo(true);
        printTypeInfo(null);
    }

    public static void printTypeInfo(Object obj) {
        String result = switch (obj) {
            case Integer i -> "The object is an Integer: " + i;
            case String s  -> "The object is a String: \"" + s + "\"";
            case Double d  -> "The object is a Double: " + d;
            case Boolean b -> "The object is a Boolean: " + b;
            case null      -> "The object is null.";
            default        -> "Unknown type: " + obj;
        };

        System.out.println(result);
    }
}
