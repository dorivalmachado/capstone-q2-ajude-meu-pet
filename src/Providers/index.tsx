import { ReactNode } from "react";
import { AuthProvider } from "./Auth/index.tsx";
import { PetsProvider } from "./Pets/index.tsx";
import { ServicesProvider } from "./Services/index.tsx";

interface ProvidersProps{
  children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <PetsProvider>
        <ServicesProvider>{children}</ServicesProvider>
      </PetsProvider>
    </AuthProvider>
  );
};

export default Providers;
