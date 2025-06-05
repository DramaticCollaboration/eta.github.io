import Signup from "@/components/otherPages/Signup";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Signup 1 || 살아 있는 소프트웨어를 만듭니다.",
  description:
    "살아 있는 소프트웨어를 만듭니다.",
};
export default function SignupPage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <div id="wrapper" className="wrap">
          <Signup />
        </div>
      </div>
    </>
  );
}
