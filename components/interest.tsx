import { Stack, Box } from "@mui/material";
import { getSectionHtml } from "@/lib/content";
import { colors } from "@/lib/colors";
import { TerminalPrompt, TerminalBlock } from "@/components/terminal";

const Interest = async () => {
    const html = await getSectionHtml("interest");
    return (
        <Stack spacing={0.5}>
            <TerminalPrompt cmd="cat interests.md" />
            <TerminalBlock>
                <Box
                    dangerouslySetInnerHTML={{ __html: html }}
                    sx={{
                        "& ul": { margin: 0, paddingLeft: 0, listStyle: "none" },
                        "& li": {
                            fontSize: "0.875rem", lineHeight: 1.7, marginBottom: 0.75,
                            paddingLeft: "1rem",
                        },
                        "& li strong": {
                            display: "block", marginLeft: "-1rem",
                            color: colors.primary, fontWeight: 600,
                        },
                        "& a": { color: colors.primary, textDecoration: "none", "&:hover": { textDecoration: "underline" } },
                    }}
                />
            </TerminalBlock>
        </Stack>
    );
};

export default Interest;
