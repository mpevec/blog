import javax.ejb.AsyncResult;
import javax.ejb.Asynchronous;
import javax.ejb.Local;
import javax.ejb.Stateless;
import java.util.concurrent.Future;

/**
 * Created with IntelliJ IDEA.
 * User: mpevec
 * Date: 6/16/13
 * Time: 1:27 PM
 * To change this template use File | Settings | File Templates.
 */
@Stateless
@Local(AsyncWorker.class)
public class DSLAsyncWorker implements AsyncWorker {

    @Override
    @Asynchronous
    public Future<String> work(String unit) {

        System.out.println("... working on unit: " + unit);

        String status = "END";
        return new AsyncResult<String>(status);
    }
}
