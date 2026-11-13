public class Fibonacci {
    private static void fibonacci(int count) {
        int previous = 0;
        int current = 1;

        for (int index = 0; index < count; index++) {
            System.out.print(previous);
            if (index + 1 < count) {
                System.out.print(" ");
            }
            int next = previous + current;
            previous = current;
            current = next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        fibonacci(8);
    }
}
