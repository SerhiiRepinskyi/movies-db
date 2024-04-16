import { Container } from "@mui/material";
import { CountdownVideo } from "./CountdownVideo";
import { CountdownText } from "./CountdownText";

function About() {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <CountdownText />
      <CountdownVideo />
    </Container>
  );
}

export default About;

