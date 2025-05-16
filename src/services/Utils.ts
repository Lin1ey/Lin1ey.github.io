export default class Utils {
  getIcon(iconName: string, darkMode: boolean) {
    if (darkMode) return '/svg/' + iconName + '-dark.svg'
    return '/svg/' + iconName + '.svg'
  }
  capitalizeFirstLetter = (val: string) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
}
