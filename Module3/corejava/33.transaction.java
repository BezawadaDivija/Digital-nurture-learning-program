public class Main {
    public static void main(String[] args) {
        AccountDAO dao = new AccountDAO();
        
        // Simulate transferring 200 from Alice (id=1) to Bob (id=2)
        dao.transferMoney(1, 2, 200.0);
    }
}
