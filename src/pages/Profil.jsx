import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Sejarah from "../components/Sejarah";
import ProfilSiswa from "../components/ProfilSiswa";
import TeacherProfile from "../components/TeacherProfile";

export default function Profil() {
  return (
    <>
      <Nav />
      <Sejarah />
      <TeacherProfile />
      <ProfilSiswa />
      <Footer />
    </>
  );
}
