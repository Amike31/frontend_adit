import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';

export const topLinks = [
  {
    id: 1,
    title: 'Account Settings',
    url: '/settings'
  },
  {
    id: 2,
    title: 'Log Out',
    url: '/logout',
    color: 'error.main'
  },
]

export const sideLinks = [ 
  {
    id: 1,
    title: 'Home',
    url: '/',
    icon: <HomeIcon />
  },
  {
    id: 2,
    title: 'History',
    url: '/history',
    icon: <HistoryIcon />
  },
]