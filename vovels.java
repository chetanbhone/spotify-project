import java.util.Scanner;

public class vovles {
    
    public static void newStr(String str) {
        int count = 0;

        for (int j = 0; j < str.length(); j++) {
            char ch = Character.toLowerCase(str.charAt(j)); // Convert character to lowercase
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                count++;
            }
        }

        System.out.println("The total number of vowels in the string is " + count);
    }

    public static void main(String args[]) {
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter your string here...");
        String str = scn.nextLine();

        newStr(str);
    }
}
