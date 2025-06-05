import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Newsletter from "@/components/blog/Newsletter";
import BreadCumb from "@/components/blog/BreadCumb";
import Blogs7 from "@/components/blog/Blogs7";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blog 2 Col || 살아 있는 소프트웨어를 만듭니다.",
  description:
    "살아 있는 소프트웨어를 만듭니다.",
};
export default function Blog2ColsPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <BreadCumb category={"Blog 2 Cols"} />
          <Blogs7 />
          <Newsletter />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
