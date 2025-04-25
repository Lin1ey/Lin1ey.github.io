export default class Utils {
  getIcon(iconName: string, darkMode: boolean) {
    if (darkMode) return '/svg/' + iconName + '-dark.svg'
    return '/svg/' + iconName + '.svg'
  }
}
