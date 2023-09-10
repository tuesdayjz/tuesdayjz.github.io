import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function About() {
  return (
    <Container maxWidth="md" style={{marginTop: "20px"}}>
      <Typography variant="body1">
        現在、早稲田大学 基幹理工学部 情報理工学科の4年生です。
      </Typography>
      <Typography variant="body1">
        趣味は、宝塚歌劇、読書、文章を書くこと、美味しいものを食べること、音楽を聴くことです。
      </Typography>
      <Typography
        variant="h4"
        style={{marginTop: "20px", marginBottom: "10px"}}
      >
        宝塚
      </Typography>
      <Typography variant="body1">
        初観劇: 2021年・雪組 『CITY HUNTER』-盗まれたXYZ-『Fire Fever!』
      </Typography>
      <Typography variant="body1">
        雪組、星組を中心に全組観劇派です。
      </Typography>
      <Typography
        variant="h4"
        style={{marginTop: "20px", marginBottom: "10px"}}
      >
        リンク集
      </Typography>
      <ul style={{listStyleType: "none"}}>
        <li>
          <Link
            href="https://github.com/tuesdayjz"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/kayo-tei-66220925a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </Link>
        </li>
        <li>
          <Link
            href="https://twitter.com/vegetable_umai"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>
        </li>
      </ul>
    </Container>
  );
}
