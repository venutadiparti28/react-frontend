import { Modal, useMantineTheme } from "@mantine/core";
import PostShare from "../PostShare/PostShare";
import NewPost from "../NewPost/NewPost";

import "./ShareModal.css";

function ShareModal({ modalOpened, setModalOpened }) {
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
      size="80%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
    {/* <PostShare/> */}
    <NewPost/>
    </Modal>
  );
}

export default ShareModal;
