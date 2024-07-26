import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwriteConfig";

const AppwriteClient = createContext();

export const AppwriteClientProvider = ({ children }) => {
  const [clientInfo, setClientInfo] = useState(null);

  useEffect(() => {
    const fetchClientInfo = async () => {
      try {
        const userAccount = await account.get();
        setClientInfo(userAccount);
      } catch (error) {
        console.error("Error fetching client info:", error);
      }
    };

    fetchClientInfo();
  }, []);

  return (
    <AppwriteClient.Provider value={clientInfo}>
      {children}
    </AppwriteClient.Provider>
  );
};

// Custom Hook to get the client info
export const useClient = () => useContext(AppwriteClient);

export default AppwriteClient;
