
import Header from './sections/header';
import Frontpage from "./sections/frontpage";
import Features from "./sections/features";
import Ingredients from "./sections/ingredients";
import Blog from "./sections/blog";
import Footer from "./sections/footer";
export default function Home() {
  return (
   <div>
    <Header/>
    <Frontpage/>
    <Features/>
    <Ingredients/>
    <Blog/>
    <Footer/>
   </div>
  );
}
