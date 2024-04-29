import {Box, Text} from "../../theme";
import {BackButton} from "../BackButton";

export const Header = ({
  screenName,
  backButton,
}: {
  screenName: string;
  backButton?: boolean;
}) => {
  return (
    <Box
      width="100%"
      height={100}
      backgroundColor="bg_light"
      justifyContent="space-between"
      px="m"
      alignItems="center"
      flexDirection="row">
      {(backButton && <BackButton />) ?? <Box width={50} />}
      <Text variant="header">{screenName}</Text>
      <Box width={50} />
    </Box>
  );
};
