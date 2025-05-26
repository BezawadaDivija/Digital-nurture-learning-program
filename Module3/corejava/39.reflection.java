import java.lang.reflect.Method;
import java.lang.reflect.Parameter;

public class ReflectionDemo {
    public static void main(String[] args) {
        try {
            // Load the Person class dynamically
            Class<?> clazz = Class.forName("Person");

            // Create an instance of the class
            Object obj = clazz.getDeclaredConstructor().newInstance();

            // Get all declared methods
            Method[] methods = clazz.getDeclaredMethods();
            System.out.println("Declared methods in Person class:");
            for (Method method : methods) {
                System.out.print("Method: " + method.getName() + "(");
                Parameter[] params = method.getParameters();
                for (int i = 0; i < params.length; i++) {
                    System.out.print(params[i].getType().getSimpleName());
                    if (i < params.length - 1) System.out.print(", ");
                }
                System.out.println(")");
            }

            System.out.println("\nInvoking methods dynamically:");

            // Invoke sayHello()
            Method sayHello = clazz.getDeclaredMethod("sayHello");
            sayHello.invoke(obj);

            // Invoke greet(String)
            Method greet = clazz.getDeclaredMethod("greet", String.class);
            greet.invoke(obj, "Good morning");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
