import Sidebar from "../../Components/sidebar/Sidebar";
import MessageContainer from "../../Components/messages/MessageContainer";
function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-screen w-screen rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}
export default Home;
