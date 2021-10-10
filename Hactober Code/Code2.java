import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class Code2
{
    public static void main(String[] args)
    {
        //replaceAllExample peobj = new replaceAllExample();

        Pattern pattern = Pattern.compile("John");

        Matcher matcher = pattern.matcher("John does this, and John does that");

        String s2 = matcher.replaceAll("sam");

        System.out.println("replaceAll = " + s2);
    }
}
