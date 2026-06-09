import { ReactNode } from "react";
import { QueryClientProvider as TanstackQueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/api/services/queryClient";

interface Props {
  children: ReactNode;
}

const QueryClientProvider = ({ children }: Props) => {
  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
    </TanstackQueryClientProvider>
  );
};

export default QueryClientProvider;
