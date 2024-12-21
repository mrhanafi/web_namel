import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
  RxMobile,
  RxGear,
  RxCamera,
} from "react-icons/rx";

import janabila from "../assets/janabila.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import SpaceCity6 from "../assets/SpaceCity6.jpeg";
import azaria from "../assets/azaria.jpg";
import SpaceCity8 from "../assets/SpaceCity8.jpeg";
import SpaceCity9 from "../assets/SpaceCity9.jpeg";

export const ServiceData = [
    {
      id: 1,
    icon: RxMobile,
    title: "J A Nabila & Co App",
    client: "J A Nabila & Co.",
    content: "A mobile application integrate with internal management system, cater to show file's progress on-the-go for client and agent. Get notified and manage appointment anytime and anywhere.",
    backgroundImage: project2,
  },
    {
      id: 2,
    icon: RxGear,
    title: "Wifi & Network Installation",
    client: "Era Madani Sdn Bhd",
    content: "Lan cable and fiber optic end-to-end installation, followed by wifi router installation and configuration.",
    backgroundImage: project3,
  },
    {
      id: 3,
    icon: RxDesktop,
    title: "Web App Management System",
    client: "J A Nabila & Co.",
    content: "Customised management system manages internal operation such as file handling, progress's status, invoices & quotations, staffs management and more. System engaged with clients and agents to show their respective progress for their files. Integration with mobile app to notify and show progress, and handles appointment.",
    backgroundImage: janabila,
  },
  {
    id: 4,
  icon: RxMobile,
  title: "Point-Of-Sale Mobile App",
  client: "Pak Lang Car Wash",
  content: "Implementing POS mobile app to record sales daily and monthly. The main feature is the point collection for each service and can be claimed once point collected. Benefitting customers to claim wash service and products sold on premise hence grow the business",
  backgroundImage: azaria,
},
    {
      id: 5,
    icon: RxCamera,
    title: "CCTV Installation",
    client: "Terminal Tech.",
    content: "Centrallized PoE CCTV installation. Devices were installed on each floor to implemenet security surveillance ensuring safety for each homeowner and harmony enviroment.",
    backgroundImage: azaria,
  },
    
  //   {
  //     id: 6,
  //   icon: RxRocket,
  //   title: "Production",
  //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   backgroundImage: SpaceCity8,
  // },
];