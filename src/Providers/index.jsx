import { AuthProvider } from "./Auth/index.tsx";
import { PetsProvider } from "./Pets/index.tsx";
import { ServicesProvider } from "./Services/index.tsx";

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
