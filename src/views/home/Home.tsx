import { GridArea, GridContainer } from "./../../components";
import { Button, Typography } from "@mui/material";

export const Home = () => (
  <GridContainer
    Height="100vh"
    Columns="0.75fr 0.25fr"
    Rows="1fr"
    Areas={["left right"]}
  >
    <GridArea Area="left" BackgroundColor="#293241">
      <Typography
        align="center"
        margin="15px"
        fontSize="5vw"
        color="#fff"
        fontWeight="bold"
      >
        Frågar en fråga
      </Typography>
      <Typography
        paragraph={true}
        color="#fff"
        fontSize="1.25vw"
        margin="1vw 7vw"
      >
        Have you ever held a meeting and opened the floor for questions, only to
        be met with crickets? Maybe there are legitimately no questions. Or
        maybe the audience is a little shy to be identified as the one asking
        the question.
      </Typography>
      <Typography
        paragraph={true}
        color="#fff"
        fontSize="1.25vw"
        margin="1vw 7vw"
      >
        Either way, anonymous questions can help the audience feel comfortable
        to not only inquire about something without feeling singled out, but
        also it can empower them to ask real questions with fear of
        reprecussion.
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button size="large" color="primary">
          Make a new interrogation room
        </Button>
      </div>
    </GridArea>
    <GridArea Area="right" BackgroundColor="#ee6c4d"></GridArea>
  </GridContainer>
);
