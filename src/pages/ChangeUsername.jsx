import InputUsername from "../components/sections/inputUsername";

export default function ChangeUsername() {
  const handleFormUsername = (e) => {
    e.preventDefault();
    localStorage.setItem("username", e.target.username.value);
    window.location.href = "/";
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <InputUsername handleFormUsername={handleFormUsername} />
    </div>
  );
}
