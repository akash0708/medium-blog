import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signup = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <Auth type="signup" />
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </main>
  );
};

export default Signup;
