import { Box } from "@mui/system";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  children: React.ReactNode;
};

export const StyledLink = ({ to, children }: Props) => (
  <Box
    sx={{
      li: {
        listStyleType: "none",
        boxSizing: "border-box",
      },
      a: {
        cursor: "pointer",
        color: "text.primary",
      },
      "a:hover": {
        color: "#909590",
        transition: "all 400ms ease",
      },
    }}
  >
    <li>
      <Link style={{ textDecoration: "none" }} to={to}>
        {children}
      </Link>
    </li>
  </Box>
);
