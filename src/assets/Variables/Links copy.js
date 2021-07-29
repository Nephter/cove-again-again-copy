import {
  FaHome,
  FaBookReader,
  FaTools,
  FaShip,
  FaUserLock,
  FaFileAlt,
  FaNetworkWired,
  FaClipboardList,
} from 'react-icons/fa';

const Links = [
  {
    label: 'Mary',
    link: 'Mary',
    subLinks: [
      {
        label: 'Car',
        link: 'Car',
        subLinks: [],
        description: '',
        icon: '',
      },
      {
        label: 'House',
        link: 'House',
        subLinks: [],
        description: '',
        icon: '',
      },
      {
        label: 'SmartHome',
        link: 'smartHome',
        subLinks: [],
        description: '',
        icon: '',
      },
      {
        label: 'SecondwithSub',
        link: 'secondWithSub',
        subLinks: [
          {
            label: 'Third',
            link: 'Third',
            subLinks: [],
            description: 'VR Default stuff',
          },
          {
            label: 'VRInfo',
            link: 'VRInfo',
            subLinks: [],
            description: 'VR Info stuff',
          },
        ],
        description: '',
        icon: '',
      },
      {
        label: 'CRM',
        link: 'CRM',
        subLinks: [
          {
            label: 'EXP',
            link: 'EXP',
            subLinks: [],
            description: 'VR Default stuff',
          },
        ],
        description: '',
        icon: '',
      },
    ],
    description: '',
    icon: FaHome,
  },
];
export default Links;
