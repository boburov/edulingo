import RegisterButton from "./RegisterButton";
import Logotype from "./Logotype";

export default function Header() {
  return (
    <header className="p-3 shadow-lg flex justify-between items-center">
      <div className="h-full flex">
        <Logotype />
      </div>
      <RegisterButton />
    </header>
  );
}
