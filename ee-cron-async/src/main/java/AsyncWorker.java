import java.util.concurrent.Future;

/**
 * Created with IntelliJ IDEA.
 * User: mpevec
 * Date: 6/16/13
 * Time: 1:24 PM
 * To change this template use File | Settings | File Templates.
 */
public interface AsyncWorker {
    public Future<String> work(String unit);
}
