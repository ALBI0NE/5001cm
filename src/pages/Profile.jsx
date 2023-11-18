import Profile from "../components/Profile";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";

export default function AfterLogin() {
  return (
    <>
      <NavbarAfterLogin />
      <Profile />
      <Footer />
    </>
  );
}
