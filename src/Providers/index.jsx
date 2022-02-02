import { AuthProvider } from "./Auth/index.tsx";
import { PetsProvider } from "./Pets/index.tsx";
import { ServicesProvider } from "./Services";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <PetsProvider>
        <ServicesProvider>{children}</ServicesProvider>
      </PetsProvider>
    </AuthProvider>
  );
};

export default Providers;
