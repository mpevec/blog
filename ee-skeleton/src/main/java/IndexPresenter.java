import javax.enterprise.context.RequestScoped;
import javax.inject.Named;

/**
 * Created with IntelliJ IDEA.
 * User: mpevec
 * Date: 6/15/13
 * Time: 8:56 PM
 * To change this template use File | Settings | File Templates.
 */
@Named
@RequestScoped
public class IndexPresenter {

    public String getText() {
        return "Skeleton";
    }
}
