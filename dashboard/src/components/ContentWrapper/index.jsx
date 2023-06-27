import { ContentRowTop } from "../ContentRowTop/index";
import { Footer } from "../Footer/index";
import { TopBar } from "../TopBar/index";
import { Movies } from "../Movie/index";

export const ContentWrapper = () => {
      return (
            <>
                  {/* <!-- Content Wrapper --> */}
                  <div id="content-wrapper" className="d-flex flex-column">
                        {/* <!-- Main Content --> */}
                        <div id="content">
                              <TopBar />
                              <ContentRowTop />
                        </div>
                        <div>
                              <Movies />
                        </div>
                        {/* <!-- End of MainContent --> */}
                        <Footer />
                  </div>
                  {/* <!-- End of Content Wrapper --> */}
            </>
      );
};
