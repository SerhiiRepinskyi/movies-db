import { Container } from "@mui/material";
import { CountdownText } from "./CountdownText";

function About() {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <CountdownText />
    </Container>
  );
}

export default About;

