import {
  Search,
  GamepadRounded,
  AccessibilityNew,
  LibraryAdd,
  ImportContacts,
  BugReport,
  People,
  Group,
  Adb,
  VpnKey,
  Home,
  AddCircleOutline
} from '@material-ui/icons'

import { FINANCIAL_BEINGS } from '../../../constants/routes'

const usersMenus = {
  title: 'Users',
  to: '/users',
  icon: Home,
  submenus: [
    { title: 'Directory', to: '/users/browse', icon: ImportContacts },
    { title: 'Search', to: '/users/search', icon: Search },
    { title: 'Your Profile', to: '/users/user', icon: People, authenticated: true },
    { title: 'Report a Bug', to: 'https://github.com/AdvancedAlgos/UsersModule/issues/new', icon: BugReport, externalLink: true }
  ]
}

const teamsMenus = {
  title: 'Teams',
  to: '/teams',
  icon: Home,
  submenus: [
    { title: 'Directory', to: '/teams/explore', icon: ImportContacts },
    { title: 'Your teams', to: '/teams/manage-teams', icon: Group, authenticated: true },
    { title: 'Team members', to: '/teams/team-members', icon: People, authenticated: true },
    { title: 'Report a Bug', to: 'https://github.com/AdvancedAlgos/TeamsModule/issues/new', icon: BugReport, externalLink: true }
  ]
}

const eventsMenus = {
  title: 'Events',
  to: '/events',
  icon: Home,
  submenus: [
    { title: 'Directory', to: '/events', icon: ImportContacts },
    { title: 'Your events', to: '/events/my', icon: GamepadRounded, authenticated: true },
    { title: 'Your hosted events', to: '/events/host', icon: AccessibilityNew, authenticated: true },
    { title: 'Host an event', to: '/events/create', icon: LibraryAdd, authenticated: true },
    { title: 'Report a Bug', to: 'https://github.com/AdvancedAlgos/UsersModule/issues/new', icon: BugReport, externalLink: true }
  ]
}

const keyvaultMenus = {
  title: 'Key Vault',
  to: '/key-vault',
  icon: Home,
  authenticated: true,
  submenus: [
    { title: 'Your keys', to: '/key-vault/browse', icon: VpnKey },
    { title: 'Add key', to: '/key-vault/addKey', icon: AddCircleOutline },
    { title: 'Report a Bug', to: 'https://github.com/AdvancedAlgos/KeyVaultModule/issues/new', icon: BugReport, externalLink: true }
  ]
}

const financialBeingsMenus = {
  title: 'Financial beings',
  to: FINANCIAL_BEINGS,
  authenticated: false,
  submenus: []
}

const allMenus = [
  usersMenus,
  teamsMenus,
  eventsMenus,
  // financialBeingsMenus,
  keyvaultMenus
]

export default allMenus
