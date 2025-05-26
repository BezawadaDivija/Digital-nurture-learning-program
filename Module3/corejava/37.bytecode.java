public class Sample {
    public int square(int x) {
        return x * x;
    }

    public static void main(String[] args) {
        Sample s = new Sample();
        System.out.println("Square of 5: " + s.square(5));
    }
}
