import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class Code1
{
	public static void main(String[] args)
	{
		//AppendReplacementExample peobj = new AppendReplacementExample();
		
		Pattern pattern = Pattern.compile("John");
		
		Matcher matcher = pattern.matcher("John does this, and John does that");
		
		StringBuffer s1 = new StringBuffer();
		
		while(matcher.find())
		{
			matcher.appendReplacement(s1,"sam");
			System.out.println(s1.toString());
		}
	}
}