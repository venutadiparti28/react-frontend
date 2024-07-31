import { Modal, useMantineTheme } from "@mantine/core";
// import PostShare from "../PostShare/PostShare";
import RegisterForm from "../RegisterForm/RegisterForm";

import "./RegisterModal.css";

function RegisterModal({ modalOpened, setModalOpened }) {
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
    <RegisterForm/>
    </Modal>
  );
}

export default RegisterModal;
