import javax.ejb.EJB;
import javax.ejb.Schedule;
import javax.ejb.Stateless;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Future;

/**
 * Created with IntelliJ IDEA.
 * User: mpevec
 * Date: 6/16/13
 * Time: 1:22 PM
 * To change this template use File | Settings | File Templates.
 */
@Stateless
public class CronJobFacade {

    /**
     * Number of concurrently workers
     */
    private int numOfExecutions = 3;

    @EJB
    private AsyncWorker aworker;


    @Schedule(second="*/15", minute="*",hour="*", persistent=false)
    public void dispatch() {

        // prepared list of work
        List<String> list = new ArrayList<String>();
        list.add("A");
        list.add("B");
        list.add("C");
        list.add("D");

        // list of workers currently in execution
        List<Future<String>> workers = new ArrayList<Future<String>>();

        for (String unitFromList : list) {
            // to many workers, wait for workers to complete its execution
            if(workers.size() > (numOfExecutions-1)) {

                // checking "isDone" status in worker
                break_lvl_1:
                while(true) {
                    for (Future<String> specificWorker : workers) {
                        if(specificWorker.isDone()) {
                            workers.remove(specificWorker);
                            break break_lvl_1;
                        }
                    }
                }
            }

            // dispatch
            Future<String> worker = aworker.work(unitFromList);
            workers.add(worker);

        }//for
    }

}
