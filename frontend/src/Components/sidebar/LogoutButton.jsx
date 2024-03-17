// import { RiLogoutCircleRLine } from "react-icons/ri";
// import useLogout from "../../hooks/useLogout";
// function LogoutButton() {
//   const { loading, logout } = useLogout();
//   return (
//     <div className="mt-auto">
//       {!loading ? (
//         <RiLogoutCircleRLine
//           className="h-6 w-6 text-white cursor-pointer"
//           onClick={logout}
//         />
//       ) : (
//         <span className="loading loading-spinner"></span>
//       )}
//     </div>
//   );
// }

// export default LogoutButton;
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;
