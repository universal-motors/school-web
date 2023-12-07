import "@/assets/css/tailwind.css";
import { Box } from "@mui/material";
import Header from "../Header";
import CoverImg from "../coverImg";

type Prop = {
  children: JSX.Element;
};
export default function Layout({ children }: Prop) {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
}
