import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { PetsProvider } from "./Pets";
import { ServicesProvider } from "./Services";

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
