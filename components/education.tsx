import { Typography, Stack } from "@mui/material";
import Link from "next/link";
import { getSectionData } from "@/lib/content";
import { colors } from "@/lib/colors";
import { TerminalPrompt, TerminalBlock, KV } from "@/components/terminal";

interface ConferencePresentation {
    title: string;
    date: string;
    place: string;
    class: string;
    url: string;
}

interface EducationItem {
    name: string;
    duration: string;
    url: string;
    degree: string;
    department: string;
    major: string;
    lab: string;
    labUrl?: string;
    now?: boolean;
    conferencePresentations?: ConferencePresentation[];
}

interface EducationData {
    items: EducationItem[];
}

const EduEntry = ({ edu }: { edu: EducationItem }) => (
    <TerminalBlock active={edu.now}>
        {edu.now && (
            <Typography variant="body2" sx={{ color: colors.primary, mb: 0.25, fontSize: "0.75rem" }}># current</Typography>
        )}
        <KV k="school" v={edu.name} href={edu.url} />
        <KV k="degree" v={edu.degree} />
        <KV k="dept" v={edu.department} />
        <KV k="lab" v={edu.lab} href={edu.labUrl} />
        <KV k="period" v={edu.duration} />
        {edu.conferencePresentations?.map((p, i) => (
            <Stack key={i} direction="row" spacing={1}>
                <Typography variant="body2" sx={{ color: colors.chrome, minWidth: 72, userSelect: "none" }}>
                    {i === 0 ? "talks :" : ""}
                </Typography>
                <Link href={p.url} style={{ textDecoration: "none" }}>
                    <Typography variant="body2" component="span" sx={{ color: colors.primary, "&:hover": { textDecoration: "underline" } }}>{p.title}</Typography>
                </Link>
                <Typography variant="body2" sx={{ color: colors.muted }}>({p.date}, {p.place})</Typography>
            </Stack>
        ))}
    </TerminalBlock>
);

const Education = () => {
    const { items } = getSectionData<EducationData>("education");
    return (
        <Stack spacing={1}>
            <TerminalPrompt cmd="cat education.md" />
            {items.map((edu, i) => (
                <EduEntry key={i} edu={edu} />
            ))}
        </Stack>
    );
};

export default Education;
