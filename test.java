import java.util.Arrays;

public class test {
    public static int[] productArray(int[] arr) {
        int n = arr.length;

        int[] left = new int[n];
        int[] right = new int[n];
        int[] output = new int[n];

        // Calculate the product of all elements to the left of each index
        left[0] = 1;
        for (int i = 1; i < n; i++) {
            left[i] = left[i - 1] * arr[i - 1];
        }

        // Calculate the product of all elements to the right of each index
        right[n - 1] = 1;
        for (int i = n - 2; i >= 0; i--) {
            right[i] = right[i + 1] * arr[i + 1];
        }

        // Calculate the final product array
        for (int i = 0; i < n; i++) {
            output[i] = left[i] * right[i];
        }

        return output;
    }

    public static void main(String[] args) {
        int[] arr = {7, 8, 6, 4, 6, 7, 3, 10, 2, 3, 8, 1, 10, 4, 7, 1, 7, 3, 7, 2, 9, 8, 10, 3, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1};
        int[] result = productArray(arr);

        System.out.println("Input Array: " + Arrays.toString(arr));
        System.out.println("Product Array: " + Arrays.toString(result));
    }
}