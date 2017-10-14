import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
public class RegIO {
 public static void main(String[] args) throws IOException {
        BufferedReader in = new BufferedReader(new FileReader("in.txt"));
        BufferedWriter out = new BufferedWriter(new FileWriter("out.txt"));
        String regex = "\"text\":\"[\\w\\W]*?\"";
        String currLine = in.readLine();
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(currLine);
        while (matcher.find()) {
            out.write(matcher.group(0) + "\n");
        }

        in.close();
        out.close();
 }
}