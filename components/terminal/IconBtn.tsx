import { Button } from "@mui/material";
import { ReactNode } from "react";

export const IconBtn = ({ href, icon }: { href: string; icon: ReactNode }) => (
  <Button component="a" href={href} sx={{ minWidth: 0, color: "primary.main", p: 0.5 }}>
    {icon}
  </Button>
);
