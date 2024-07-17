import {
  PiPhoneIncomingLight,
  PiPhoneSlashThin,
  PiPhoneOutgoingLight,
} from "react-icons/pi";

export const getIcon = (call) => {
  switch (call.call_type) {
    case "missed":
      return <PiPhoneSlashThin className="call-icon missed" />;
    default:
      switch (call.direction) {
        case "inbound":
          return <PiPhoneIncomingLight color="#90EE90" className="call-icon" />;
        case "outbound":
          return <PiPhoneOutgoingLight color="#9DC8E6" className="call-icon" />;
      }
      return <PiPhoneIncomingLight className="call-icon" />;
  }
};
