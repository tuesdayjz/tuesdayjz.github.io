import { Stack, Typography, Box } from "@mui/material";
import { MusicNoteRounded } from "@mui/icons-material";
import { getSectionHtml } from "@/lib/content";

const Hobby = async () => {
    const html = await getSectionHtml("hobby");
    return (
        <Stack direction="column" spacing={1.5}>
            <Stack direction="row" spacing={1} alignItems="center">
                <MusicNoteRounded sx={{ color: "primary.main", fontSize: 20 }} />
                <Typography variant="h5">Hobbies</Typography>
            </Stack>
            <Box
                dangerouslySetInnerHTML={{ __html: html }}
                sx={{
                    "& ul": { margin: 0, paddingLeft: 2.5 },
                    "& li": { color: "text.primary", marginBottom: 0.75, lineHeight: 1.7 },
                    "& strong": { color: "primary.main" },
                    "& a": { color: "primary.main", textDecoration: "none", "&:hover": { textDecoration: "underline" } },
                }}
            />
        </Stack>
    );
};

export default Hobby;
