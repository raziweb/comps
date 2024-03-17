import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );
  const modal = (
    <Modal handleClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
        libero fringilla, tristique libero ac, semper nisl. Nulla vehicula
        faucibus leo, ut laoreet elit scelerisque vitae. Phasellus convallis
        volutpat erat, ac venenatis quam finibus ac. Nam id magna tortor. Duis
        nisl odio, consequat at massa id, accumsan dignissim magna. Donec
        accumsan dapibus auctor. Aliquam maximus orci vel quam condimentum, ut
        malesuada felis posuere. Nulla consectetur euismod dui, ac egestas
        magna. Cras sed sapien ut arcu eleifend ultrices et eu neque. Aliquam
        pulvinar mauris lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
        libero fringilla, tristique libero ac, semper nisl. Nulla vehicula
        faucibus leo, ut laoreet elit scelerisque vitae. Phasellus convallis
        volutpat erat, ac venenatis quam finibus ac. Nam id magna tortor. Duis
        nisl odio, consequat at massa id, accumsan dignissim magna. Donec
        accumsan dapibus auctor. Aliquam maximus orci vel quam condimentum, ut
        malesuada felis posuere. Nulla consectetur euismod dui, ac egestas
        magna. Cras sed sapien ut arcu eleifend ultrices et eu neque. Aliquam
        pulvinar mauris lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
        libero fringilla, tristique libero ac, semper nisl. Nulla vehicula
        faucibus leo, ut laoreet elit scelerisque vitae. Phasellus convallis
        volutpat erat, ac venenatis quam finibus ac. Nam id magna tortor. Duis
        nisl odio, consequat at massa id, accumsan dignissim magna. Donec
        accumsan dapibus auctor. Aliquam maximus orci vel quam condimentum, ut
        malesuada felis posuere. Nulla consectetur euismod dui, ac egestas
        magna. Cras sed sapien ut arcu eleifend ultrices et eu neque. Aliquam
        pulvinar mauris lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
        libero fringilla, tristique libero ac, semper nisl. Nulla vehicula
        faucibus leo, ut laoreet elit scelerisque vitae. Phasellus convallis
        volutpat erat, ac venenatis quam finibus ac. Nam id magna tortor. Duis
        nisl odio, consequat at massa id, accumsan dignissim magna. Donec
        accumsan dapibus auctor. Aliquam maximus orci vel quam condimentum, ut
        malesuada felis posuere. Nulla consectetur euismod dui, ac egestas
        magna. Cras sed sapien ut arcu eleifend ultrices et eu neque. Aliquam
        pulvinar mauris lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
        libero fringilla, tristique libero ac, semper nisl. Nulla vehicula
        faucibus leo, ut laoreet elit scelerisque vitae. Phasellus convallis
        volutpat erat, ac venenatis quam finibus ac. Nam id magna tortor. Duis
        nisl odio, consequat at massa id, accumsan dignissim magna. Donec
        accumsan dapibus auctor. Aliquam maximus orci vel quam condimentum, ut
        malesuada felis posuere. Nulla consectetur euismod dui, ac egestas
        magna. Cras sed sapien ut arcu eleifend ultrices et eu neque. Aliquam
        pulvinar mauris lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
        libero fringilla, tristique libero ac, semper nisl. Nulla vehicula
        faucibus leo, ut laoreet elit scelerisque vitae. Phasellus convallis
        volutpat erat, ac venenatis quam finibus ac. Nam id magna tortor. Duis
        nisl odio, consequat at massa id, accumsan dignissim magna. Donec
        accumsan dapibus auctor. Aliquam maximus orci vel quam condimentum, ut
        malesuada felis posuere. Nulla consectetur euismod dui, ac egestas
        magna. Cras sed sapien ut arcu eleifend ultrices et eu neque. Aliquam
        pulvinar mauris lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
        libero fringilla, tristique libero ac, semper nisl. Nulla vehicula
        faucibus leo, ut laoreet elit scelerisque vitae. Phasellus convallis
        volutpat erat, ac venenatis quam finibus ac. Nam id magna tortor. Duis
        nisl odio, consequat at massa id, accumsan dignissim magna. Donec
        accumsan dapibus auctor. Aliquam maximus orci vel quam condimentum, ut
        malesuada felis posuere. Nulla consectetur euismod dui, ac egestas
        magna. Cras sed sapien ut arcu eleifend ultrices et eu neque. Aliquam
        pulvinar mauris lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
        libero fringilla, tristique libero ac, semper nisl. Nulla vehicula
        faucibus leo, ut laoreet elit scelerisque vitae. Phasellus convallis
        volutpat erat, ac venenatis quam finibus ac. Nam id magna tortor. Duis
        nisl odio, consequat at massa id, accumsan dignissim magna. Donec
        accumsan dapibus auctor. Aliquam maximus orci vel quam condimentum, ut
        malesuada felis posuere. Nulla consectetur euismod dui, ac egestas
        magna. Cras sed sapien ut arcu eleifend ultrices et eu neque. Aliquam
        pulvinar mauris lacus.
      </p>
    </div>
  );
}

export default ModalPage;
