import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Code4
{
    public static void main(String[] args)
    {
        Pattern myPattern = Pattern.compile("[abc]at");
        Matcher myMatcher = myPattern.matcher("dat");
        boolean myBoolean = myMatcher.matches();
        if(myBoolean)
            System.out.println("Expression Matched");
        else
            System.out.println("Expression not Matched");
    }
}