import { Modal, useMantineTheme } from "@mantine/core";
import PostShare from "../PostShare/PostShare";

function ComingSoonModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
    {/* <PostShare/> */}

    <center><h1 style={{ color: "var(--video)" }}>Comming Soon...</h1></center>
    </Modal>
  );
}

export default ComingSoonModal;
