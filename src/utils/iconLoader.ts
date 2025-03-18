// src/utils/iconLoader.js
const icons: Record<string, { default?: string }> = import.meta.glob('@/assets/logos/*.svg', {
  eager: true,
})

export function getIcon(iconName: string): string {
  const iconPath = `/src/assets/logos/${iconName}`
  console.log(icons[iconPath])
  return icons[iconPath].default || ''
}
