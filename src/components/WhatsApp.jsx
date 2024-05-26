import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsApp = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+573016389477"
        accountName="Jose Chaverra"
        avatar="https://flowbite.com/docs/images/logo.svg"
        chatMessage="Hola! ¿En qué puedo ayudarte?"
        statusMessage="Disponible para chatear"
        notification={true}
        notificationDelay="3"
        placeholder="Escribe un mensaje..."
        allowClickAway
      />
    </div>
  );
};

export default WhatsApp;
