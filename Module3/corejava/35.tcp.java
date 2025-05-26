import java.io.*;
import java.net.*;

public class ChatClient {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 12345);
        System.out.println("Connected to server.");

        BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        PrintWriter output = new PrintWriter(socket.getOutputStream(), true);
        BufferedReader console = new BufferedReader(new InputStreamReader(System.in));

        String messageToServer, messageFromServer;
        while (true) {
            System.out.print("You: ");
            messageToServer = console.readLine();
            output.println(messageToServer);
            if (messageToServer.equalsIgnoreCase("exit")) {
                break;
            }

            messageFromServer = input.readLine();
            System.out.println("Server: " + messageFromServer);
        }

        socket.close();
    }
}
