import { AuthProvider } from "./Auth";
import { PetsProvider } from "./Pets";
import { ServicesProvider } from "./Services";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <PetsProvider>
        <ServicesProvider>
          {children}
        </ServicesProvider>
      </PetsProvider>
    </AuthProvider>
  )
}

export default Providers