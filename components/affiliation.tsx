import { Stack } from "@mui/material";
import { getSectionData } from "@/lib/content";
import { TerminalPrompt, TerminalBlock, KV } from "@/components/terminal";

interface AffiliationData {
    school: string;
    degree: string;
    year: string;
    supervisor: string;
    url: string;
}

const Affiliation = () => {
    const data = getSectionData<AffiliationData>("affiliation");
    return (
        <Stack spacing={0.5}>
            <TerminalPrompt cmd="cat affiliation.md" />
            <TerminalBlock>
                <KV k="school" v={data.school} minWidth={96} />
                <KV k="degree" v={`${data.degree} — ${data.year}`} minWidth={96} />
                <KV k="supervisor" v={data.supervisor} href={data.url} minWidth={96} />
            </TerminalBlock>
        </Stack>
    );
};

export default Affiliation;
