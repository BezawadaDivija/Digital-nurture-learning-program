import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JdbcSQLiteExample {
    public static void main(String[] args) {
        String url = "jdbc:sqlite:students.db"; // Path to SQLite DB file

        try {
            // Load JDBC driver (not strictly necessary for SQLite in modern Java)
            Class.forName("org.sqlite.JDBC");

            // Connect to database
            Connection conn = DriverManager.getConnection(url);
            System.out.println("Connection established.");

            // Create statement and execute query
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");

            // Process and display results
            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                System.out.println("ID: " + id + ", Name: " + name + ", Age: " + age);
            }

            // Close resources
            rs.close();
            stmt.close();
            conn.close();

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
